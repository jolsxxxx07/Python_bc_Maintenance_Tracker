from flask import Flask, json, request, render_template
from flask.ext.socketio import SocketIO, emit
from Database_creation import Database_creation
from DatabaseManipulator import DataManipulate
from werkzeug import secure_filename
import os
from EmailSender import EmailS
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = os.path.sep+'uploads'+os.path.sep+'images'

socketio = SocketIO(app)


 
@app.route("/dashboard")
def dashboarder():
	print("helo")
	return render_template('dashboard.html')


@app.route("/")
def main():
	return render_template('index.html')



@app.route("/login",methods=['POST'])
def login():
    _username = request.form['username']
    _password = request.form['password']

    if _username and _password:
        create_data = DataManipulate()

        return json.dumps(create_data.getUser(_username,_password))
    else:
        return json.dumps({"error":false})

@app.route("/signUp",methods=['POST'])
def signUp():

    _username = request.form['username']
    _password = request.form['password']
    _email = request.form['email']
    _firstname = request.form['firstname']
    _status = request.form['status']


    if _username and _password and _email and _firstname and _status:

        create_data = DataManipulate()

        return json.dumps(create_data.createNewUser(_username,_password, _firstname,_email,_status))
    else :
        return json.dumps({"error":"false"})

 
@app.route("/AddUser",methods=['POST'])
def addUser():
 	_username = request.form['username']
 	_email = request.form['email']
 	_password = request.form['password']

 	if _username and _password and _email:
 		return json.dumps()
 	else:
 		return json.dumps()

@app.route("/Upload",methods=['POST'])
def upload():
    UPLOAD_FOLDER = '/path/to/the/uploads'
    print("in here")
    ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
    if request.method == 'POST':
        
        file = request.files['image']
         

        f_name = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], request.form['refId']))
        item_name = request.form['itemname']
        ref_id=request.form['refId']
        description = request.form['description']
        addedby = request.form['addedby']

        if f_name and ref_id and item_name and description:

            create_data = DataManipulate()
            return json.dumps(create_data.addProduct(ref_id,item_name,description,"0",addedby))

        else:
            pass




@app.route("/getProduct",methods=['GET'])
def addProduct():

    create_data = DataManipulate()
    return json.dumps(create_data.get_All_products())


@app.route("/AcceptProduct")
def acceptRepair():
    print("came here to add product")
    usernmail =request.args.get('email')
    userid = request.args.get('id')
    item = request.args.get('item');
    status = request.args.get('status')
    print(item)
    create_data = DataManipulate()
    create_data.logProduct(item,userid,"",status,"")
    sendEmail()

@app.route("/ViewProductActivity")
def listSpecificProduct():
    itemname = request.args.get("itemid")
    if itemname:
        create_data = DataManipulate()
        return json.dumps(create_data.activityLog(itemname))
    else:
        create_data = DataManipulate()
        return json.dumps(create_data.allActivity())

@socketio.on('request', namespace='/test')
def test_message(message):
    print("came here in socket ")
    
    '''sendEmail()'''
    status=message['data'][0]
    itemname=message['data'][1]
    user=message['data'][2]
    email=message['data'][3]
    if status and itemname and user and email:
        sendEmail(status,itemname,user,email)
    else:
        pass
    emit('my response', {'data': message['data']})

@socketio.on('my broadcast event', namespace='/test')
def test_message(message):
    emit('my response', {'data': message['data']}, broadcast=True)

@socketio.on('connect', namespace='/test')
def test_connect():
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect', namespace='/test')
def test_disconnect():
    print('Client disconnected')


@socketio.on('message', namespace='/test')
def test_disconnect():
    emit('my response', {'data': message['data']})

@socketio.on('requestmaintain', namespace='/admin')
def test_message(message):
    emit('my response', {'data': message['data']}, broadcast=True)


def sendEmail(status,itemname,user,emails):

    email = EmailS()
    return email.configure_Mail(  status , itemname,   user, emails)




    


data = Database_creation()
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

if __name__ == '__main__':
    socketio.run(app)






