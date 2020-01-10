function clock(){
let date = new Date();
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second= document.querySelector(".second");
hour.innerText = date.getHours();
minute.innerText = date.getMinutes();
second.innerText = date.getSeconds();
}
setInterval(clock,100);
//console.log(date.getHours());
