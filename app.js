
document.querySelector('.nav-btn').addEventListener('click', openNav)

function openNav() {
    document.querySelector('.navigation__wrapper').style.width = '300px';
    document.querySelector('.navigation__wrapper').style.height = '100vh';
    document.querySelector('.navigation__list').style.transform = 'translateX(0)';
    document.querySelector('.backdrop').style.display = 'block';

}


document.querySelector('.close-btn').addEventListener('click', closeNav)
document.querySelector('.backdrop').addEventListener('click', closeNav)

function closeNav() {
    document.querySelector('.navigation__wrapper').style.width = '0'
    document.querySelector('.navigation__list').style.transform = 'translateX(-200px)';
    document.querySelector('.backdrop').style.display = 'none';
}

document.querySelectorAll('.home__btn').forEach((e) => {
    e.addEventListener('click', showPopUp)
})

function showPopUp() {
    document.querySelector('.homes__form').style.display = 'block';
    document.querySelector('.homes__form').classList.add('animate-form')
    document.querySelector('.homes__form').classList.remove('animate-close-form')
}


document.querySelectorAll('.close-btn.popUp').forEach((e) => {
    e.addEventListener('click', closePopUp)
}) 

function closePopUp() {
    document.querySelector('.homes__form').classList.remove('animate-form')
    document.querySelector('.homes__form').classList.add('animate-close-form')
    setTimeout(function(){
        document.querySelector('.homes__form').style.display = 'none'
    }, 200)
}