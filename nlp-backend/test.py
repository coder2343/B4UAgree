from privacysummarizer import get_Summary

#get text
f_g=open('/Users/walshlia/Documents/GitHub/B4UAgree/test-privacy/privacy/grinnell_privacy.txt','r')
rawText_grinnell=f_g.read()
#run method and print result
print(get_Summary(rawText_grinnell,4))

