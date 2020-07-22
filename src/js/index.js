import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

// To fetch api:
// repository name
// repo describe
// repo url (code)
// homepage url (demo)

fetch('https://api.github.com/users/Wirus006/repos?sort=created')
    .then(resp => resp.json())
    .then(resp => {
        for(let repo of resp) {
            const {name, description, html_url, homepage} = repo;
            const repositoryList = document.querySelector('.projects__grid--js');
            if(description == null) {
                description = "Brak opisu."
            }

            let myTemplate = `
            <article class="project">
                        <div class="project__bar">
                            <span class="project__circle"></span>
                            <span class="project__circle"></span>
                            <span class="project__circle"></span>
                        </div>
                        <div class="project__content">
                            <img src="project-icon.svg" alt="github icon">
                            <h3 class="project__grid project__title">
                                <span class="project__label">project:</span> <span>${name}</span>
                            </h3>
                            <p class="project__grid project__grid--description">
                                <span class="project__label">description:</span>
                                <span
                                    >${description}</span
                                >
                            </p>
                            <p class="project__grid">
                                <span class="project__label">demo:</span>
                                <span
                                    >&lt;<a class="project__link" href="${homepage}" title="hydrapp - demo">see here</a
                                    >&gt;</span
                                >
                            </p>
                            <p class="project__grid">
                                <span class="project__label">github:</span>
                                <span
                                    >&lt;<a class="project__link" href="${html_url}" title="hydrapp - code"
                                        >source code</a
                                    >&gt;</span
                                >
                            </p>
                        </div>
                    </article>
            `;
            repositoryList.innerHTML += myTemplate; 
        }
    })
    .catch(error => {
        console.log(`nie udało się pobrać danych: ${error}`);
    })

document.addEventListener("DOMContentLoaded", () => {
    //  little hack to detect if the user is on ie 11
    const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
    // get all the links with an ID that starts with 'sectionLink'
    const listOfLinks = document.querySelectorAll("a[href^='#sectionLink");
    // loop over all the links
    listOfLinks.forEach(function (link) {
      // listen for a click
      link.addEventListener('click',  () => {
        // toggle highlight on and off when we click a link
        listOfLinks.forEach( (link) => {
          if (link.classList.contains('highlighted')) {
            link.classList.remove('highlighted');
          }
         });
        link.classList.add('highlighted');
        // get the element where to scroll
        let ref = link.href.split('#sectionLink');
        ref = "#section" + ref[1];
        // ie 11 does not support smooth scroll, so we will simply scroll
        if (isIE11) {
            window.scrollTo(0, document.querySelector(ref).offsetTop);
        } else {
            window.scroll({
            behavior: 'smooth',
            left: 0,
            // top gets the distance from the top of the page of our target element
            top: document.querySelector(ref).offsetTop
            });
        }
        })
    })
})