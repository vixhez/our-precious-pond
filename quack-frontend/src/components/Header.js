import React, { useEffect } from 'react';

import Mallard from '../assets/ducks/general-imagery/mallard_transparent.png';

export default function Header() {

    useEffect(() => {
        let observer;

        let options = {
            root: document.querySelector('.app__container'),
            rootMargin: '0px 0px 400px 0px',
            threshold: 0,
        }
        
        observer = new IntersectionObserver(initiateStickyHeader, options);

        let observeTarget = document.querySelector('.app__header').nextElementSibling;

        observer.observe(observeTarget);
    }, []);
    
    function initiateStickyHeader(event) {
        let header = document.querySelector('.app__header');
        let appContainer = document.querySelector('.app__container');
        let headerHeight = header.offsetHeight;
        let stickyFiller = document.querySelector('.app-header--sticky__filler');

        console.log('event is intersecting', event[0].isIntersecting);
        console.log(appContainer.scrollTop);

        if (event[0].isIntersecting || appContainer.scrollTop === 0) {
            header.classList.remove('app__header--sticky');
            stickyFiller.style.paddingTop = 0;
        } else {
            header.classList.add('app__header--sticky');
            let stickyFiller = document.querySelector('.app-header--sticky__filler');
            let headerDifference = headerHeight - header.offsetHeight;
            stickyFiller.style.paddingTop = `${headerDifference * 1}px`;
        }
    }

    return (
        <>
            <div className="app-header--sticky__filler"></div>
            <div className="app__header">
                <img src={Mallard} alt="" />
                <h1>Our Precious Pond</h1>
            </div>
        </>
    )
}