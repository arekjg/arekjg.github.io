var currentState = "welcome";

$(document).ready(function() {
    const menuCheck = document.getElementById("dot-menu");
    menuCheck.addEventListener("click", () => {
        if (menuCheck.checked) {
            document.getElementById("sideColumn").style.visibility = "hidden";
            document.getElementsByTagName("footer")[0].style.visibility = "hidden";
            animate_menu();
        } else {
            document.getElementById("sideColumn").style.visibility = "visible";
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
        delay: (el, i) => 100 + 50 * i
    });
};


function animate_menu() {
    const menuWrapper = this.document.getElementById("popUpMenu");
    let delay = 700;
    if (menuWrapper.style.visibility === "visible") {
        anime({
            targets: '#popUpMenu',
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
            targets: '#popUpMenu',
            opacity: [0,1],
            easing: "easeOutQuad",
            duration: delay
        });
    }
};


function load_content(contentName, flag) {
    switch(contentName) {
        case "welcome":
            $("#sideContent").html(contentName);
            $("#mainContent").load(`./${contentName}.html`);
            break;
        case "about":
            $("#sideContent").html(contentName);
            $("#mainContent").load(`./${contentName}.html`);
            break;
        case "projects":
            $("#sideContent").html(contentName);
            $("#mainContent").load(`./${contentName}.html`);
            break;
        case "experience":
            $("#sideContent").html(contentName);
            $("#mainContent").load(`./${contentName}.html`);
            break;
        case "welcome":
            $("#sideContent").html(contentName);
            $("#mainContent").load(`./${contentName}.html`);
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