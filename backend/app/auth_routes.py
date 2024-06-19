from flask import request, jsonify
from flask_jwt_extended import (
    JWTManager, create_access_token, 
    get_jwt_identity, jwt_required, create_refresh_token
)
from app import app, db, jwt
from app.models import User
import hashlib


@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username').strip()
    password = data.get('password').strip()

    if not username or not password:
        return jsonify({"error": "Missing required fields"}), 400

    user = db.session.query(User).filter_by(username=username).first() 
    if user:
        # Проверяем пароль
        if user.check_password(password):
            # Создаем JWT-токен
            access_token = create_access_token(identity=user.id)
            refresh_token = create_refresh_token(identity=user.id)
            return jsonify(access_token=access_token, refresh_token=refresh_token), 200
        else:
            return jsonify({"error": "Bad login credentials"}), 401
    else:
        # Создаем нового пользователя
        new_user = User(username=username)
        new_user.set_password(password=password)
        db.session.add(new_user)
        db.session.commit()
        # Создаем JWT-токен для нового пользователя
        access_token = create_access_token(identity=new_user.id)
        refresh_token = create_refresh_token(identity=new_user.id)
        return jsonify(access_token=access_token, refresh_token=refresh_token), 201

if __name__ == '__main__':
    app.run(debug=True)