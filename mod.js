
(function (_ob, _ob1) {
    const _checkType = function (_obj, _type) {
        var resArray = [];
        if (Array.isArray(_obj)) {
            var inc = 0;
            for (; inc < _obj.length; inc++) {
                (typeof _obj === _type) ?
                    resArray[inc] = (true) :
                    resArray[inc] = false;
            }
            return resArray.every(function (_it) { return typeof _it === _obj });
        }
        return typeof _obj === _type;
    };
    const _toString = Object.prototype.toString;
    if (!_checkType([_ob, _ob1], "undefined")) {
        _doOpt();
    } else {
        console?.log("MODJS-Error: Unexpected Error");
    }


    function _doOpt() {
        const _checkEl = function (_sel = "") {
            var resArray = [];
            if (/array/gi.test(toString.call(_sel))) {
                for (var d = 0; d < _sel; d++) {
                    var check = document.querySelector(_sel[d]) ? true : false;
                    resArray[d] = check;
                }
                return resArray;
            }
            return document.querySelector(_sel) ? true : false;
        };
        function mod(_obj = {}) {
            if (/object/gi.test(_toString.call(_obj, null))) {
                for (var d in _obj) {
                    var els = document.querySelectorAll(d);
                    if (els.length !== 0) {
                        els.forEach(function (el) {
                            manipulate(_obj[d], el);
                            if (_obj[d].adv) {
                                if (_obj[d].adv.ev) {
                                    if (typeof _obj[d].adv.ev === "function") {
                                        _obj[d].adv.ev(el);
                                    } else {
                                        console["error"]("MODJS-Error: ev is not a \'" + (typeof _obj[d].adv.ev) + "\'");
                                    }
                                }
                            }
                        });
                    } else {
                        console["error"]("MODJS-Error: \"" + d + "\" element(s) not found.");
                    }
                }

            }
        }

        function manipulate(_el, _saver) {
            var s;
            for (s in _el) {
                if (!_saver) {
                    _saver = {};
                }
                if (!(_checkType(_el[s], "object"))) {
                    _saver[s] = _el[s];
                }
                if (_checkType(_el[s], "object")) {
                    manipulate(_el[s], _saver[s]);
                }
            }
        }

        _ob.$M ? _ob.$M : _ob.$M = mod;
    }

})(window, document);

/*
    mod({
        ".elementSelector": {
            textContent: "Hello World",
            style: {
                color: "yellow",
                background: "green"
            },
            onclick: function() {
                with(this){
                    innerHTML = "Hello World!!!";
                    with(style){
                        color = "black";
                        fontSize = "30px";
                        backgroundColor = "black";
                    }
                }
            },
            adv: {
                ev: function(element) {
                    element.click();
                },
                init: function() {
                    // initialize current element...
                }
            }
        },
        "element2, element3, ...": {
            ...
        }
    })
*/