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

    // window.addEventListener("resize", function() {
    //     if (window.matchMedia("(min-width: 551px)").matches) {
    //         if (document.getElementById("dot-menu").checked === true) {
    //             document.getElementById("dot-menu").checked = false;
    //         }
    //         console.log(`checked ${document.getElementById("dot-menu").checked}`);
    //     }
    // }, true);
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


function load_content(contentName, flag) {
    switch(contentName) {
        case "welcome":
            $("#side-content").html(contentName);
            $("#main-content").load(`Components/${contentName}.html`);
            break;
        case "about":
            $("#side-content").html(contentName);
            $("#main-content").load(`Components/${contentName}.html`);
            break;
        case "projects":
            $("#side-content").html(contentName);
            $("#main-content").load(`Components/${contentName}.html`);
            break;
        case "experience":
            $("#side-content").html(contentName);
            $("#main-content").load(`Components/${contentName}.html`);
            break;
        case "welcome":
            $("#side-content").html(contentName);
            $("#main-content").load(`Components/${contentName}.html`);
            break;
        // default:
        //     break;
    }
    animate_side();
    currentState = contentName;

    if (flag) {
        const menuCheck = document.getElementById("dot-menu");
        menuCheck.click();
    }
};