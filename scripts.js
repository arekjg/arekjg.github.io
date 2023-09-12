$(window).on("load", load_home);

// Animated letters in left side panel
function animate_side() {
    var textWrapper = document.querySelector("#sideContent");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<div class='letter'>$&</div>");

    anime({
        targets: '#sideContent .letter',
        opacity: [0,1],
        translateX: [40,0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutBack",
        duration: 1000,
        delay: (el, i) => 150 + 50 * i
    });
};


// Load "home" content
function load_home() {
    $("#sideContent").html(`welcome`);
    animate_side();
    
    // $("#mainContent").html(`
    //     Hi! I'm Arek!
    //     <br>
    //     Some text.
    // `);    
    $("#mainContent").load("./home.html");
};

// Load "about" content
function load_about() {
    $("#sideContent").html(`about me`);
    animate_side();

    $("#mainContent").html(`
        Something about me...
    `);
};

// Load "projects" content
function load_projects() {
    $("#sideContent").html(`projects`);
    animate_side();

    $("#mainContent").html(`
        Some things I've built:
        <ul>
            <li>PDF-Describer</li>
            <li>TechCreator</li>
            <li>Battleship</li>
        </ul>
    `);
};

// Load "experience" content
function load_experience() {    
    $("#sideContent").html(`experience`);
    animate_side();

    $("#mainContent").html(`
        Pre-development jobs... (something about the past)<br>
        I work as a Junior C# developer.
    `);
};

// Load "contact" content
function load_contact() {    
    $("#sideContent").html(`contact`);
    animate_side();

    $("#mainContent").html(`
        Contact me. :)
    `);
};