from summarizer.sbert import SBertSummarizer
class sumeraizer:
    pass


    def receive_text(self):
        pass


    def html_To_Text(self,html):
        pass

    def get_Summary(self,text,num_sentences):
        model = SBertSummarizer('paraphrase-MiniLM-L6-v2')
        result = model(text, num_sentences=4)
        return result

    def send_Summary(self):
        pass
