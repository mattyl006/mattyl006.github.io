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
            const repositoryList = document.querySelector('.projects__list--js');
            if(description == null) {
                description = "Brak opisu."
            }

            let myTemplate = `
            <li class="projects__item">
                <img
                    class="projects__icon"
                    src="project-icon.svg"
                />
                <div class="projects__grid">
                    <p class="projects__indention">project:</p>
                    <p class="projects__repo projects__repo--name">
                        ${name}
                    </p>
                    <p class="projects__indention">description:</p>
                    <p class="projects__repo projects__repo--describe">
                        ${description}
                    </p>
                    <p class="projects__indention">demo:</p>
                    <p class="projects__repo">
                        <a
                            class="projects__link"
                            href="${html_url}"
                            >&lt;see here&gt;</a
                        >
                    </p>
                    <p class="projects__indention">github:</p>
                    <p class="projects__repo">
                        <a
                            class="projects__link"
                            href="${homepage}"
                            >&lt;source code&gt;</a
                        >
                    </p>
                </div>
            </li>`;
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