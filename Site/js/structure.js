var images = document.querySelectorAll('.zoom-img');
images.forEach(function (image) {
    image.addEventListener('click', function () {
        image.style.transform = 'scale(1.3)';
    });

    image.addEventListener('mouseleave', function () {
        image.style.transform = 'scale(1)';
    });
});


var elementsList = document.getElementById('elements-list');
var imageContainer = document.getElementById('image-container');


elementsList.addEventListener('click', function (event) {
    imageContainer.innerHTML = '';
    var image = document.createElement('img');
    image.src = event.target.getAttribute('data-image');
    image.alt = event.target.textContent;
    image.classList.add("structure-img");
    image.classList.add("zoom-img");
    imageContainer.appendChild(image);
});