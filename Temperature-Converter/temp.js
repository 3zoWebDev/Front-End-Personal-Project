let cel = document.querySelector("#cls > input");
let fer = document.querySelector("#fer > input");
let kelv = document.querySelector("#kelv > input");

cel.addEventListener("input", () => {
    let celval = parseFloat(cel.value);
    fer.value = 9 / 5 * celval + 32;
    kelv.value = celval + 273;
});

fer.addEventListener("input", () => {
    let ferval = parseFloat(fer.value);
    cel.value = (ferval - 32) / 1.80;
    kelv.value = 5 / 9 * (ferval - 32) + 273.15;
});

 kelv.addEventListener("input", () => {
     let kelval = parseFloat(kelv.value);
     fer.value = 1.8 * (kelval - 273) + 32;
     cel.value = kelval - 273;
 });


// function keltocel() {
//     let res = kelv.value - 273 ;
//     return res;
// }

// function keltofer() {
//     let res = 1.8 * (kelv.value - 273) + 32;
//     return res;
// }


