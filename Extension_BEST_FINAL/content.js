
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

// fetchLink() grabs the HTML content from the found link
function fetchLink(link) {
    // travel to the link and get content
    fetch(link).then(function (response) {
        return response.text();
    }).then(function (html) {
        // the html content we're looking for
            // console.log(html); 
        // creating the needed JSON object
        const my_obj = {"privacyPolicy": html};

        // post content 
        fetch("http://127.0.0.1:5000/sendpolicy", {
        mode:  'cors', 
        method: 'POST', 
        headers: { "Content-type": "application/json"},
        body: JSON.stringify(my_obj)
        }).then(function (response) {
            console.log("i'm in response!")
            console.log(response.text()); 
            if (response.status === 200) {
                // get content 
                fetch("http://127.0.0.1:5000/sum", { 
                    mode:  'cors', 
                    method: 'GET',
                }).then(function (response) {
                    console.log("i'm in response! 2!")
                    return response.text();
                }).then(function (data) {
                    console.log("i'm data");
                    console.log(data);
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

