console.log(document.getElementsByTagName('h1')[0].innerHTML = 'New Text');

let color_button = document.getElementById('color-button') //no underscore
// let header_not_a_button = document.getElementsByTagName('h1')[0] 
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'New Text'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
        //easily change many things, like mousing, pointing, submitting, etc
    } else {
        header_text = 'something else'
    }
}

//create an event listener for the color button to change color
color_button.addEventListener('click', color_change)

//adding a new button in js

let button = document.createElement('button')
let button_display = document.createElement('h2')

    //inner button text
button.innerHTML = 'I am alive!'
document.body.append(button)

button.addEventListener('click', function() {
    button_display.innerHTML = "Or am I...?"
    document.body.append(button_display)
})


//grab copied text then place in the clipboard
const source = document.querySelector('div.source');
source.addEventListener('copy', ( event ) => {
    console.log(ClipboardEvent)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault();
})

// grabbing form data from a submit event
const form = document.querySelector('#testDataForm');

let first_name;
let last_name; 

//add event listener to the submit button
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_first = document.querySelector('#first-name').value;
    let query_last = document.querySelector('#last-name').value;
    // let first_name = event.path[0][0].value;
    // let last_name = event.path[0][1].value;

    //that data we grab now we want to print it
    console.log(event)
    console.log(first_name, last_name)
    console.log(`This came from the query selector:  ${query_first}, ${query_last}`)
})

// main.js:51 Uncaught TypeError: Cannot read properties of undefined (reading '0')
//     at HTMLFormElement.<anonymous> (main.js:51:32)

// main.js:56 Uncaught ReferenceError: first_name is not defined
//     at HTMLFormElement.<anonymous> 

//  react makes a virtual DOM, it has the original one you make, but holds another copy of it in memory
// if you change something in the DOM, like an h1, it will ONLY update the h1, and not the ENTIRE code, which is more efficient