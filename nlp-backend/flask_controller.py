import json
from flask import Flask, jsonify, request

from summarizer.sbert import SBertSummarizer
from bs4 import BeautifulSoup, NavigableString, Tag

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
  


# run methods here to ensure we can take care of 
def html_to_text(html):
    """Function take html file and extract given text."""
    f = open("output/privacyPolicy.txt", "a", encoding="utf-8")
    soup = BeautifulSoup(html, 'html.parser')
    for header in soup.find_all({'h3','h2','h1'}):
        next_node = header
        while True:
            next_node = next_node.nextSibling
            if next_node is None:
                break
            if isinstance(next_node,NavigableString ):
                print (next_node.strip())
            if isinstance(next_node, Tag):
                if next_node.name == "h2"or next_node.name == "h1" or next_node.name == "h3" :
                    #print(soup.find(string=nextNode.text.strip()))
                    break
                f.write(next_node.get_text(strip=True).strip())
    f.close()

def get_summary(text,num_sentences):
    """Function take text file and outputs given sumary of said text useing nlp model."""
    model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
    result = model(text, num_sentences=num_sentences)
    return result


# get request 
@app.route('/sum', methods=['GET'])
def send_summary():
  print(PrivacyPolicy[0])
  make_sum= get_summary(PrivacyPolicy[0],5)
  
  return make_sum

if __name__ == '__main__':
  app.run(port=5000)