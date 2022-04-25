let img = document.getElementById('imag');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btns = document.querySelectorAll('button');
btns.forEach((e)=>{
e.addEventListener('click',()=>{
    img.animate(
        [
            // keyframes
            { opacity: "0" },
            { opacity: "1" }
        ],
        {
            // timing options
            duration: 850,
            iterations: 1,
            easing: "ease-out"
        }
    );
})
})
btn3.addEventListener('click', () => {
    
    img.src = "./imagini/image4.webp"
});
btn1.addEventListener('click', () => {
     img.src = "./imagini/image3.webp"
});
btn2.addEventListener('click', () => {
     img.src = "./imagini/image1.webp"
});