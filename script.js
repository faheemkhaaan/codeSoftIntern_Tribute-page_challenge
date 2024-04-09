const backgroundImgContainer = document.querySelector('.backgroundImg')
const imgElements = document.querySelectorAll("img");


let totalHeight = document.body.clientHeight;
let current = totalHeight / 5;
let loc = current
console.log(current);

document.addEventListener('scroll', () => {

    if (window.scrollY >= 814) {
        imgElements[0].style.opacity = '0'
    }else{
        imgElements[0].style.opacity = '1'

    }
     if (window.scrollY >= 1628) {
        imgElements[1].style.opacity = '0'
        console.log(imgElements[1]);
    } else{
        imgElements[1].style.opacity = '1'

    }
     if (window.scrollY >= 2442) {
        imgElements[2].style.opacity = '0'
    } else{
        imgElements[2].style.opacity = '1'

    }
     if (window.scrollY >= 3256) {
        imgElements[3].style.opacity = '0'
    } else{
        imgElements[3].style.opacity = '1'

    }
     if (window.scrollY >= 4070) {
        imgElements[4].style.opacity = '1'
    }
})
