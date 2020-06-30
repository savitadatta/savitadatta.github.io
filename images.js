var content_container = document.getElementById("content");
var data = [
    {
        "id": 0,
        "title": "abc",
        "caption": "text here",
        "location": "images/icon.png"
    }, {
        "id": 1,
        "title": "def",
        "caption": "text 2",
        "location": "images/icon.png"
    }, {
        "id": 2,
        "title": "ghi",
        "caption": "text 3",
        "location": "images/icon.png"
    }
]

function createElement(entry) {
    var title = entry.title;
    var caption = entry.caption;
    var location = entry.location;

    var heading = document.createElement('h2', {class: "heading"}, title);
    var text = document.createElement('p', {class: "text"}, caption);
    var loc = document.createElement('img', {src: location});
    
    return document.createElement('div', {class: "post"},
            heading, text, loc);
}

for (var i = 0; i < data.length; i++) {
    var div = createElement(data[i], {class: "post"});
    div.innerText = "Title: " + data[i].title;
    content_container.appendChild(div);
}
