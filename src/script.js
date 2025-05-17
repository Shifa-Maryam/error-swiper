const { space } = require("postcss/lib/list")

document.getElementById('btn-menu').addEventListener('click',function(){
    document.getElementById('menu').classList.toggle('hidden')
})

function removeAOS() {
    const AOS =document.querySelectorAll('[data-aos]')

    if (window.innerWidth <= 768) {
        AOS.forEach(function(remove) {
            remove.removeAttribute('data-aos')
        })
    }
}
window.addEventListener('load',AOS)