from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
                
app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def index():
    return render_template('cliente.html')

@app.route('/ordenar_nombres', methods=['POST'])
def ordenar_nombres():
    data = request.get_json()
    nombres = data['nombres']
    nombres_ordenados = sorted(nombres)
    return jsonify({'nombres': nombres_ordenados})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
