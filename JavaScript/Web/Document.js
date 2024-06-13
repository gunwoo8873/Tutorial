class Menu_Text {
    constructor(Div_ID, Text_Content, Text_Color, Background_Color) {
        // Div ID
        this.Container_ID = document.getElementById(Div_ID)

        // Text Element
        this.TextElement = document.createElement('span')
        this.TextElement.textContent = Text_Content

        if (Text_Color) {
            this.TextElement.style.color = Text_Color;
        }
        if (Background_Color) {
            this.TextElement.style.backgroundColor = Background_Color;
        }

        this.Container_ID.appendChild(this.TextElement)
    }
}

const Head_Menu_Text = document.getElementById('Head_Menu_Text');
const Head_Menu_Content = [
    { content: 'SPRINT PROJECT', textColor: 'red', bgColor: 'lightgray' },
    { content: 'DASHBOARD', textColor: 'blue', bgColor: 'lightblue' },
    { content: 'NOTION', textColor: 'green', bgColor: 'lightgreen' },
    { content: 'GITHUB', textColor: 'purple', bgColor: 'lavender' },
    { content: 'DOCKER HUB', textColor: 'orange', bgColor: 'lightcoral' }
];

Head_Menu_Content.forEach(content => {
    new Menu_Text('Head_Menu_Text', content.content, content.textColor, content.bgColor)
});