from flask import Flask, render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/development")
def development():
    return render_template("development.html")

@app.route("/research")
def research():
    return render_template("research.html")

@app.route("/explore")
def explore():
    return render_template("explore.html")

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port)
