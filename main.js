// .x_inp, .y_inp, .blur_inp, .spread_inp - to get values
// .x_value, .y_value, .blur_value, .spread_value - to show value
var card = document.querySelector("#card");
// for boxShadow...
var currentValue, target, x, y, b, r, g, bc, a;
x = select("#x_inp");
y = select("#y_inp");
bc = select("#blur_inp");
s = select("#spread_inp");
r = select("#r_inp");
g = select("#g_inp");
b = select("#b_inp");
a = select("#a_inp");

// for padding...
var pd_top, pd_right, pd_bottom, pd_left;
pd_top = select("#padding_top_inp");
pd_right = select("#padding_right_inp");
pd_bottom = select("#padding_bottom_inp");
pd_left = select("#padding_left_inp");

// for borders 
var border_enabled,
    border_group,
    br_top_enabled,
    br_right_enabled,
    br_bottom_enabled,
    br_left_enabled,
    borderLeftGroup,
    borderRightGroup,
    borderTopGroup,
    borderBottomGroup,
    borderTopWidth,
    borderTopColor,
    borderRightWidth,
    borderRightColor,
    borderBottomWidth,
    borderBottomColor,
    borderLeftWidth,
    borderLeftColor;
border_enabled = select("#border_enabled");
br_top_enabled = select("#border_top_enabled");
br_right_enabled = select("#border_right_enabled");
br_bottom_enabled = select("#border_bottom_enabled");
br_left_enabled = select("#border_left_enabled");
border_group = select("#ifborderenabled");
borderTopGroup = select("#border_top_group");
borderRightGroup = select("#border_right_group");
borderLeftGroup = select("#border_left_group");
borderBottomGroup = select("#border_bottom_group");
borderTopWidth = select("#border_top_width");
borderTopColor = select("#border_top_color");
borderRightWidth = select("#border_right_width");
borderRightColor = select("#border_right_color");
borderBottomWidth = select("#border_bottom_width");
borderBottomColor = select("#border_bottom_color");
borderLeftWidth = select("#border_left_width");
borderLeftColor = select("#border_left_color");

// for border radius...
var borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius;
borderTopLeftRadius = select("#border_top_left_radius");
borderTopRightRadius = select("#border_top_right_radius");
borderBottomRightRadius = select("#border_bottom_right_radius");
borderBottomLeftRadius = select("#border_bottom_left_radius");
borderRadius = select("#border_radius");


const CARD = {
    "box-shadow": "15px 11px 55px 1px rgba(0, 0, 0, 0.2)",
    "padding": "18px 20px",
    "border-top": null,
    "border-right": null,
    "border-bottom": null,
    "border-left": null,
    "border-radius": "15px",
    "border-top-left-radius": null,
    "border-top-right-radius": null,
    "border-bottom-right-radius": null,
    "border-bottom-left-radius": null,
    "font-family": null,
    "color": null,
    "height": "auto",
    "font-size": null,
    "width": "400px",
    "background-color": "#fefefe"
};

const TITLE = {
    "font-size": "35px",
    "text-transform": "capitalize",
    "position": "relative",
    "padding-bottom": "25px",
    "margin-bottom": ".8em",
    "text-overflow": "ellipsis",
    "overflow": "hidden",
    "white-space": "nowrap",
    "width": "250px",
    "font-weight": 640,
    "font-family": null,
    "color": null
};

const CONTENT = {
    "font-family": null,
    "color": "#444",
    "font-weight": "600",
    "font-size": "17px"
};

function select(_elName) {
    return document.querySelector(_elName);
}

function generateRGBA(r, g, b, a) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function generateShadow(x, y, b, s, color) {
    return `${x}px ${y}px ${b}px ${s}px ${color} `;
}

function generatePadding(t, r, b, l) {
    return `${t.value}px ${r.value}px ${b.value}px ${l.value}px`;
}

function changeBoxShadow() {
    var shadow = generateShadow(x.value, y.value, bc.value, s.value, generateRGBA(r.value, g.value, bc.value, a.value));
    CARD["box-shadow"] = shadow;
    card.style.boxShadow = shadow;
}

function changePadding() {
    var padding = generatePadding(pd_top, pd_right, pd_bottom, pd_left);
    CARD["padding"] = padding;
    card.style.padding = padding;
}

function changeContentFontSize(_name) {
    CONTENT["font-size"] = _name + "px";
    select("#card_content").style.fontSize = _name + "px";
}

function changeTitleFontSize(_name) {
    TITLE["font-size"] = _name + "px";
    select("#card-title").style.fontSize = _name + "px";
}

function changeContentColor(_name) {
    CONTENT["color"] = _name;
    select("#card_content").style.color = _name;
}

function changeTextColor(_name) {
    TITLE["color"] = _name;
    select("#card-title").style.color = _name;
}

function changeContentText(_el) {
    select("#card-content").innerText = _el.value;
}

function changeTitleText(_el) {
    select("#card-title").innerText = _el.value;
}

function changeRadius() {
    CARD["border-radius"] = borderRadius.value + "px";
    CARD["border-top-right-radius"] = borderTopRightRadius.value + "px";
    CARD["border-top-left-radius"] = borderTopLeftRadius.value + "px";
    CARD["border-bottom-left-radius"] = borderBottomLeftRadius.value + "px";
    CARD["border-bottom-right-radius"] = borderBottomRightRadius.value + "px";
    card.style.borderRadius = borderRadius.value + "px";
    card.style.borderTopLeftRadius = borderTopLeftRadius.value + "px";
    card.style.borderBottomRightRadius = borderBottomRightRadius.value + "px";
    card.style.borderBottomLeftRadius = borderBottomLeftRadius.value + "px";
    card.style.borderTopRightRadius = borderTopRightRadius.value + "px";
}

function changeBorder(t, r, b, l, c1, c2, c3, c4) {
    CARD["border-bottom"] = `${b}px solid ${c3}`;
    CARD["border-left"] = `${l}px solid ${c4}`;
    CARD["border-right"] = `${r}px solid ${c2}`;
    CARD["border-top"] = `${t}px solid ${c1}`;
    card.style.borderTop = `${t}px solid ${c1}`;
    card.style.borderRight = `${r}px solid ${c2}`;
    card.style.borderBottom = `${b}px solid ${c3}`;
    card.style.borderLeft = `${l}px solid ${c4}`;
}

function changeTitleFont(_name) {
    TITLE["font-family"] = _name;
    card.style.fontFamily = _name;
}

function changeContentFont(_name) {
    CONTENT["font-family"] = _name;
    select("#card_content").style.fontFamily = _name;
}

function changeBackgroundColor(_name) {
    CARD["background-color"] = _name;
    card.style.backgroundColor = _name;
}

function GENERATE(_ob) {
    var csscode = "";
    for (var d in _ob) {
        if (_ob[d] !== null) {
            csscode += d + ": " + _ob[d] + ";\n    ";
        }
    }
    return csscode;
}

function generateCode(el) {
    el.innerText = `
<div class="card-container">
    <div class="title">Card Generator</div>
    <p class="content">Hello there this is a card!</p>
</div>
<style type="text/css">
.card-container {
    ${GENERATE(CARD)}
}

.card-container > .title {
    ${GENERATE(TITLE)}
}

.card-container > .content {
    ${GENERATE(CONTENT)}
}

.card-container > .title::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 4px;
    border-radius: 10px;
    background-color: #1e5799;
    bottom: 0;
    left: 0;
}
</style>`;
}

$M({
    "#edit_btn": {
        onclick: function (el) {
            var target = el.target;
            target.dataset.state = target.dataset.state == "true" ? "false" : "true";
            target.nextElementSibling.style.display = target.dataset.state == "true" ? "block" : "none";
        }
    },
    "#x_inp, #y_inp, #blur_inp, #spread_inp": {
        oninput: function (_e) {
            target = _e.target.previousElementSibling.lastChild;
            var currentValue = _e.target.value + "px";
            target.innerHTML = currentValue;
            changeBoxShadow();
        }
    },
    "#r_inp, #g_inp, #b_inp, #a_inp": {
        oninput: function (el) {
            changeBoxShadow();
            select("#rgba_value").innerHTML = generateRGBA(r.value, g.value, bc.value, a.value);
        },
        adv: {
            ev: function (el) {
                el.value = 0.3;
            }
        }
    },
    "#padding_top_inp,#padding_right_inp,#padding_bottom_inp,#padding_left_inp": {
        oninput: function (_e) {
            target = _e.target.previousElementSibling;
            var currentValue = _e.target.value + "px";
            target.innerHTML = currentValue;
            changePadding();
        },
        adv: {
            ev: function (el) {
                el.value = 0;
            }
        }
    },
    "#border_enabled": {
        onchange: function (_e) {
            border_group.style.display = _e.target.checked ? "block" : "none";
            if (!_e.target.checked) {
                card.style.border = "none";
            }
        },
        adv: {
            ev: function (_e) {
                border_group.style.display = _e.checked ? "block" : "none";
            }
        }
    },
    "#border_top_enabled": {
        onchange: function (_e) {
            borderTopGroup.style.display = _e.target.checked ? "block" : "none";
            if (!_e.target.checked) {
                borderTopWidth.value = 0;
                borderTopColor.value = "none"
                card.style.borderTop = "none";
            }
        }
    },
    "#border_right_enabled": {
        onchange: function (_e) {
            borderRightGroup.style.display = _e.target.checked ? "block" : "none";
            if (!_e.target.checked) {
                borderRightWidth.value = 0;
                borderRightColor.value = "none";
                card.style.borderRight = "none";
            }
        }
    },
    "#border_bottom_enabled": {
        onchange: function (_e) {
            borderBottomGroup.style.display = _e.target.checked ? "block" : "none";
            if (!_e.target.checked) {
                borderBottomWidth.value = 0;
                borderBottomColor.value = "none"
                card.style.borderBottom = "none";
            }
        }
    },
    "#border_left_enabled": {
        onchange: function (_e) {
            borderLeftGroup.style.display = _e.target.checked ? "block" : "none";
            if (!_e.target.checked) {
                borderLeftWidth.value = 0;
                borderLeftColor.value = "none"
                card.style.borderLeft = "none";
            }
        }
    },
    "#border_top_width, #border_top_color, #border_left_width, #border_left_color, #border_bottom_width, #border_bottom_color, #border_right_width, #border_right_color": {
        oninput: function (_e) {
            var target = _e.target.previousElementSibling;
            target.innerHTML = _e.target.value + "px";
            changeBorder(
                borderTopWidth.value,
                borderRightWidth.value,
                borderBottomWidth.value,
                borderLeftWidth.value,
                borderTopColor.value,
                borderRightColor.value,
                borderBottomColor.value,
                borderLeftColor.value,
            );
        },
        adv: {
            ev: function (el) {
                el.value = 0;
            }
        }
    },
    "#border_radius, #border_bottom_right_radius, #border_bottom_left_radius, #border_top_left_radius, #border_top_right_radius": {
        oninput: function (_e) {
            target = _e.target.previousElementSibling;
            var currentValue = _e.target.value + "px";
            target.innerHTML = currentValue;
            changeRadius();
        }
    },
    "#font": {
        onchange: function (_e) {
            changeTitleFont(_e.target.value);
        }
    },
    "#font_content": {
        onchange: function (_e) {
            changeContentFont(_e.target.value);
        }
    },
    "#title_size": {
        oninput: function (_e) {
            changeTitleFontSize(_e.target.value);
            var target = _e.target.previousElementSibling;
            var currentValue = _e.target.value + "px";
            target.innerHTML = currentValue;
        }
    },
    "#content_size": {
        oninput: function (_e) {
            changeContentFontSize(_e.target.value);
            var target = _e.target.previousElementSibling;
            var currentValue = _e.target.value + "px";
            target.innerHTML = currentValue;
        }
    },
    "#text_color": {
        onchange: function (_e) {
            var target = _e.target.previousElementSibling;
            var currentValue = _e.target.value;
            target.innerHTML = currentValue;
            changeTextColor(currentValue);
        }
    },
    "#content_color": {
        onchange: function (_e) {
            var target = _e.target.previousElementSibling;
            var currentValue = _e.target.value;
            target.innerHTML = currentValue;
            changeContentColor(currentValue);
        }
    },
    "#background_color": {
        onchange: function (_e) {
            var target = _e.target.previousElementSibling;
            var currentValue = _e.target.value;
            target.innerHTML = currentValue;
            changeBackgroundColor(currentValue);
        }
    },
    "#generateBtn": {
        onclick: function (_e) {
            _e.target.innerText = "Generated Successfully! Scroll Down.";
            generateCode(select("#generated_code"));
        }
    },
    "#titleText": {
        oninput: function (e) {
            var val = e.target.value;
            if (val.length <= 15) {
                e.target.style.borderColor = "#d9d9d9";
                select("#card-title").innerHTML = val;
            } else {
                e.target.style.borderColor = "#c00";
            }
        }
    },
    "#contentText": {
        oninput: function (e) {
            var val = e.target.value;
            if (val.length <= 60) {
                e.target.style.borderColor = "#d9d9d9";
                select("#card_content").innerHTML = val;
            } else {
                e.target.style.borderColor = "#c00";
            }
        }
    }
});