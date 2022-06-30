/*
    Name: Mike Villeneuve
    Date: 06/30/2022
*/


// Function to initialize the page
const init = () => {
    "use strict";

    ajaxRequest();
}

// Requests data from a server and displays the plain text data recieved as 
// an HTML heading
const ajaxRequest = () => {
    "use strict";

    // Declare limited scope variables
    let xhr = new XMLHttpRequest();
    let url = "txt/text.txt";
    let method = "get";

    // Open connection
    xhr.open(method, url);

    // Callback
    xhr.addEventListener(
            "readystatechange"
            , () => {
                if (xhr.readyState == 4 && xhr.status == 200) 
                {
                    let message = xhr.responseText;
                    let heading = document.createElement("h1");
                    heading.innerHTML = message;
                    document.body.appendChild(heading);
                    console.log(message);  // mirror displayed results to console
                }
    });

    // Send
    xhr.send(null);
}

// Calls the initialization function on page load
window.onload = init;