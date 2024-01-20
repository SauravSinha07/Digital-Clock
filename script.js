const clock=document.querySelector('#display')
// console.log(time)
setInterval( function(){
    const date = new Date()
    const time=date.toLocaleString()
    clock.innerHTML=time
},1000)

