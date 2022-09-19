import BioImage from '../assets/misc/bio-image.jpeg';
import GitHub from '../assets/misc/github.png';
import LinkedIn from '../assets/misc/linkedin.png';

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

    function toggleInfoModalSection(event) {
        let infoSectionsContainer = document.querySelector('.modal__sections');
        let infoSections = infoSectionsContainer.querySelectorAll('div.info-section');
        let targetSection = infoSectionsContainer.querySelector(`div[id=${event.target.id}`);

        infoSections.forEach(infoSection => {
            infoSection === targetSection ? infoSection.style.display = 'block' : infoSection.style.display = 'none';
        })        
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
                <div className="modal__assets-sections-container">
                    <div className="modal__assets">
                        <img src={BioImage} alt="Victoria relaxing with ducks" />
                        <div className="assets__external-links">
                            <a className="asset__external-link github" href="https://github.com/vixhez/our-precious-pond" target="_blank" rel="noreferrer">
                                <img src={GitHub} alt="GitHub logo" />
                            </a>
                            <a className="asset__external-link linkedin" href="https://linkedin.com/in/victoria-herod" target="_blank" rel="noreferrer">
                                <img src={LinkedIn} alt="LinkedIn logo" />
                            </a>
                        </div>
                    </div>
                    <div className="modal__sections">
                        <div className="modal__section-buttons">
                            <button
                                id="bio"
                                className="button__toggle-info button__toggle-info--bio"
                                onClick={toggleInfoModalSection}
                            >
                                About
                            </button>
                            <button
                                id="resources"
                                className="button__toggle-info button__toggle-info--resources"
                                onClick={toggleInfoModalSection}
                            >
                                Resources
                            </button>
                            <button
                                id="references"
                                className="button__toggle-info button__toggle-info--references"
                                onClick={toggleInfoModalSection}
                            >
                                References
                            </button>   
                        </div>
                        <div className="info-section" id="bio">
                            Hello there!
                            I hope this biography finds you thriving and in anticipation of finding out your duck alter ego via the quiz - it is, after all, *sacred knowledge*. 
                            Jokes aside, this is of course no genuine attempt to psycho-analyse anyone or to re-create the Myers-Briggs Indicator. Above all, I have created this app because 1) I wanted to highlight the wonderful species of ducks that are under conservation threat, 2) I love to code, and 3) I ADORE DUCKS.
                            <br /><br />
                            Having grown up in the blessed countryside of Hertfordshire, I've been mates with Indian Runner and Mallard ducks since I was miniature. From day 1, I have loved their quirks, their honks, and their attitude!
                            <br /><br />
                            Building this app has been a really stimulating process, and it's been wicked to discover new varieties of duck along the way, as well as jarring to then discover they are at risk. It felt important for me to put a spotlight on (just some of) the fantastic duck varieties on our beautiful planet that are being flagged by the IUCN (International Union for Conservation of Nature) as at-risk groups. In that spirit, I have also included in this section some resources around duck conservation if you would like to know more.
                            <br /><br />
                            Go forth and soak in the duck magic! I hope you have fun learning about these gorgeous, radiant and savvy creatures.
                        </div>
                        <div className="info-section" id="resources">
                            <ul>
                                <li>
                                    <a href="https://www.rspb.org.uk/birds-and-wildlife/wildlife-guides/bird-a-z/ducks-geese-and-swans/" target="_blank" rel="noreferrer">
                                        Duck, geese and swans
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.rspb.org.uk/birds-and-wildlife/advice/how-you-can-help-birds/" target="_blank" rel="noreferrer">
                                        How you can help birds
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.treehugger.com/ways-to-help-ducks-385903" target="_blank" rel="noreferrer">
                                        10 ways to help ducks
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://www.waterfowl.org.uk/" target="_blank" rel="noreferrer">
                                        British Waterfowl Association  
                                    </a> 
                                </li>
                                <li>
                                    <a href="https://www.wwt.org.uk/discover-wetlands/wetland-wildlife/uk-duck-guide/" target="_blank" rel="noreferrer">
                                        UK duck guide
                                    </a>  
                                </li>
                                <li>
                                    <a href="https://www.rewildingbritain.org.uk/" target="_blank" rel="noreferrer">
                                        Rewilding Britain
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tcv.org.uk/" target="_blank" rel="noreferrer">
                                        The Conservation Volunteers
                                    </a>
                                </li>
                                <li>
                                    <a href="https://voice.gardenbird.co.uk/uk-ducks/" target="_blank" rel="noreferrer">
                                        UK ducks
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.countryfile.com/wildlife/where-to-see/duck-guide-britain-species-identification-facts/" target="_blank" rel="noreferrer">
                                        British duck guide
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="info-section" id="references">
                            <ul>
                                <li>
                                    https://www.waterfowl.org.uk/wildfowl/true-ducks/spectacled-eider/
                                </li>
                                <li>
                                    https://animaldiversity.org/accounts/Somateria_fischeri/
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/22680412
                                </li>
                                <li>
                                    https://www.endangered.org/animals/spectacled-eider/
                                </li>
                                <li>
                                    https://www.waterfowl.org.uk/wildfowl/whistling-ducks/west-indian-whistling-duck/
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/west-indian-whistling-duck-dendrocygna-arborea
                                </li>
                                <li>
                                    https://www.fauna-flora.org/species/west-indian-whistling-duck/
                                </li>
                                <li>
                                    https://www.birdscaribbean.org/2020/04/from-the-nest-day-1/
                                </li>
                                <li>
                                    http://www.biodiversityexplorer.info/birds/anatidae/oxyura_maccoa.html
                                </li>
                                <li>
                                    https://ebird.org/species/macduc1
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/maccoa-duck-oxyura-maccoa
                                </li>
                                <li>
                                    https://www.researchgate.net/publication/271765073_The_Maccoa_Duck_Oxyura_maccoa_International_Species_Action_Plan
                                </li>
                                <li>
                                    http://www.the-eis.com/atlas/sites/default/files/Maccoa_Duck.pdf
                                </li>
                                <li>
                                    https://animaldiversity.org/accounts/Clangula_hyemalis/
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/long-tailed-duck-clangula-hyemalis
                                </li>
                                <li>
                                    https://www.allaboutbirds.org/guide/Long-tailed_Duck/
                                </li>
                                <li>
                                    https://ebird.org/species/speduc2
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/spectacled-duck-speculanas-specularis
                                </li>
                                <li>
                                    http://www.planetofbirds.com/anseriformes-anatidae-bronze-winged-duck-speculanas-specularis
                                </li>
                                <li>
                                    https://www.waterfowl.org.uk/wildfowl/true-ducks/spectacled-duck/
                                </li>
                                <li>
                                    https://www.waterfowl.org.uk/wildfowl/true-ducks/falcated-duck/
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/falcated-duck-mareca-falcata
                                </li>
                                <li>
                                    https://ebird.org/species/falduc
                                </li>
                                <li>
                                    https://everipedia.org/Falcated_duck
                                </li>
                                <li>
                                    https://www.wwt.org.uk/news-and-stories/news/falcated-ducks/
                                </li>
                                <li>
                                    https://indianbirds.thedynamicnature.com/2015/03/falcated-duck-anas-falcata.html
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/philippine-duck-anas-luzonica
                                </li>
                                <li>
                                    https://ebird.org/species/phiduc1
                                </li>
                                <li>
                                    https://www.waterfowl.org.uk/wildfowl/true-ducks/philippine-duck-2/
                                </li>
                                <li>
                                    https://harteman.nl/pages/anasluzonica
                                </li>
                                <li>
                                    https://species.nbnatlas.org/species/NHMSYS0001689389
                                </li>
                                <li>
                                    https://www.birdbaron.com/philippine-duck/
                                </li>
                                <li>
                                    https://ebird.org/species/layduc
                                </li>
                                <li>
                                    http://datazone.birdlife.org/species/factsheet/laysan-duck-anas-laysanensis
                                </li>
                                <li>
                                    https://www.endangeredwildlife.org/wildlife/laysan-duck/
                                </li>
                                <li>
                                    https://www.waterfowl.org.uk/wildfowl/true-ducks/laysan-duck/
                                </li>
                                <li>
                                    Mallard image - Lidia Giuliani
                                </li>
                                <li>
                                    Spectacled duck flying image - Mariano Costa
                                </li>
                                <li>
                                    Duck button logos - flaticon.com - max.icons (duck side profile), Khoirul Huda (duck face), surang (duck foot), Eucalyp (duck with wings) (flaticon.com)
                                </li>                                    
                            </ul>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
}