from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def calcular_presupuesto(tiempo, forma_pago):
    presupuesto_base = 12000
    porcentaje_adicional = 0

    if tiempo <= 5:
        porcentaje_adicional += 2

    if forma_pago == 'credito':
        porcentaje_adicional += 15

    presupuesto_final = presupuesto_base * (1 + porcentaje_adicional / 100)
    return presupuesto_final

@app.route('/')
def index():
    return render_template('cliente.html')

@app.route('/calcular', methods=['POST'])
def enviar_solicitud():
    try:
        data = request.get_json()

        cuit = data['cuit']
        nombre = data['nombre']
        telefono = data['telefono']
        categoria = data['categoria']
        tiempo = int(data['tiempo'])  
        forma_pago = data['formaPago']

        presupuesto = calcular_presupuesto(tiempo, forma_pago)

        resultado = {
            'cuit': cuit,
            'nombre': nombre,
            'telefono': telefono,
            'categoria': categoria,
            'tiempo': tiempo,
            'formaPago': forma_pago,
            'presupuesto': presupuesto
        }

        return jsonify(resultado)

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)