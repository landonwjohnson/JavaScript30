window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
var element = document.getElementById("bottom");
words.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e)
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        p.textContent = transcript;
        if (e.results[0].isFinal) {
            p = document.createElement('p');
            words.appendChild(p);
            element.scrollIntoView({block: "end", behavior: "smooth"});
        }
});


recognition.addEventListener('end', recognition.start);
recognition.start();
