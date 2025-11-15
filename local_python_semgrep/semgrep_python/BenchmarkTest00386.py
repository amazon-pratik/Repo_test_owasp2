#{fact rule=untrusted-deserialization@v1.0 defects=1}

# example from https://medium.com/gdg-vit/deserialization-attacks-d312fbe58e7d
# flask_app.py
import os
import pickle
from uuid import uuid1
from flask import Flask, make_response, request
from base64 import b64encode, b64decode
# The User Class which assigns a random ID to each connection
class UserID:
    def __init__(self, uuid=None):
        self.uuid = str(uuid1())
    def __str__(self):
        return self.uuid

# The main Flask Backend
app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    user_obj = request.cookies.get('uuid')
    if user_obj == None:
        msg = "Seems like you didn't have a cookie. No worries! I'll set one now!"
        response = make_response(msg)
        user_obj = UserID()
        # ruleid:insecure-deserialization
        response.set_cookie('uuid', b64encode(pickle.dumps(user_obj)))
        return response
    else:
        # ruleid:insecure-deserialization
        return "Hey there! {}!".format(pickle.loads(b64decode(user_obj)))


#{/fact}
