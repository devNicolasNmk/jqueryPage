$(function () {
    let mainMenuItems = $("#main-menu ul").children("li"),
        totalMainMenuItems = mainMenuItems.length,
        openedIndex = 2; // -1 => menu fermé

    let init = function () {
        bindEvents();
        if(validIndex(openedIndex)){
            animateItem(mainMenuItems.eq(openedIndex), true, 700);
        }
    };
    
    bindEvents = function(){
        mainMenuItems.children(".images").click(function () {

            let newIndex = $(this).parent().index(), //recupere l'index cliqué
                item = mainMenuItems.eq(newIndex);
            if (openedIndex == newIndex) {
                animateItem(item, false, 250);
                openedIndex = -1;
            } else {
                if (validIndex(newIndex)) {
                    animateItem(mainMenuItems.eq(openedIndex), false, 250);
                    openedIndex = newIndex;
                    animateItem(item, true, 250);
                }
                animateItem(item, true, 250);
            }

        });
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

    init();

})