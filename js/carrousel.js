(function(){

    /*****************************************************Les éléments du carrousel */

    /**Conteneur du carrousel */
    let elBtnModal = document.querySelector(".btn_modal");
    /**Bouton temporaire pour l'ouverture */
    let elCarrousel = document.querySelector(".carrousel");
    /**Bouton pour la fermeture */
    let elBtnX = document.querySelector(".btn_x");
    /**Figure qui contient les images */
    let elCarrouselFigure = document.querySelector(".carrousel__figure");
    /**Formulaire contenant les boutons */
    let elCarrouselForm  = document.querySelector(".carrousel__form");

    /*****************************************************Les éléments de la galerie */
    /**Conteneur de la galerie */
    let elGalerie = document.querySelector(".galerie");
    let elGalerieImg = document.querySelectorAll(".galerie figure img");

    /*****************************************************Étape 1: parcourir la galerie */
    for (const elImg of elGalerieImg) {

        ajouter_img_carrousel(elImg);
        // ajouter_radio_carrousel(elImg);
    }

    function ajouter_img_carrousel(elImg){
        let elCarrouselFigureImg = document.createElement('img');
        elCarrouselFigureImg.setAttribute('src', elImg.src);
        elCarrouselFigureImg.classList.add('carrousel__figure__img');
        elCarrouselFigure.appendChild(elCarrouselFigureImg);
        console.log(elCarrouselFigureImg);
    }

    /*****************************************************Ouverture du carrousel */
    elBtnModal.addEventListener("mousedown", function(){
        elCarrousel.classList.add("carrousel--ouvrir")
    });

    /*****************************************************Fermeture du carrousel */
    elBtnX.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")
    });
})()