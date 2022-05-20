const headsets = document.querySelectorAll('.headset')
const smallHeadsets = document.querySelectorAll('.small-headset')
const prices = document.querySelectorAll('.price')

smallHeadsets.forEach((smallHeadset, idx) =>{
    smallHeadset.addEventListener('click',()=>{
        removeAllHeadset()
        removeAllPrices()
        headsets[idx].classList.add('show')
        prices[idx].classList.add('show')
    })
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