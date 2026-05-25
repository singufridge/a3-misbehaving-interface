// button functions

// * BACKGROUND PICKER
// changes background image
function bgChange(url) {
    document.body.style.backgroundImage = `url(https://${url})`;
}

// changes text colour when pushing the green button
function greenBtn() {
    document.body.style.color = `green`;
}

// function is called when clicking blue button, removes button and replaces it with an image of a blueberry
document.getElementById("blue-btn").addEventListener("click", btnReplace)

function btnReplace() {
    document.getElementById("blue-btn").remove();

    const blueImg = new Image(30, 27.6);

    blueImg.src = 'https://www.boeschbodenspies.com/wp-content/uploads/product-blueberry.png';
    blueImg.alt = 'Blueberry';

    document.getElementById("blue-btn-div").appendChild(blueImg);
}

// function for purple button, replaces text with glitched text
const purpleBtn = document.getElementById("purple-btn");

purpleBtn.addEventListener("click", function purpleBtnChange() {
    purpleBtn.innerHTML = 'P̴̢̨̧̧̻̼̭͍̣̘̣̥̖̂̓́̀͆̊̃͌̎̈̌̀̀̾̈́͛̈́͑͌̒̕͜͝ͅư̵͎̓͛̆̃́̿̇̋̊̀͗̄̋̿͊͘͘͜r̵̢̮̯̱̪͔̖̫͇̣͇̭̻̹̫̗̙̯͚͕̜̻̻̹̭̹̫͓͖̤͊̋̆̓͒̽̏̋̀̇̃͛̌̀̂́͑͗̎̚͠͠ͅp̷̢̢̢̡̨̡̡̗̻̘͉͈̟̥̯̘̱͓̗͈̘̬͙̜̹̳͓̮͙̗̼͚̝̂͐̍̽͐̒̀̑̎̊́̄́̊̎̎̽̀̄͗̚̚̕͜͠͠l̴͕̙̑́̍̈́̈̿̐̐̿̎̓̀̌͌̽̚͝e̷̢̨̡̡̨̧͍͙̘̰͖͇̺̥̤̬͇͕̹̖̰͖̹͍̙͎̜̻̭̲͙̾̓̆͂̓́͐̑͊͒̑̈̋̆͗̃̾̄̓̿͝͝͠';
    purpleBtn.style.color = 'purple';
})

// * NAV PICKER
// prevents form submission from reloading the page and reveals navbar
document.getElementById('nav-picker-form').addEventListener('submit', function genNavbar() {
    event.preventDefault();
    
    document.getElementById("navbar").style.opacity = 100;
})

// function that makes a message appear when it was previously invisible, uses parameter to identify ID from the html side
function errMsg(errID) {
    document.getElementById(errID).style.opacity = 100;
}

// replace all characters with 'e' when trying to type in prompt in form
document.getElementById('nav-type').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, 'e'); 
});

// * NAV LINKS
// prevents form submission from reloading the page and generates nav links
const navPopForm = document.getElementById('nav-pop-form');

const navList = document.getElementById('nav-links')

navPopForm.addEventListener('submit', function genNavLinks() {
    event.preventDefault();

    // get form data, single out the text submission
    const data = new FormData(navPopForm);
    const linkText = data.get("nav-link-text");

    // create list element, append to navbar
    const navLi = document.createElement('li');
    navList.appendChild(navLi);

    // create a element, append to list item
    const navLink = document.createElement('a');
    navLink.textContent = linkText; // text of new element matches the text submission
    navLink.classList.add("a-animated"); //a dd class to 'a' element that causes it to be animated
    navLink.addEventListener("click", () => changeClass(navLink)); // add onclick event listener to the generated item asynchronously
    navLi.appendChild(navLink);
})

// on click, remove css class that animates the link element, also rotate the body tag
let clickCount = 1;
function changeClass(navLink) {
    navLink.classList.remove('a-animated');

    document.body.style.transform = `rotate(${clickCount * 6}deg)`;

    clickCount++;
}

// * PUBLISH BUTTON
// randomly deletes div when button pushed
const pubBtn = document.getElementById('pub-btn');

pubBtn.addEventListener('click', function divRandomDelete() {
    let divArray = document.querySelectorAll('div'); // fetches all divs on the page
    let randomDiv = divArray[Math.floor(Math.random() * divArray.length)]; //randomly selects one

    randomDiv.remove();
    console.log(`Removed ${randomDiv}`);

    pubBtn.textContent = '>:)';
    pubBtn.style.color = 'red'; // turns into a devil >:)
})