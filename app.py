
from flask import Flask,render_template,request,redirect,flash,url_for
import pickle as pk

app = Flask(__name__)
#app.secret_key = "scretkey123" 
#@app.route('/')
#def index():
   # return render_template('index.html')

@app.route('/',methods=['POST','GET'])
def index():
    if request.method == 'POST':
        noc = request.form['course_no']
        ts = request.form['time_s']
        c = [noc,ts]
        mark = [float(i) for i in c]
        model = pk.load(open('model.pkl','rb'))
        pred = model.predict([mark])
        flash(pred)
        return render_template('index.html')
        

if __name__ == "__main__":
    app.run(debug=False)

