// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// This code will check if a user presses enter in the searchbox and will press the search button.
var input = document.getElementById("search");

input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("myButton").click();
    }
});

// Most of the code has been inspired from a class example on moodle and interpreted to fit the needs of the app.
async function searchForData() {
    var found = false; //checks if the code the user seaches for can be found

    var response = await fetch('DellProducts.xml');
    var textContent = await response.text();

    var data = new DOMParser().parseFromString(textContent, "text/xml");
    var demo = "<thead><tr><th>Code</th><th>Category</th><th>Quantity</th><th>Name</th><th>Unit Price</th><th>Description</th></tr></thead>";

    var user_id_input = document.getElementById("search").value;//the searchbox input
    var x = data.getElementsByTagName("product");
    console.log("Something in here : " + x[0].getElementsByTagName("category")[0].childNodes[0].nodeValue)

    for (i = 0; i < x.length; i++) {
        console.log("Input:   " + user_id_input);//TEST 
        var code = x[i].getAttribute('code'); //store the code as a variable to make the next if function easier to understand
        if (user_id_input === code) {
            found = true

            demo += "<tr><td>"
                + code
                + "</td><td>"
                + x[i].getElementsByTagName("category")[0].childNodes[0].nodeValue
                + "</td><td>"
                + x[i].getElementsByTagName("quantity")[0].childNodes[0].nodeValue
                + "</td><td>"
                + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue
                + "</td><td>"
                + x[i].getElementsByTagName("unit_price")[0].childNodes[0].nodeValue
                + "</td><td>"
                + x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue
                + "</td></tr>";
        }
    }

    if (found === false) {
        alert("Product not found or doesn't exist.");
    }
    document.getElementById("demo").innerHTML = demo;
}