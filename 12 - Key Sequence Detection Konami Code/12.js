const pressed = [];
const konamiCode = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba'

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-konamiCode.length -1, pressed.length - konamiCode.length);

    if(pressed.join('').includes(konamiCode)){
        alert('ding ding!')
    }

    console.log(pressed)

})