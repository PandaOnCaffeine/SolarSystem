from flask import Flask, jsonify
import serial
import time

app = Flask(__name__)
ser = serial.Serial('COM3', 9600)

@app.route('/')
def get_sensor_data():
    ser.write(b'GET_SENSOR\n')
    time.sleep(0.1)
    sensor_data = ser.readline().decode().strip()
    return jsonify(sensor_data)

if __name__ == '__main__':
    app.run()
