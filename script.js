function copyEmailToClipboard() {
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");
    // Assign the email address to be copied
    textarea.value = "luisdzib545@gmail.com";
    // Make the textarea non-visible
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    // Append the textarea to the HTML document
    document.body.appendChild(textarea);
    // Select and copy the content of the textarea
    textarea.select();
    document.execCommand("copy");
    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Alert or feedback (optional)
    alert("Email copied to clipboard: your-email@example.com");
}

function copyPhoneToClipboard() {
    // Create a temporary textarea element
    var textarea = document.createElement("textarea");
    // Assign the email address to be copied
    textarea.value = "+52 9851091207";
    // Make the textarea non-visible
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
    // Append the textarea to the HTML document
    document.body.appendChild(textarea);
    // Select and copy the content of the textarea
    textarea.select();
    document.execCommand("copy");
    // Remove the temporary textarea
    document.body.removeChild(textarea);

    // Alert or feedback (optional)
    alert("Email copied to clipboard: your-email@example.com");
}