from app import app
from flask import jsonify, render_template, render_template_string


@app.route('/')
def main_page():
    return render_template("frontend/main_page/index.html")