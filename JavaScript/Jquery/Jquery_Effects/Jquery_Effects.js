$(document).ready(function() {
    $("button").click(function() {
        
        // $(docment get div id = "value").fadein(Dealy or SpeedType)
        $(`# div1`).fadeIn(500)
        $(`# div2`).fadeIn(`slow`)
        $(`# div3`).fadeIn(3000)
    })
})