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
                    src="public/project-icon.svg"
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