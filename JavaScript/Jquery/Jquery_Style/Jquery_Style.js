$(document).ready(function() {
    for (let i = 0; i < 256; i++) {
        $(`<div></div>`).css({
            height: 2,
            background: `rgb(`+ i + i + i +`)`
        }).appendTo(`body`);
    }
})