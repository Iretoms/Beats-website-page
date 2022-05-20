const headsets = document.querySelectorAll('.first-container__image .headset')
const smallHeadsets = document.querySelectorAll('.first-container__images .small-headset')

smallHeadsets.forEach((smallHeadset, idx) =>{
    smallHeadset.addEventListener('click',()=>{
        removeAllHeadset()
        headsets[idx].classList.add('show')
    })
})


function removeAllHeadset(){
    headsets.forEach(headset =>{
        headset.classList.remove('show')
    })
}