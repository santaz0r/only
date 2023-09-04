const map = document.querySelector('.map');
const circles = document.querySelectorAll('.circle');

map.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')) {
        circles.forEach((item => {
            removeClosedClass(item)
        }))
        if(e.target.closest('.circle')) {
            e.target.firstChild.textContent = '-'
            e.target.classList.remove('closed')
            e.target.classList.add('open')
        }
       
    } else {
        circles.forEach((item => {
            removeClosedClass(item)
        }))
    }
    
})


function removeClosedClass(item) {
    item.classList.remove('open')
    item.classList.add('closed')
    item.firstChild.textContent = '+'
}