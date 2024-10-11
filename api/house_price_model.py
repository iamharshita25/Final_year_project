import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
import joblib

# Load the dataset
data = pd.read_csv('House Price India.csv')

# Drop unnecessary columns
data = data.drop(columns=['id', 'Date', 'Price'])

# Features and target
X = data.drop(columns=['Final Price'])
y = data['Final Price']

# Splitting the data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardizing the features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Initialize and train the Random Forest Regressor
model = RandomForestRegressor(random_state=42)
model.fit(X_train_scaled, y_train)

# Save the model and scaler
joblib.dump(model, 'house_price_model.joblib')
joblib.dump(scaler, 'scaler.joblib')