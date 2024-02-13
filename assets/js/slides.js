'use strict'

const slideWrapper = document.querySelector('[data-slide="wrapper"]'); //Pai de todos
const slideList = document.querySelector('[data-slide="list"]'); // lista de slides
const navPreviousButton = document.querySelector('[data-slide="navPreviousButton"]'); //seta para voltar slide anteriror
const navNextButton = document.querySelector('[data-slide="navNextButton"]'); //seta para voltar slide anteriror
const controlsWrapper = document.querySelector('[data-slide="controlsWrapper"]'); //controle do slide
const slideItem = document.querySelectorAll('[data-slide="item"]');
const controlButtons = document.querySelectorAll('[data-slide="controlButton"]');


slideItem.forEach (function (slideItem, index) {
    slideItem.addEventListener('mousedown', function () {
        console.log ('Apertei', index)
    } )

    slideItem.addEventListener('mouseup', function () {
        console.log ('soltei', index)
    } )

    slideItem.addEventListener('mousemove', function () {
        console.log ('movi o mouse', index)
    } )

})