(function(){
    let elBtnModal = document.querySelector(".btn_modal");
    let elCarrousel = document.querySelector(".carrousel");
    let elBtnX = document.querySelector(".btn_x");
    elBtnModal.addEventListener("mousedown", function(){
        elCarrousel.classList.add("carrousel--ouvrir")
    });
    elBtnX.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")
    });
})()