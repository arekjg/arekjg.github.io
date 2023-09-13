var currentState = "welcome";

$(document).ready(function() {
    const menuCheck = document.getElementById("dot-menu");
    menuCheck.addEventListener("click", () => {
        if (menuCheck.checked) {
            document.getElementById("sideColumn").style.visibility = "hidden";
            document.getElementsByTagName("footer")[0].style.visibility = "hidden";
            load_menu();
        } else {
            document.getElementById("sideColumn").style.visibility = "visible";
            document.getElementsByTagName("footer")[0].style.visibility = "visible";
            load_content(currentState);
        }
    });

    load_content(currentState);
});


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
        delay: (el, i) => 100 + 50 * i
    });
};


// Load menu
function load_menu() {    
    $("#mainContent").load("./menu.html");
};


function load_content(contentName) {
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
};