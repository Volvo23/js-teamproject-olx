import '../node_modules/modern-normalize/modern-normalize.css';
//import { renderHeader } from './js/components/header';
import './styles.scss';
import { refs, openAdvModal } from './js/components/newAdvForm';




// const addButton = document.querySelector('form-input-file');
// content.innerHTML = listMarkup();
// addButton.addEventListener('click', addImage)

import { sliderGallery } from './js/components/sliderGallery';

import './js/components/hero';
import { isLogin } from './js/components/navigation-estimates';
//renderHeader();

import { init} from './js/api/galleryApi'
init()
document.querySelector('.gallery__wrap').addEventListener('click', e => console.log(e.target))








isLogin()


import { sandwichmenu } from './js/components/sandwichmenu';


window.addEventListener('load', () => {
    $(document).ready(function () {
        $('.js-slider').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 3,
            centerMode: true,
            centerPadding: '60px',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    });
}, false);