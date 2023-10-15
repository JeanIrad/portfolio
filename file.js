
document.addEventListener('DOMContentLoaded', ()=>{
const p = document.querySelector('p')
const colors = ['#ccc', 'purple', 'cyan', '#48a', '#d626', '#673', '#594acd']
const btn = document.querySelector('button')
btn.onclick = ()=>{
    let color = colors[Math.floor(Math.random()*(colors.length - 1))]
    p.style.backgroundColor = color
    // console.log(color)
}
})

