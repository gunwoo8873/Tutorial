const headings = ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4', 'Heading 5'];
headings.forEach((text, index) => {
const headingElement = document. createElement( h${index + 1} );
    headingElement.textContent = text;
    document.body.appendChild(headingElement);
});

function printNumber() { // function onclick value
    let inputNumber = parseInt(document. getElementById("input"). value); // input value
    let outputDiv = document. getElementById("output"); // button value
    outputDiv. innerHTML = "";
    
    if (isNaN(inputNumber)) { // isNaN + let (valuename)
        outputDiv. innerHTML = "+ g."; // let outputDiv value
    } else if (inputNumber < 1)
    {
        outputDiv.innerHTML = "1 이상의 정수를 입력."
    }
    else
    {
    for (let i = 1; i <= inputNumber; i++) { outputDiv. innerHTML += i + " "; }
    }
}