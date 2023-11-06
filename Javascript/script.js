const faqDown = document.querySelectorAll(".plus");

faqDown.forEach((icons)=>{
    icons.onclick = ()=>{
        const drop = icons.parentElement.parentElement;
        drop.classList.toggle("active");
        icons.classList.toggle("active")
    }
})