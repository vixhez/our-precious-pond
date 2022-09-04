import BioImage from '../assets/misc/bio-image.jpeg';

export default function Info() {
    function toggleInfoModal(event) {
        event.preventDefault();

        let appContainer = event.target.closest('.app-container');
        let infoModal = appContainer.querySelector('.info__modal');
        console.log('hiya we out here')
        console.log(event.target);
        if (infoModal.clientHeight === 0) {
            infoModal.style.display = 'flex';
            event.target.textContent = 'X';
            // event.target.style.right = '2rem';
            appContainer.style.overflowY = 'hidden';
        } else {
            infoModal.style.display = 'none';
            event.target.textContent = 'i';
            // event.target.style.right = '1rem';
            appContainer.style.overflowY = 'scroll';
        }
    }

    return (
        <div className="info__container">
                <button
                    className="button__toggle-info-modal"
                    aria-label="Toggle info modal"
                    onClick={toggleInfoModal}
                >
                    i
                </button>
            <div className="info__modal">
                <span className="modal__bio">
                    Hello there!
                    <br />
                    I hope this biography finds you thriving and in anticipation of finding out your duck alter ego - it is, after all, *sacred knowledge*. 
                    Jokes aside, this is of course no genuine attempt to psycho-analyse anyone or to re-create the Myers-Briggs Indicator. Above all, I have created this app because 1) I wanted to highlight the wonderful species of ducks that are under conservation threat, 2) I love to code, and 3) I ADORE DUCKS.
                    <br /><br />
                    Having grown up in the blessed countryside of Hertfordshire, I've been mates with Indian Runner and Mallard ducks since I was miniature. From day 1, I have loved their quirks, their honks, and their attitude!
                    <br /><br />
                    Building this app has been a really stimulating process, and it's been wicked to discover new varieties of duck along the way, but then of course also jarring to know they are at risk. It felt important for me to put a spotlight on (just some of) the fantastic duck varieties on our beautiful planet that are being flagged by the IUCN (International Union for Conservation of Nature) as at-risk groups. Also in this section are resources around duck conservation if you would like to know more.
                    <br /><br />
                    Go forth and soak in the duck magic! I hope you have fun learning about these gorgeous, radiant and savvy creatures. More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text More text 
                </span>
                <img src={BioImage} alt="Victoria relaxing with ducks" />
            </div>
        </div>
    )
}