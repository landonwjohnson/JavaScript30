const hero = document.querySelector('.hero');
const javascriptText = hero.querySelector("h1");
const withText = document.querySelector("p");
const landonjohnsonText = hero.querySelector("h2");


const walk = 35; // 100px;

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
  

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));

    javascriptText.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.3)
    `;

    // withText.style.textShadow = `
    // ${yWalk}px -${xWalk}px 0 rgba(0, 0, 0, 0.3)
    // `;

    landonjohnsonText.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(0, 0, 0, 0.3)
    `;
}



function withShadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x - e.target.offsetLeft;
        y = y - e.target.offsetTop;
    }
  

    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    withText.style.textShadow = `
    ${yWalk}px ${-xWalk}px 0 rgba(0, 0, 0, 0.3)
    `;
}

hero.addEventListener('mousemove', shadow);
hero.addEventListener('mousemove', withShadow);