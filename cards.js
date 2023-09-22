if (typeof cardsData === 'undefined'){
    var cardsData = [
        {
            projectName: 'PDF-Describer',
            description: 'Python app that takes data from CSV file and inserts it to PDF file',
            details: 'long description of an application',
            status: 'closed',
            tech: 'Python, VBA',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'TechCreator',
            description: 'WPF app that simplifies creating production schemas for IPOsystem (Intelligent Prodcution Organizing system)',
            details: 'long description of an application',
            status: 'closed',
            tech: 'C#, WPF',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'Battleship',
            description: 'Battleship game written in JS, final project in the CS50\'s Introduction to Computer Science course',
            details: 'long description of an application',
            status: 'closed',
            tech: 'HTML, CSS, JavaScript',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'ActivityManager',
            description: 'WPF app for adding, deleting and viewing data from SQL database.',
            details: 'long description of an application',
            status: 'in progress',
            tech: 'C#, WPF, MS SQL, EFCore',
            github: 'github-url',
            website: 'website-url'
        },
        {
            projectName: 'GitHubStats',
            description: 'Console .NET app that communicates with GitHub API and provides user statistics to be included in "readme" file',
            details: 'long description of an application',
            status: 'in progress',
            tech: 'C#, Python, WebAPI',
            github: 'github-url',
            website: 'website-url'
        }
    ];
}


// function expand() {
//     console.log('clicked');
// }

function renderCards(data) {
    const cardContainer = document.getElementsByClassName('projects-container')[0];

    data.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        // $('.card').click(expand);
        cardElement.innerHTML = `
            <h2>${card.projectName}</h2>
            <p>${card.description}</p>
            <p id="tech">Tech:<br>${card.tech}</p>
            <p id="det"> click to see details </p>
        `;
        cardContainer.appendChild(cardElement);
    });
}

renderCards(cardsData);