function IsEnter() {
    var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.

    if (TextBox_val != "") {
        if (event.keyCode == 13)
            main();
    }
}

function main() {
    // the main logic will be coded here.
    var TextBox_val = document.getElementById("InputBox").value; // Get all the data from the input box.
    var ResponseText_val = document.getElementById("ResponseText"); // Get all the data from the response text.

    var FormatInput = TextBox_val.toLowerCase().trim(); // convert our given input to lowercase.


    // Let's code the Logic for chatting... 
    if (FormatInput.includes("hi") || FormatInput.includes("hello"))
        ResponseText_val.innerHTML = "Hello!";

    else if (FormatInput.includes("how are you"))
        ResponseText_val.innerHTML = "I'm fine! Thanks for asking!";

    else if (FormatInput.includes("tell about srm"))
        ResponseText_val.innerHTML = " SRM Institute of Science and Technology (formerly known as SRM University) is an inspiring place to advance students career and help shape the future. One would experience top of the world living and learning experience at SRM";


    // Open websites!
    else if (FormatInput.includes("open google")) {
        // "https://" is important!
        ResponseText_val.innerHTML = "Opening Google";
        window.open("https://www.google.com", "_blank");
    } else if (FormatInput.includes("open youtube")) {
        // "https://" is important!
        ResponseText_val.innerHTML = "Opening YouTube";
        window.open("https://www.youtube.com", "_blank");

    } else if (FormatInput.includes("open light-lens")) {
        // "https://" is important!
        ResponseText_val.innerHTML = "Opening Light-Lens on Github";
        window.open("https://github.com/Light-Lens", "_blank");
    } else
        ResponseText_val.innerHTML = "Sorry, I can't understand you 😔";
}