var currentState = "welcome";

$(document).ready(function() {
    const menuCheck = document.getElementById("dot-menu");
    menuCheck.addEventListener("click", () => {
        if (menuCheck.checked) {
            document.getElementById("side-column").style.visibility = "hidden";
            document.getElementsByTagName("footer")[0].style.visibility = "hidden";
            animate_menu();
        } else {
            document.getElementById("side-column").style.visibility = "visible";
            document.getElementsByTagName("footer")[0].style.visibility = "visible";
            animate_menu();
        }
    });

    load_content(currentState, false);
});

// Animate letters in left side panel
function animate_side() {
    var textWrapper = document.querySelector("#side-content");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<div class='letter'>$&</div>");

    anime({
        targets: '#side-content .letter',
        opacity: [0,1],
        translateX: [40,0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutBack",
        duration: 1000,
        delay: (el, i) => 100 + 50 * i
    });
};

function animate_menu() {
    const menuWrapper = this.document.getElementById("dropdown-menu");
    let delay = 700;
    if (menuWrapper.style.visibility === "visible") {
        anime({
            targets: '#dropdown-menu',
            opacity: [1,0],
            easing: "easeOutQuad",
            duration: delay
        });
        setTimeout(() => {
            menuWrapper.style.visibility = "hidden";
        }, delay);
    } else {
        menuWrapper.style.visibility = "visible";
        anime({
            targets: '#dropdown-menu',
            opacity: [0,1],
            easing: "easeOutQuad",
            duration: delay
        });
    }
};


// Animate content
function animate_content() {
    anime({
        targets: '#main-content',
        opacity: [0,1],
        translateY: [-60,0],
        easing: "easeOutQuad",
        duration: 1000,
        delay: 200
    });
};


function load_content(contentName, flag) {
    $("#side-content").html(contentName);
    $("#main-content").load(`Components/${contentName}.html`);
    var contentDiv = document.getElementById("main-content");
    contentDiv.className = "";
    contentDiv.classList.add(`${contentName}-container`);

    
    animate_side();
    animate_content();
    currentState = contentName;
    
    if (flag) {
        const menuCheck = document.getElementById("dot-menu");
        menuCheck.click();
    }
};



// experience
if (typeof expData === 'undefined'){
    var expData = [
        `<p>Gunpowder, also commonly known as black powder to distinguish it from modern smokeless powder, is the earliest known chemical explosive. It consists of a mixture of sulfur, carbon (in the form of charcoal), and potassium nitrate (saltpeter). The sulfur and carbon act as fuels while the saltpeter is an oxidizer.</p>`,
        `<p>A castle is a type of fortified structure built during the Middle Ages predominantly by the nobility or royalty and by military orders. Scholars usually consider a castle to be the private fortified residence of a lord or noble. This is distinct from a mansion, palace and villa, whose main purpose was exclusively for pleasance and are not primarily fortresses but may be fortified.</p>`
    ];
}

function load_exp(id) {
    $(".exp-content").html(expData[id]);
};