const clock = document.querySelector('#clock')

setInterval(()=>{
    let date = new Date()
// console.log(date.toLocaleString());
clock.innerHTML = date.toLocaleString()
}, 1000)