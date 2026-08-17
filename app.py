from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__)

# Página principal
@app.route("/")
def index():
    return render_template("index.html")


# Descarga de recursos gratuitos
@app.route("/descargar/<filename>")
def descargar(filename):
    carpeta = os.path.join(app.root_path, "descargar", "downloads")

    return send_from_directory(
        carpeta,
        filename,
        as_attachment=True
    )


if __name__ == "__main__":
    app.run(debug=True)