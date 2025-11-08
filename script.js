// функционал для раздела "Вопросы"
document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
        btn.closest('.faq-item').classList.toggle('open');
    });
});

$(document).ready(()=>{
    onscroll = (event) => {
        if(window.scrollY/window.innerHeight > 1){
            if(!$("header").hasClass("header-down")){
                $("header").toggleClass("header-down")
            }
        } else {
            if($("header").hasClass("header-down")){
                $("header").toggleClass("header-down")
            }
        }
    }
})

