import BioImage from '../assets/misc/bio-image.jpeg';

export default function Info() {
    function toggleInfoModal(event) {
        event.preventDefault();

        let appContainer = event.target.closest('.app__container');
        let infoModal = appContainer.querySelector('.info__modal');
        
        if (infoModal.clientHeight === 0) {
            appContainer.scrollTo(0, 0);
            appContainer.style.overflowY = 'hidden';
            infoModal.style.display = 'flex';
            event.target.textContent = 'X';
            event.target.classList.add('modal--open');
        } else {
            appContainer.style.overflowY = 'scroll';
            infoModal.style.display = 'none';
            event.target.textContent = 'i';
            event.target.classList.remove('modal--open');

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
                    <br /><br />
                    I hope this biography finds you thriving and in anticipation of finding out your duck alter ego via the quiz - it is, after all, *sacred knowledge*. 
                    Jokes aside, this is of course no genuine attempt to psycho-analyse anyone or to re-create the Myers-Briggs Indicator. Above all, I have created this app because 1) I wanted to highlight the wonderful species of ducks that are under conservation threat, 2) I love to code, and 3) I ADORE DUCKS.
                    <br /><br />
                    Having grown up in the blessed countryside of Hertfordshire, I've been mates with Indian Runner and Mallard ducks since I was miniature. From day 1, I have loved their quirks, their honks, and their attitude!
                    <br /><br />
                    Building this app has been a really stimulating process, and it's been wicked to discover new varieties of duck along the way, as well as jarring to then discover they are at risk. It felt important for me to put a spotlight on (just some of) the fantastic duck varieties on our beautiful planet that are being flagged by the IUCN (International Union for Conservation of Nature) as at-risk groups. In that spirit, I have also included in this section some resources around duck conservation if you would like to know more.
                    <br /><br />
                    Go forth and soak in the duck magic! I hope you have fun learning about these gorgeous, radiant and savvy creatures.
                </span>
                <img src={BioImage} alt="Victoria relaxing with ducks" />
            </div>
        </div>
    )
}