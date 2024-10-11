from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model and scaler
model = joblib.load('house_price_model.joblib')
scaler = joblib.load('scaler.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    features = np.array([list(data.values())])
    scaled_features = scaler.transform(features)
    prediction = model.predict(scaled_features)
    return jsonify({'predicted_price': prediction[0]})

if __name__ == '__main__':
    app.run(port=5000)