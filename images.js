var content_container = document.getElementById("content");
var data = [
    {
        "title": "Pistachio and rose macarons",
        "caption": "2020-06-17",
        "location": "images/pist_macarons.jpg"
    }, {
        "title": "Chocolate eclairs",
        "caption": "2020-06-09",
        "location": "images/eclair.jpg"
    }, {
        "title": "Choc chip cookies",
        "caption": "2020-06-02",
        "location": "images/cookies.jpg"
    }, {
        "title": "Earl Grey macarons",
        "caption": "2020-05-28",
        "location": "images/tea_macarons.jpg"
    }, {
        "title": "Chocolate macarons",
        "caption": "2020-05-25",
        "location": "images/choc_macarons.jpg"
    }, {
        "title": "Stracciatella semifreddo",
        "caption": "2020-04-30",
        "location": "images/semifreddo.jpg"
    }
]

function createElement(entry) {
    var title = entry.title;
    var caption = entry.caption;
    var location = entry.location;

    var heading = document.createElement('p');
    var text = document.createElement('p');
    var img = document.createElement('img');
    heading.className = "heading";
    heading.innerText = title;
    text.className = "text";
    text.innerText = caption;
    img.className = "image";
    img.src = location;
    img.setAttribute('height', '180px');
    
    var div = document.createElement('div');
    div.appendChild(heading);
    div.append(img);
    div.append(text);
    div.className = "post";
    return div;
}

for (var i = 0; i < data.length; i++) {
    var div = createElement(data[i]);
    content_container.appendChild(div);
}
