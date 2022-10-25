(function(){

    /*****************************************************Les éléments du carrousel */

    /**Initialisation du compteur */
    let index = 0;

    /**Bouton temporaire pour l'ouverture */
    let elCarrousel = document.querySelector(".carrousel");
    /**Bouton pour la fermeture */
    let elBtnX = document.querySelector(".btn_x");
    /**Bouton pour la flèche gauche */
    let elBtnGauche = document.querySelector(".btn_gauche");
    /**Bouton pour la flèche droite */
    let elBtnDroite = document.querySelector(".btn_droite");
    /**Figure qui contient les images */
    let elCarrouselFigure = document.querySelector(".carrousel__figure");
    /**Formulaire contenant les boutons */
    let elCarrouselForm  = document.querySelector(".carrousel__form");

    /*****************************************************Les éléments de la galerie */
    /**Conteneur de la galerie */
    let elGalerieImg = document.querySelectorAll(".galerie figure img");

    /*****************************************************Étape 1: parcourir la galerie */
    for (const elImg of elGalerieImg) {

        ajouter_img_carrousel(elImg);
        ajouter_radio_carrousel();
        elImg.dataset.index = index;
        index++;
        elImg.addEventListener("click", function(){
            elCarrousel.classList.add("carrousel--ouvrir");

            changeClasseActive(this.dataset.index);

            elCarrouselForm.children[this.dataset.index].checked = true;
        })
    }

    /**
     * Ajoute une image dans le carrousel
     * @param {*} elImg Une image de la galerie
     */
    function ajouter_img_carrousel(elImg){
        let elCarrouselFigureImg = document.createElement('img');
        elCarrouselFigureImg.setAttribute('src', elImg.src);
        elCarrouselFigureImg.classList.add('carrousel__figure__img');
        elCarrouselFigureImg.dataset.index = index;
        if(elCarrouselFigureImg.dataset.index == 0) {
            elCarrouselFigureImg.classList.add('carrousel__figure__img--actif');
        }
        elCarrouselFigure.appendChild(elCarrouselFigureImg);
    }

    /**
     * Ajoute un bouton radio dans le carrousel
     */
    function ajouter_radio_carrousel(){
        let elCarrouselBtnRadio = document.createElement('input');
        elCarrouselBtnRadio.type = "radio";
        elCarrouselBtnRadio.name = "carrousel__form__radio";
        elCarrouselBtnRadio.classList.add("carrousel__form__radio");
        elCarrouselBtnRadio.dataset.index = index;
        elCarrouselForm.appendChild(elCarrouselBtnRadio)

        /**Écouteur pour changer l'image dans le carrousel */
        elCarrouselBtnRadio.addEventListener("click", function(){
            changeClasseActive(this.dataset.index);
        })
    }

    /*****************************************************Fermeture du carrousel */
    elBtnX.addEventListener("mousedown", function(){
        elCarrousel.classList.remove("carrousel--ouvrir")
    });

    /*****************************************************Flèche de gauche */
    elBtnGauche.addEventListener("click", function(){
        let index = elCarrousel.querySelector(".carrousel__figure__img--actif").dataset.index;
        let toActif;
        if(index == 0) {
            toActif = elGalerieImg.length -1;
        } else {
            toActif = index -1;
        }
        changeClasseActive(toActif);
        elCarrouselForm.children[toActif].checked = true;
    })
    /*****************************************************Flèche de droite */
    elBtnDroite.addEventListener("click", function(){
        let index = elCarrousel.querySelector(".carrousel__figure__img--actif").dataset.index;
        let toActif;
        if(index == elGalerieImg.length -1) {
            toActif = 0;
        } else {
            toActif = parseInt(index)  + 1;
        }
        changeClasseActive(toActif);
        elCarrouselForm.children[toActif].checked = true;
    })

    /*****************************************************Change la classe active */
    function changeClasseActive(index){
        if(elCarrousel.querySelector(".carrousel__figure__img--actif") != null){
            elCarrousel.querySelector(".carrousel__figure__img--actif").classList.remove("carrousel__figure__img--actif");
        }
        elCarrouselFigure.children[index].classList.add("carrousel__figure__img--actif");
    }
})()