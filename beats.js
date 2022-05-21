const headsets = document.querySelectorAll('.headset')
const smallHeadsets = document.querySelectorAll('.small-headset')
const prices = document.querySelectorAll('.price')
const navBtn = document.querySelector('.btn')
const mobileNav = document.querySelector('.mobile-nav')

smallHeadsets.forEach((smallHeadset, idx) =>{
    smallHeadset.addEventListener('click',()=>{
        removeAllHeadset()
        removeAllPrices()
        headsets[idx].classList.add('show')
        prices[idx].classList.add('show')
    })
})

navBtn.addEventListener('click', ()=>{
    navBtn.classList.toggle('active')
    mobileNav.classList.toggle('show')
})

function removeAllHeadset(){
    headsets.forEach(headset =>{
        headset.classList.remove('show')
    })
}

function removeAllPrices(){
    prices.forEach(price =>{
        price.classList.remove('show')
    })
}
