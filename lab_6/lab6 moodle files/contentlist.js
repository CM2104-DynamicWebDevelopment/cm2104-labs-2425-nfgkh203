function addContent() {
    // List of names
    let items = ["hewey", "dewey", "louie"];
    
    // Build the HTML string for the list
    let items_html = "<ul>";
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        items_html += "<li>" + item + "</li>";
    }
    items_html += "</ul>";
    
    // Find the content div and insert the HTML
    let contentDiv = document.getElementById("content");
    contentDiv.innerHTML = items_html;
}
