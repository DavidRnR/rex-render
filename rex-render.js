function rexStart() {
    let myFor = document.querySelector('[rex-for]');
    let renderValues = getRexForArray(myFor.attributes['rex-for'].value);
    let myValueRender = that[renderValues[2]];

    let myForChange = myFor.parentNode;
    let elemContain = myFor.outerText;

    for (let index = 0; index < myValueRender.length; index++) {
        
        let contain = elemContain.replace("{{" + renderValues[0] + "}}", myValueRender[index]);

        if (index === 0) {
            myFor.innerHTML = contain;
        }
        else {
            let newNode = document.createElement(myFor.nodeName);

            newNode.innerHTML = contain;
            newNode.removeAttribute('rex-for');

            myForChange.appendChild(newNode);
        }

    }
}

function getRexForArray(rexFor) {
    rexFor = rexFor.split(" ");
    var stringArray = new Array();
    for (var i = 0; i < rexFor.length; i++) {
        if (rexFor[i] && rexFor[i] != " ") {
            stringArray.push(rexFor[i]);
        }
    }
    return stringArray;
}

var that = this;
ready();
function ready(fn) {
    if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', that.rexStart);
    }
}

