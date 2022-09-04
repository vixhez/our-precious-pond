import BioImage from '../assets/misc/bio-image.jpeg';

export default function Info() {
    function handleInfoClick(event) {
        event.preventDefault();

        let infoContainer = event.target.closest('.info__container');
        let infoModal = infoContainer.querySelector('.info__modal');
        console.log('hiya we out here')
        console.log(Array.from(event.target.classList));
        if (Array.from(event.target.classList).includes('button__open-info-modal')) {
            infoModal.style.display = 'flex';
            console.log('if');
        } else {
            infoModal.style.display = 'none';
            console.log('else');
        }
    }

    return (
        <div className="info__container">
            <button
                className="button__open-info-modal"
                aria-label="Open info modal"
                onClick={handleInfoClick}
            >
                i
            </button>
            <div className="info__modal">
                <button
                    className="button__close-info-modal"
                    aria-label="Close info modal"
                    onClick={handleInfoClick}
                >
                    X
                </button>
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
                    Go forth and soak in the duck magic! I hope you have fun learning about these gorgeous, radiant and savvy creatures.
                </span>
                <img src={BioImage} alt="Victoria relaxing with ducks" />
            </div>
        </div>
    )
}