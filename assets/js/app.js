$(function () {
    let mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = mainMenuItems.length,
        openedIndex = 2; // animation de depart 

    let init = function () {
        bindEvents();
        if (validIndex(openedIndex)) {
            animateItem(mainMenuItems.eq(openedIndex), true, 700);
        }
    };

    bindEvents = function () {
        mainMenuItems.children(".images").click(function () {

            let newIndex = $(this).parent().index(); //recupere l'index cliqué
            checkAndAnimateItem(newIndex);


        });
        $('.button').click(function () {
            let newIndex = $(this).index();
            checkAndAnimateItem(newIndex)

        })
    }

    let validIndex = function (indexToCheck) {
        return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    };

    let animateItem = function (item, toOpen, speed) {

        let colorImage = item.find(".color"),
            itemParam = toOpen ? {
                width: "380px"
            } : {
                width: "140px"
            },
            colorImageParam = toOpen ? {
                left: "0px"
            } : {
                left: "140px"
            }
        //affiche l'image en couleur
        colorImage.animate(colorImageParam, speed);
        item.animate(itemParam, speed);
    };

    /**
     * gere la fermeture ou l'ouverture
     */
    let checkAndAnimateItem = function (indexToAnimate) {
        if (openedIndex == indexToAnimate) {
            animateItem(mainMenuItems.eq(indexToAnimate), false, 250);
            openedIndex = -1; // menu fermé
        } else {
            if (validIndex(indexToAnimate)) {
                animateItem(mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = indexToAnimate;
                animateItem(mainMenuItems.eq(openedIndex), true, 250);
            }
        }

    };

    init();

})