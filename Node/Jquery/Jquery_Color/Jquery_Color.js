/* Jquery Tutorial Methods */
$(document).ready(function() {
    const $header = $(h1);

    for (let i = 0; i < $header.length; i++) {
        if (i % 2 == 1) {
            const docelement = $header.get(i)
        }
    }
})

class JqueryTest {
    constructor(Div_ID, Text_Content) {
        // Div ID
        this.Container_ID = document.getElementById(Div_ID);

        // Text Element
        this.TextElement = document.createElement('span');
        this.TextElement.textContent = Text_Content;
    }
}

const Head_Text = document.getElementById('Test_Text');
const Head_Content = [
    { content: 'SPRINT PROJECT'},
    { content: 'DASHBOARD'},
    { content: 'NOTION'},
    { content: 'GITHUB'},
    { content: 'DOCKER HUB'}
];