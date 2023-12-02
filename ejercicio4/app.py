from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('pagina_calculadora.html')

@app.route('/calcular_get', methods=['GET'])
def calcular_get():
    num1 = float(request.args.get('num1'))
    num2 = float(request.args.get('num2'))
    operacion = request.args.get('operacion_get')

    resultado = realizar_operacion(num1, num2, operacion)

    return f'Resultado (GET): {"aca esta el resultado",resultado}'

@app.route('/calcular_post', methods=['POST'])
def calcular_post():
    num1 = float(request.form['num1'])
    num2 = float(request.form['num2'])
    operacion = request.form['operacion_post']

    resultado = realizar_operacion(num1, num2, operacion)

    return f'Resultado (POST): {resultado}'

def realizar_operacion(num1, num2, operacion):
    if operacion == 'suma':
        return num1 + num2
    elif operacion == 'resta':
        return num1 - num2
    elif operacion == 'multiplicacion':
        return num1 * num2
    elif operacion == 'division':
        if num2 != 0:
            return num1 / num2
        else:
            return 'Error: División por cero.'

if __name__ == '__main__':
    app.run(debug=True)
