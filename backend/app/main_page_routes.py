from app import app, db
from flask import jsonify, request, redirect, url_for
from flask_jwt_extended import jwt_required, get_jwt_identity
from sqlalchemy.exc import IntegrityError
from app.models import Comment, User

@app.route('/api/create-comment', methods=['POST'])
@jwt_required()
def create_comment():
    print(request.headers['Authorization'])
    auth_header = request.headers.get('Authorization')
    if not auth_header or 'Bearer' not in auth_header:
        return redirect("http:/localhost:3000/login")
        
    # Получение содержания комментария из тела запроса
    author_id = get_jwt_identity()
    data = request.get_json()
    content = data.get('content')
    author = User.query.filter_by(id=author_id).one()
    # Проверка, что содержание комментария предоставлено
    if not content:
        return jsonify({'error': 'Комментарий не предоставлен'}), 400

    # Проверка, что автор существует
    user = User.query.filter_by(id=author_id).one()
    if not user:
        return jsonify({'error': 'Автор не найден'}), 404

    # Создание нового комментария
    comment = Comment(author_id=author_id, content=content, author=author)
    db.session.add(comment)

    try:
        db.session.commit()
    except IntegrityError as e:
        db.session.rollback()
        return jsonify({'error': 'Ошибка при сохранении комментария'}), 500

    return jsonify({'success': True}), 201


@app.route('/api/get-comments', methods=['GET'])
def get_comments():
    comments = Comment.query.options(
        db.joinedload(Comment.author)
    ).all()

    comments_list = [
        {
            "id": comment.id,
            "content": comment.content,
            "author_name": comment.author.username
        }
        for comment in comments
    ]

    return jsonify(comments_list)


@app.route('/api/refresh-token', methods=['POST'])
@jwt_required(refresh=True)
def refresh():
    # Предполагается, что токен доступа истек, а refresh token действителен
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user.id)
    return jsonify(access_token=access_token), 200