// button functions

function bgChange(url) {
    document.body.style.backgroundImage = `url(https://` + url + `)`;
}

function greenBtn() {
    document.body.style.color = `green`;
}

document.getElementById("blue-btn").addEventListener("click", btnReplace)

function btnReplace() {
    document.getElementById("blue-btn").remove();

    const blueImg = new Image(100, 100);

    blueImg.src = 'https://www.boeschbodenspies.com/wp-content/uploads/product-blueberry.png';
    blueImg.alt = 'Blueberry';

    document.body.appendChild(blueImg);
}