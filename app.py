from flask import Flask,render_template,request,redirect,flash,url_for
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error,mean_absolute_error
import pickle as pk

app = Flask(__name__)
app.secret_key = "hello"
@app.route('/', methods=['POST','GET'])
def index():
    if request.method == 'POST':
        noc = request.form['course_no']
        ts = request.form['time_s']
        c = [noc,ts]
        features = [float(i) for i in c]
        model = pk.load(open('model.pkl','rb'))
        pred = model.predict([features])
        flash(pred)
    return render_template('index.html')
if __name__ == "__main__":
    app.run(debug=False)
