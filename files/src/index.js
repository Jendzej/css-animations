let id = null
function myMove() {
    const elem = document.getElementById("content-effect-3")
    let pos = 0
    clearInterval(id)
    id = setInterval(frame, 10)
    function frame(){
        if(pos == 350) {
            clearInterval(id)
        } else {
            pos++
            elem.style.top = pos + "px"
            elem.style.left = pos + "px"
        }
    }
}