const click = document.querySelector('.click');
const box = document.querySelector('.box');
const shadow = document.querySelector('.shadow');
const container = document.querySelector('.container');
const text = document.querySelector('.text');

click.addEventListener('click', () => {
    if (click.className === "click") {
        click.classList.add('active');
        box.classList.add('active');
        shadow.classList.add('active');
        container.classList.add('active');
        text.classList.add('active');
        text.classList.remove('active2');
    }
    else {
        click.classList.remove('active');
        box.classList.remove('active');
        shadow.classList.remove('active');
        container.classList.remove('active');
        text.classList.remove('active');
        text.classList.add('active2');
    }
})