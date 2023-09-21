if (typeof cardsData === 'undefined'){
    var cardsData = [
        {
            projectName: 'PDF-Describer',
            description: 'Content for Card 1',
            details: 'long description of an application',
            status: 'closed',
            tech: 'Python, VBA',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'TechCreator',
            description: 'Content for Card 2',
            details: 'long description of an application',
            status: 'closed',
            tech: 'C#, WPF',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'Battleship',
            description: 'Content for Card 3',
            details: 'long description of an application',
            status: 'closed',
            tech: 'HTML, CSS, JavaScript',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'ActivityManager',
            description: 'Content for Card 4',
            details: 'long description of an application',
            status: 'in progress',
            tech: 'C#, WPF, MS SQL, EFCore',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'GitHubStats',
            description: 'Content for Card 4',
            details: 'long description of an application',
            status: 'in progress',
            tech: 'C#, Python, WebAPI',
            github: 'github-url',
            website: 'website-url'
        }
    ];
}

function renderCards(data) {
    const cardContainer = document.getElementsByClassName('projects-container')[0];

    data.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h2>${card.projectName}</h2>
            <p>${card.description}</p>
            <p>Tech: ${card.tech}</p>
            <p id="det"> click to see details </p>
        `;
        cardContainer.appendChild(cardElement);
    });
}

renderCards(cardsData);