// const navigationSwitcher= document.querySelector('.navigation__switcher--js');

// navigationSwitcher.addEventListener('click', (e)=> {
//     const navigationList=document.querySelector('.navigation__list--js')
//     navigationList.classList.toggle('navigation__list--visible')  
// });


const submit= document.querySelector('.button__submit');
const close=document.querySelector('.button__submit--close')
const overlay=document.querySelector('.overlay');

submit.addEventListener('click', (e)=> {
    const box=document.querySelector('.box')
    box.classList.add('box__active')
    overlay.classList.add('overlay__active')
});

close.addEventListener('click', (e)=>{
    const box=document.querySelector('.box')
    box.classList.remove('box__active')
    overlay.classList.remove('overlay__active')
})