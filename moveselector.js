var content_container = document.getElementById("content");

var movement = {
    "name": "Type of movement",
    "Ginga": "end",
    "Cadeira": "end",
    "Aú": "end",
    "Negativa": "end",
    "Queda de Rins": "end",
};
var defensive = {
    "name": "Type of movement",
    "Esquiva": {
        "name": "Type of esquiva",
        "Esquiva de frente": "end",
        "Esquiva lateral": "end",
    }
};
var kick = {
    "name": "Shape of kick",
    "Straight": {
        "name": "Options",
        "Martelo": "end",
    },
    "Curved": {
        "name": "Body direction",
        "Upright": {
            "name": "Options",
            "Meia lua de frente": "end",
            "Armada": "end",
            "Queixada": "end"
        },
        "Ground": {
            "name": "Options",
            "Meia lua de compasso": "end"
        }
    }
};
var types = {
    "name": "Type of move",
    "Movement": movement,
    "Defensive": defensive,
    "Kick": kick
};

function changed(parent, select, menu) {
    var values = Object.keys(menu).map(function(key) {
        if (select.value === key && menu[key] !== "end") {
            var siblings = parent.children;
            for (var i = siblings.length - 1; i >= 0; i--) {
                if (siblings[i] === select) {
                    break;
                }
                parent.removeChild(siblings[i]);
            }

            var child_container = document.createElement('div');
            child_container.style.paddingTop = "15px";
            parent.appendChild(child_container);
            addOptions(child_container, menu[key]);
        }
    });
}

function createOption(parent, text, value) {
    var opt = document.createElement('option');
    opt.text = text;
    opt.value = value;
    parent.options.add(opt);
}

function createOptions(select, menu) {
    var values = Object.keys(menu).map(function(key) {
        var text = key;
        if (key === "name") {
            text = menu[key];
        }
        createOption(select, text, text);
    });
}

function showAll(menu) {
    var values = Object.keys(menu).map(function(key) {
        if (key !== "name") {
            var value = menu[key];
            if (typeof value === "string") {
                alert(key);
            } else if (value.constructor == Object) {
                showAll(value);
            }
        }
    });
}

function addOptions(parent, menu) {
    var div = document.createElement('div');
    div.className = 'flex-row';
    
    var select = document.createElement('select');
    createOptions(select, menu);
    var button = document.createElement('button');
    button.innerText = 'Show all';
    button.onclick = function() {
        showAll(menu);
    }

    div.appendChild(select);
    div.appendChild(button);
    parent.appendChild(div);

    select.onchange = function() {
        changed(div, select, menu);
    };
}

var div = document.createElement('div');
addOptions(div, types);
content_container.appendChild(div)