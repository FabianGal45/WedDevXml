// Most of the code has been inspired from a class example on moodle and interpreted to fit the needs of the app.
loadFullXML();
async function loadFullXML() {
  var response = await fetch('DellProducts.xml');//gets the infromation from the xml products file
  var textContent = await response.text();//grabs the xml and converts it into text

  var data = new DOMParser().parseFromString(textContent, "text/xml"); //parses the xml text file into html readable content 
  var demo = "<thead><tr><th>Code</th><th>Category</th><th>Quantity</th><th>Name</th><th>Unit Price</th><th>Description</th></tr></thead>"; //table headers

  var x = data.getElementsByTagName("product"); //grabs the product from the xml file

  // Loop that will print every element in the xml file
  for (i = 0; i < x.length; i++) {
    demo += "<tr><td>"
      + x[i].getAttribute('code')
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
  document.getElementById("processedXMLList").innerHTML = demo;
}
