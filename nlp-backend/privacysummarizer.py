from summarizer.sbert import SBertSummarizer
from bs4 import BeautifulSoup, NavigableString, Tag


def receive_text(self):
    pass


def html_to_text(self,html):
    """Function take html file and extract given text."""
    f = open("output/privacyPolicy.txt", "a", encoding="utf-8")
    soup = BeautifulSoup(html, 'html.parser')
    for header in soup.find_all({'h3','h2','h1'}):
        nextNode = header
        while True:
            nextNode = nextNode.nextSibling
            if nextNode is None:
                break
            if isinstance(nextNode,NavigableString ):
                print (nextNode.strip())
            if isinstance(nextNode, Tag):
                if nextNode.name == "h2"or nextNode.name == "h1" or nextNode.name == "h3" :
                    #print(soup.find(string=nextNode.text.strip()))
                    break
                f.write(nextNode.get_text(strip=True).strip())
    f.close()



def get_summary(text,num_sentences):
    """Function take text file and outputs given sumary of said text useing nlp model."""
    model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
    result = model(text, num_sentences=num_sentences)
    return result

def send_summary(result):
    """Function take summary and saves text file"""
    f = open("output/summary.txt", "a", encoding="utf-8")
    f.write(result)
    f.close()
