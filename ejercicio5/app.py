from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular_notas', methods=['POST'])
def calcular_notas():
    data = request.get_json()
    notas = data['notas']
    promedio = sum(notas) / len(notas) if notas else 0
    maxima_nota = max(notas) if notas else 0
    return jsonify({'promedio': promedio, 'maximaNota': maxima_nota})

@app.route('/verificar_edad', methods=['POST'])
def verificar_edad():
    data = request.get_json()
    # Agrega aquí la lógica para verificar la edad
    # Puedes utilizar la fecha de nacimiento y compararla con la fecha actual
    # Devuelve un JSON indicando si el alumno es mayor de edad o no
    return jsonify({'esMayor': True})  # Cambia esto según tu lógica

if __name__ == '__main__':
    app.run(debug=True, port=5000)
