import '../scss/main.scss';

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
                                    >&lt;<a target="_blank" rel="noopener noreferrer" class="project__link" href="${homepage}" title="${name} - demo">see here</a
                                    >&gt;</span
                                >
                            </p>
                            <p class="project__grid">
                                <span class="project__label">github:</span>
                                <span
                                    >&lt;<a target="_blank" rel="noopener noreferrer" class="project__link" href="${html_url}" title="${name} - code"
                                        >source code</a
                                    >&gt;</span
                                >
                            </p>
                        </div>
                    </article>
            `;
            if(homepage) {
              repositoryList.innerHTML += myTemplate;
            } 
        }
    })
    .catch(error => {
        console.log(`nie udało się pobrać danych: ${error}`);
    })