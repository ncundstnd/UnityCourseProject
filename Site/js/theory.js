
var zoomimages = document.querySelectorAll('.zoom-img');
zoomimages.forEach(function(image) {
    image.addEventListener('click', function() {
        image.style.transform = 'scale(1.3)';
    });

    image.addEventListener('mouseleave', function() {
        image.style.transform = 'scale(1)';
    });
});

const words = document.querySelectorAll('.word');
const images = document.querySelectorAll('.image-replacement');

words.forEach(word => {
    word.addEventListener('click', function() {
    const index = Array.from(words).indexOf(this);
    images.forEach(image => {
        image.style.display = 'none';
    });
    const targetImage = document.getElementById(`img${index + 1}`);
    if (targetImage) {
        targetImage.style.display = 'inline';
    }
    word.style.fontSize = "0px";
    });
});

images.forEach(image => {
    image.addEventListener('mouseleave', function() {
    const index = Array.from(images).indexOf(this);
    const targetWord = words[index];
    if (targetWord) {
        this.style.display = 'none';
        targetWord.style.fontSize = "16px";
    }
    });
});
