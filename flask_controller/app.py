from flask import Flask, request
import json
from nlp_code import get_summary

app = Flask(__name__)

@app.route('/')
def hello_world():
  return 'Hello, World!'

# PrivacyPolicy= []
# # function gets privacy policy
# @app.route('/sendpolicy', methods=['POST'])
# def get_privacy_policy():
#   request_data = request.get_json()
#   retrivedPolicy= request_data['privacyPolicy']
#   PrivacyPolicy.append(retrivedPolicy)
#   print(PrivacyPolicy)
#   return PrivacyPolicy

# # get request 
# @app.route('/sum', methods=['GET'])
# def send_summary():
#   make_sum= get_summary(PrivacyPolicy.pop(),5)
#   return make_sum
