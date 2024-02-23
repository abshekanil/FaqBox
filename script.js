let faq1 = document.getElementById('faq1');
let faq2 = document.getElementById('faq2');
let faq3 = document.getElementById('faq3');
let faq4 = document.getElementById('faq4');

let q1Btn = document.getElementById('q1');
let q2Btn = document.getElementById('q2');
let q3Btn = document.getElementById('q3');
let q4Btn = document.getElementById('q4');


let ans1 = document.getElementById('ans1');
let ans2 = document.getElementById('ans2');
let ans3 = document.getElementById('ans3');
let ans4 = document.getElementById('ans4');


faq1.style.borderRadius = "10px";
faq2.style.borderRadius = "10px";
faq3.style.borderRadius = "10px";
faq4.style.borderRadius = "10px";


ans1.style.display = "none";
ans2.style.display = "none";
ans3.style.display = "none";
ans4.style.display = "none";

q1Btn.addEventListener("click", function(){
    if(ans1.style.display === "none")
    {
        faq1.style.borderBottomLeftRadius = "0px";
        faq1.style.borderBottomRightRadius = "0px";
        ans1.style.display = "block";
        faq1.style.marginBottom = "0px"
        q1Btn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else
    {
        ans1.style.display = "none";
        faq1.style.marginBottom = "40px"
        q1Btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        faq1.style.borderBottomLeftRadius = "10px";
        faq1.style.borderBottomRightRadius = "10px";
        
        
    }
    
});

q2Btn.addEventListener("click", function(){
    if(ans2.style.display === "none")
    {
        faq2.style.borderBottomLeftRadius = "0px";
        faq2.style.borderBottomRightRadius = "0px";
        ans2.style.display = "block";
        faq2.style.marginBottom = "0px"
        q2Btn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else
    {
        ans2.style.display = "none";
        q2Btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        faq2.style.borderBottomLeftRadius = "10px";
        faq2.style.borderBottomRightRadius = "10px";
        faq2.style.marginBottom = "40px"
        
        
    }
});

q3Btn.addEventListener("click", function(){
    if(ans3.style.display === "none")
    {
        faq3.style.borderBottomLeftRadius = "0px";
        faq3.style.borderBottomRightRadius = "0px";
        ans3.style.display = "block";
        faq3.style.marginBottom = "0px"
        q3Btn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else
    {
        ans3.style.display = "none";
        q3Btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        faq3.style.borderBottomLeftRadius = "10px";
        faq3.style.borderBottomRightRadius = "10px";  
        faq3.style.marginBottom = "40px"
    }
});

q4Btn.addEventListener("click", function(){
    if(ans4.style.display === "none")
    {
        faq4.style.borderBottomLeftRadius = "0px";
        faq4.style.borderBottomRightRadius = "0px";
        ans4.style.display = "block";
        faq4.style.marginBottom = "0px"
        q4Btn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    }
    else
    {
        ans4.style.display = "none";
        q4Btn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        faq4.style.borderBottomLeftRadius = "10px";
        faq4.style.borderBottomRightRadius = "10px"; 
        faq4.style.marginBottom = "40px" 
    }
});

console.log(screen.width);
console.log(screen.height);