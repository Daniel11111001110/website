var menuIcon = document.querySelector(".menu-icon");
var ul = document.querySelector(".ul")
// consegue capiturar os eventos dos elementos.
menuIcon.addEventListener("click", ()=>{
    // vai verificar se a tag ul contem a classe ativo
    if(ul.classList.contains("ativo")){
        ul.classList.remove("ativo");
        document.querySelector(".menu-icon img").src = "img/menu.png";
    }else{
        ul.classList.add("ativo");
        document.querySelector(".menu-icon img").src = "img/close.png";
    }
})

// ul.classList.add("ativo"); <- acessa e adiciona classe