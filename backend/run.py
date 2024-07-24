from app import app, db, admin
from app.models import User
from flask_admin.contrib.sqla import ModelView

class UserView(ModelView):
    form_columns = ("username",)
    column_list = ("username",)
    column_exclude_list = ['password_hash']
    
with app.app_context():
    db.create_all()
    admin.add_view(UserView(User, db.session))
    app.run(host="0.0.0.0", port=8080, debug=True)