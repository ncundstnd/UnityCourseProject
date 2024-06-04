let btnOpenModal = document.getElementById('btn-open-modal');
let modal = document.getElementById('wrapper-modal');
let overlay = document.getElementById('overlay');

let inputQuestion = document.querySelector(".question");
let btnOpenAnswer = document.querySelector(".question-button");
let answerBlock = document.querySelector(".wrapper-answer");
let answer = document.querySelector(".answer");

inputQuestion.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        answerBlock.classList.add('active');
        const answerText = getAnswer(inputQuestion.value);
        const textForSpeech = answerText.split('<br>')[0];
        const apiKey = '4a4d3a13-d206-45fc-b8fb-e5a562c9f587';
        const text = encodeURIComponent(textForSpeech);
        const url = `http://tts.voicetech.yandex.net/generate?format=wav&lang=ru-RU&key=${apiKey}&text=${text}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const audioUrl = URL.createObjectURL(blob);
                const audio = new Audio(audioUrl);
                audio.play();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
        answer.innerHTML = answerText;
    }
});

btnOpenModal.addEventListener('click', function () {
    modal.classList.add('active');
});

btnOpenAnswer.addEventListener('click', function () {
    answerBlock.classList.add('active');
    const answerText = getAnswer(inputQuestion.value);
    const textForSpeech = answerText.split('<br>')[0];
    const apiKey = '4a4d3a13-d206-45fc-b8fb-e5a562c9f587';
    const text = encodeURIComponent(textForSpeech);
    const url = `http://tts.voicetech.yandex.net/generate?format=wav&lang=ru-RU&key=${apiKey}&text=${text}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const audioUrl = URL.createObjectURL(blob);
            const audio = new Audio(audioUrl);
            audio.play();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
    answer.innerHTML = answerText;
});

function closeModal() {
    modal.classList.remove('active');
    answerBlock.classList.remove('active');
}

overlay.addEventListener('click', closeModal);