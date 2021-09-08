const btns = document.querySelectorAll(".tag__genre__item");

btns.forEach(el=>{
    el.addEventListener("click",(e)=>{
        e.target.classList.toggle("tag__genre__item--selected")
    })
})