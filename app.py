from flask import Flask,render_template,request,redirect,flash,url_for
import pickle as pk

app = Flask(__name__)

@app.route('/index',methods=['POST','GET'])
def index():
    if request.method == 'POST':
        noc = request.form['course_no']
        ts = request.form['time_s']
        c = [noc,ts]
        features = [float(i) for i in c]
        model = pk.load(open('model.pkl','rb'))
        pred = model.predict([features])
        return render_template('index.html', pred = pred)
        

if __name__ == "__main__":
    app.run(debug=False)
