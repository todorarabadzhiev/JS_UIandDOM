module.exports = [AddDivsToElement]

function AddDivsToElement(args) {

    function ReplaceOldContent(el) {
        //REMOVE OLD CONTENT
        el.innerHTML = '';

        //ADD DIVS WITH CONTENT[]
        for (let i = 0, len = arrContent.length; i < len; i += 1) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = arrContent[i];
            el.appendChild(newDiv);
        }
    }

    let elem = args[0];
    let arrContent = args[1];

    //Any of the function params is missing
    if (elem === undefined || arrContent === undefined) {
        throw 'Function parameter(s) missing';
    }

    //CONTENT
    if (!Array.isArray(arrContent)) {
        //Content is not as described
        throw "Content is not in an array as described";
    } else {
        for (let i = 0, len = arrContent.length; i < len; i += 1) {
            let itemType = typeof(arrContent[i]);
            if (itemType !== string && itemType !== number) {
                //Any of the contents is neither string nor number
                throw `Item #${i} from the Content is neither string nor number`;
            }
        }
    }

    //DOM ELEMENT
    if (typeof(elem) === string) {
        let elemByID = document.getElementById(elem);
        //The provided id does not select anything (there is no element that has such an id)
        if (elemByID === undefined) {
            throw `An element with ID ${elem} does not exist in the current document`;
        } else {
            ReplaceOldContent(elemByID);
        }
    } else if (typeof(elem) === HTMLElement && document.body.contains(elem)) {
        ReplaceOldContent(elem);
    } else {
        //The provided first parameter is neither string nor existing DOM element
        throw 'The provided first parameter is neither string nor existing DOM element';
    }
}