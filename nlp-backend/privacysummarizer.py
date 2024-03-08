from summarizer.sbert import SBertSummarizer



def receive_text(self):
    pass


def html_To_Text(self,html):
    pass

def get_Summary(text,num_sentences):
    model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
    result = model(text, num_sentences=num_sentences)
    return result

def send_Summary(self):
    pass
