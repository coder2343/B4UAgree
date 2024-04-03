import json
from flask import Flask, jsonify, request
from privacysummarizer import get_summary

app = Flask(__name__)

# privacy_policies = [
#  { 'id': 1, 'policy': '', 'summary':''},
#  { 'id': 2, 'name': 'Kate' },
#  { 'id': 3, 'name': 'Joe' }
# ]

# nextPrivacyPolicyID = 1

# jsonify privacy policy 

PrivacyPolicy= []
# function gets privacy policy
@app.route('/sendpolicy', methods=['POST'])
def get_privacy_policy():
  request_data = request.get_json()
  retrivedPolicy= request_data['privacyPolicy']
  PrivacyPolicy.append(retrivedPolicy)
  print(PrivacyPolicy)
  return PrivacyPolicy
  

# get request 
@app.route('/sum', methods=['GET'])
def send_summary():
  print(PrivacyPolicy[0])
  make_sum= get_summary(PrivacyPolicy[0],5)
  
  return make_sum

if __name__ == '__main__':
  app.run(port=5000)