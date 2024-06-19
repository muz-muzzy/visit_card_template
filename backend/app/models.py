from app import db, ma
from werkzeug.security import check_password_hash, generate_password_hash
from marshmallow_sqlalchemy import fields, auto_field
from sqlalchemy import Column, Integer, String, ForeignKey, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from marshmallow_sqlalchemy import fields, auto_field

Base = declarative_base()

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    password_hash = db.Column(db.String)
    
    def __repr__(self):
        return f"<User {self.username}>"
    
    def check_password(self, password):
        return check_password_hash(pwhash=self.password_hash, password=password)
    
    def set_password(self, password):
        self.password_hash = generate_password_hash(password=password, method='pbkdf2:sha256')

class Project(db.Model):
    __tablename__ = 'projects'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    link = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    owner = relationship('User')

class Comment(db.Model):
    __tablename__ = 'comments'
    
    id = db.Column(db.Integer, primary_key=True)
    author_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    content = db.Column(db.String, nullable=False)
    author = relationship('User')


class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        load_instance = True

    id = ma.auto_field()
    username = ma.auto_field()
    
class ProjectSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Project
        load_instance = True

    id = ma.auto_field()
    name = ma.auto_field()
    description = ma.auto_field()
    link = ma.auto_field()
    owner = fields.Nested(UserSchema)
    
class CommentSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Comment
        load_instance = True

    id = ma.auto_field()
    content = ma.auto_field()
    author = fields.Nested(UserSchema)