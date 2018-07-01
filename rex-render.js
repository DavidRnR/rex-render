function rexStart() {
    // Get All Elements with rex-for
    let myFor = document.querySelectorAll('[rex-for]');

    // Iterate Elemntes with rex-for
    for (const rexElem of myFor) {
        
        // Get data rex-for Ex: "person of persons"
        let renderValues = getRexForArray(rexElem.attributes['rex-for'].value);
        // Get var from js Ex: persons
        let myValueRender = that[renderValues[2]];

        let parentRexNode;
        let elemContain = rexElem.outerText;

        for (let [key, value] of myValueRender.entries()) {

            let elemContainObj = getObjectArray(elemContain);
            let contain = elemContain;

            // For Objects like person.name - person.age etc
            if (elemContainObj && elemContainObj[0] && elemContainObj[0].indexOf('.') > -1) {
                for (const obj of elemContainObj) {
                    var afterDot = obj.substr(obj.indexOf('.') + 1);
                    contain = contain.replace("{{" + renderValues[0] + '.' + afterDot + "}}", value[afterDot]);         
                }

            }
            // Just a var EG name
            else {
                contain = contain.replace("{{" + renderValues[0] + "}}", value);
            }

            if (key === 0) {
                rexElem.innerHTML = contain;
                parentRexNode = rexElem;
            }
            else {
                let newNode = document.createElement(rexElem.nodeName);

                newNode.innerHTML = contain;
                parentRexNode.insertAdjacentHTML('afterend', newNode.outerHTML);
            }
        }
        // Remove rex-for attr
        parentRexNode.removeAttribute('rex-for');
    }

}

/**
 * Get rex-for as array Eg: ["person","of","persons"]
 * @param {*} rexFor 
 */
function getRexForArray(rexFor) {
    rexFor = rexFor.split(" ");
    var stringArray = new Array();
    for (var i = 0; i < rexFor.length; i++) {
        if (rexFor[i] && rexFor[i] != " ") {
            stringArray.push(rexFor[i]);
        }
    }
    return stringArray; //Eg: ["person","of","persons"]
}


/**
 * Split string with {{object}} to get all the object to render
 * @param {*} str 
 */
function getObjectArray(str) {
    var objStrings = [];
    var word = [];
    var working = false;

    for (var i = 0; i < str.length; ++i) {
        if (!working) {
            if (str[i] === '{') {
                if (i + 1 < str.length && str[i + 1] === '{') {
                    i++;
                    word.push(str[i + 1]);
                    working = true;
                    i++;
                }
            }
        }
        else {
            word.push(str[i]);
            if (i + 1 < str.length && str[i + 1] === '}') {
                i++;
                word = word.join("");
                objStrings.push(word);
                word = [];
                working = false;
            }
        }
    }
    return objStrings; // ["person.name", "person.age", "person.city"];
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

