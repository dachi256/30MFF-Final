let text = document.getElementById('text');
let catLeft = document.getElementById('cat-left');
let catRight = document.getElementById('cat-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.1 + 'px';
    catLeft.style.left = value * -1.5 + 'px';
    catRight.style.left = value * 1.5 + 'px'; 
    /*controls speed of objects moving when scrolling*/
});



// cat fact api
function getCatFact() {
    fetch('https://meowfacts.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
         
            document.getElementById('catFact').innerText = data.data[0];
        })
        .catch(error => console.error('Error:', error));
}

