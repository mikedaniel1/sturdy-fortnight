let a = document.getElementById('Amount')
let b = document.getElementById('duration')
let c = document.getElementById('cal')
let d = document.getElementById('answer')
let rate = 0.15

c.addEventListener('click', () => {
    let w = a.value * b.value * rate
    d.innerHTML =w
    alert(`You will withdraw a total amount of $${w} at the end of ${b.value}months if you invest $${a.value} with us. `)
})