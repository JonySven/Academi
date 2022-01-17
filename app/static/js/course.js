const header = document.querySelector('.navbar');
const hederHeight = header.offsetHeight;


window.addEventListener('scroll', () => {
    let scrolDistans = window.scrollY;
    
    if(scrolDistans > 0) {
       header.classList.add('header--fixed');
    }
    else{
        header.classList.remove('header--fixed');
    }
})
