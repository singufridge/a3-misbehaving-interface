// button functions

// changes background image
function bgChange(url) {
    document.body.style.backgroundImage = `url(https://` + url + `)`;
}

// changes text colour when pushing the green button
function greenBtn() {
    document.body.style.color = `green`;
}

// add event listener for blue button, call btnReplace
document.getElementById("blue-btn").addEventListener("click", btnReplace)

// function is called when clicking blue button, removes button and replaces it with an image of a blueberry
function btnReplace() {
    document.getElementById("blue-btn").remove();

    const blueImg = new Image(30, 27.6);

    blueImg.src = 'https://www.boeschbodenspies.com/wp-content/uploads/product-blueberry.png';
    blueImg.alt = 'Blueberry';

    document.getElementById("blue-btn-div").appendChild(blueImg);
}

// function for purple button, replaces text with glitched text
document.getElementById("purple-btn").addEventListener("click", function() {
    document.getElementById("purple-btn").innerHTML = 'P̴̢̨̧̧̻̼̭͍̣̘̣̥̖̂̓́̀͆̊̃͌̎̈̌̀̀̾̈́͛̈́͑͌̒̕͜͝ͅư̵͎̓͛̆̃́̿̇̋̊̀͗̄̋̿͊͘͘͜r̵̢̮̯̱̪͔̖̫͇̣͇̭̻̹̫̗̙̯͚͕̜̻̻̹̭̹̫͓͖̤͊̋̆̓͒̽̏̋̀̇̃͛̌̀̂́͑͗̎̚͠͠ͅp̷̢̢̢̡̨̡̡̗̻̘͉͈̟̥̯̘̱͓̗͈̘̬͙̜̹̳͓̮͙̗̼͚̝̂͐̍̽͐̒̀̑̎̊́̄́̊̎̎̽̀̄͗̚̚̕͜͠͠l̴͕̙̑́̍̈́̈̿̐̐̿̎̓̀̌͌̽̚͝e̷̢̨̡̡̨̧͍͙̘̰͖͇̺̥̤̬͇͕̹̖̰͖̹͍̙͎̜̻̭̲͙̾̓̆͂̓́͐̑͊͒̑̈̋̆͗̃̾̄̓̿͝͝͠';
})

// prevents form submission from reloading the page and generates navbar
document.getElementById('nav-picker-form').addEventListener('submit', function() {
    event.preventDefault();
    
    // TODO: 'generate' navbar here
})

// function that makes a message appear when it was previously invisible, uses parameter to identify ID from the html side
function errMsg(errID) {
    document.getElementById(errID).style.opacity = 100;
}

// replace all characters with 'e' when trying to type in prompt in form
document.getElementById('nav-type').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, 'e'); 
});