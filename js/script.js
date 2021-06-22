document.querySelector('.price-increase').onclick = myPriceIncrease;
document.querySelector('.price-decrease').onclick = myPriceDecrease;
document.querySelector('.age-increase').onclick = myAgeIncrease;
document.querySelector('.age-decrease').onclick = myAgeDecrease;


//сортировка по цене
function myPriceIncrease(){
    let content = document.querySelector('.main__content');
    for (let i = 0; i < content.children.length; i++){
        for (let j = i; j < content.children.length; j++){
            if (+content.children[i].getAttribute("data-price") > +content.children[j].getAttribute("data-price")){
                replacedNode = content.replaceChild(content.children[j], content.children[i]);
                insertAfter(replacedNode, content.children[i]);
            }
        }
    }
}
function myPriceDecrease(){
    let content = document.querySelector('.main__content');
    for (let i = 0; i < content.children.length; i++){
        for (let j = i; j < content.children.length; j++){
            if (+content.children[i].getAttribute("data-price") < +content.children[j].getAttribute("data-price")){
                replacedNode = content.replaceChild(content.children[j], content.children[i]);
                insertAfter(replacedNode, content.children[i]);
            }
        }
    }
}


//сортировка по возрасту
function myAgeIncrease(){
    let content = document.querySelector('.main__content');
    for (let i = 0; i < content.children.length; i++){
        for (let j = i; j < content.children.length; j++){
            if (+content.children[i].getAttribute("data-age") > +content.children[j].getAttribute("data-age")){
                replacedNode = content.replaceChild(content.children[j], content.children[i]);
                insertAfter(replacedNode, content.children[i]);
            }
        }
    }
}
function myAgeDecrease(){
    let content = document.querySelector('.main__content');
    for (let i = 0; i < content.children.length; i++){
        for (let j = i; j < content.children.length; j++){
            if (+content.children[i].getAttribute("data-age") < +content.children[j].getAttribute("data-age")){
                replacedNode = content.replaceChild(content.children[j], content.children[i]);
                insertAfter(replacedNode, content.children[i]);
            }
        }
    }
}

function insertAfter(elem, refElem){
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}



//стрелка возврата 
function pageup(){
    let button = $('.pageup');

    $(window).on('scroll', ()=> {
        if ($(this).scrollTop() >= 50){
            button.fadeIn();
        } else{
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    });
}

pageup();




//гамбургер-меню
(function (){
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
    });
}());