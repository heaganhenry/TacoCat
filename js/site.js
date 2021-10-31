// controller function
function getString() {
    // import string
    let userString = document.getElementById("userString").value;
    // pass string to logic function
    let revObject = checkPalindrome(userString);
    // pass logic output to display function
    displayPalindrome(revObject);
}

// logic function
function checkPalindrome(userString) {
    // convert string to lowercase and remove special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");
    userString = userString.toLowerCase();

    // reverse the string user a for loop
    let revString = "";
    for (let i = userString.length - 1; i >= 0; i--){
        revString += userString[i];
    }

    // created an object with a message property based on if input was a palindrome 
    let revObject = {};
    revObject.reversed = revString;
    revObject.msg = (revString == userString) ? "Well done, you entered a palindrome!" : "Sorry! You did not enter a palindrome";

    return revObject;
}

// display function
function displayPalindrome(revObject) {
    // insert relevant messages into the web page
    document.getElementById("alertHeader").innerHTML = revObject.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is "${revObject.reversed}""`;
    // unhide the alert box
    document.getElementById("alertBox").classList.remove("invisible");
}