const pressed = [];
const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'
document.getElementById('correct').style.display = "none";


window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-konamiCode.length -1, pressed.length - konamiCode.length);

    if(pressed.join('').includes(konamiCode)){
       document.getElementById('correct').style.display = "block";
    }

    console.log(pressed)

})