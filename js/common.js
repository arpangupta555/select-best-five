function isValid(inputValue) {
    if (isNaN(inputValue)) {
        alert('Enter a Number please:');
        return 0;
    } else if (inputValue < 0) {
        alert("Enter a Positive number");
        return 0;
    } else {
        return inputValue;
    }
}


function getFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);

    return isValid(inputFieldValue);
}

function getTextElementValueById(elementId) {

    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);

    return isValid(textElementValue);

}


function setTextElementValueById(elementId, newValue) {

    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

