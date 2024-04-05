
fetchLink(findLink())

// findLink() finds the link to the privacy policy on the current webpage or tab of the Chrome Extension
function findLink() {
    // attempt to find link in a <a></a> in the document 
    let link = document.evaluate("//a[contains(text(), 'Policy')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    // can't find it <a></a>? then try to find it in a button
    if (link === null) {
        link = document.evaluate("//button[contains(text(), 'Policy')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
        // can't find it in button? then send error message to html and return
        if (link === null) {
            // MH -- insert html content for index.html
            return "empty"
        }
    }
    return link
}

// parsePolicy(html) returns only text content from the privacy policy `html`
function parsePolicy(html) {
    // we use DOMParser to transform the html content to a form where we can easily extract what we're looking for
    let doc = new DOMParser().parseFromString(html, 'text/html');
    // get the paragraphs from the html
    let paragraphs = doc.getElementsByTagName("p");
    // initalize our return text variable to empty string
    let text = "";
    // iterate through all paragraphs and add ones with textContent to our text variable
    for (let i = 0; i < paragraphs.length; i++) {
        // the conditional is needed, so we don't run into an error with adding null object or empty content to our text variable 
        if (paragraphs[i].childNodes[0] != null) {
            text += "" + paragraphs[i].childNodes[0].textContent + "\n"; 
        }
    }
    // return final output
    return text;
}

// fetchLink() grabs the HTML content from the found link
function fetchLink(link) {
    // travel to the link and get content
    fetch(link).then(function (response) {
        return response.text();
    }).then(function (html) {
        // `html` is the content from the webpage 
        // we need to extract only the text privacy policy webpage 
        let policy_text = parsePolicy(html);

        // turn our content to JSON object for our back-end analysis 
        const my_obj = {"privacyPolicy": policy_text};

        // post content -- send privacy policy to backend 
        fetch("http://127.0.0.1:5000/sendpolicy", {
        mode:  'cors', 
        method: 'POST', 
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(my_obj)
        }).then(function (response) {
            console.log("i'm in response!")
            console.log(response.text()); 
            if (response.status === 200) {
                // get content -- retrieve summary from backend 
                fetch("http://127.0.0.1:5000/sum", { 
                    mode:  'cors', 
                    method: 'GET',
                }).then(function (response) {
                    console.log("i'm in response! 2!")
                    return response.text();
                }).then(function (data) {
                    console.log("i'm data");
                    console.log(data);
                    // insert code to send message and/or update index html with content
                }).catch(function (error) {
                    console.log('Request failed', error);
                });
            }
    });
    }).catch(function (err) {
        // an error occured
        console.warn('Something went wrong.', err);
    });
}

