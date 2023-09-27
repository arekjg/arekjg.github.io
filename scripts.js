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
    })

    load_content(currentState, false);
})

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
    })
}

function animate_menu() {
    const menuWrapper = this.document.getElementById("dropdown-menu");
    let delay = 700;
    if (menuWrapper.style.visibility === "visible") {
        anime({
            targets: '#dropdown-menu',
            opacity: [1,0],
            easing: "easeOutQuad",
            duration: delay
        })
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
        })
    }
}

// Animate content
function animate_content() {
    anime({
        targets: '#main-content',
        opacity: [0,1],
        translateY: [-60,0],
        easing: "easeOutQuad",
        duration: 1000,
        delay: 200
    })
}


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

    const expandedCard = document.getElementById("expanded-card");
    if (expandedCard.style.visibility === "visible") {
        close_expand();
    }
}



// experience
if (typeof expData === 'undefined'){
    var expData = [
        `<p>
        <span class="period">06/2017 - 04/2023</span>
        <br>
        Before my first programming job I have worked for 4 years as a Process Engineer in production company <span class="link"><a href="https://www.tlc.eu/" target="_blank">TLC</a></span>. My responsibilites included among others:
        <ul>
            <li>operating Intelligent Production Organizing system</li>
            <li>preparation and verification of production schemas</li>
            <li>production planning and improving production processes</li>
        </ul>
        This is where I started using my new coding skills to automate some daily tasks. Some of my tools reduced number of mistakes and significantly shortened task execution times.
        </p>
        <p>
        Before that I have worked as a CAD Draftsman in <span class="link"><a href="https://www.adservco.pl/" target="_blank">Adservco</a></span> where I was resposible for creating executive technical documentation of wooden interion designs for US clients.
        </p>
        <p>
        I've also work at my alma mater - <span class="link"><a href="https://www.agh.edu.pl/" target="_blank">AGH in Cracow</a></span>, where I participated in R&D projects for <span class="link"><a href="https://www.aptiv.com/" target="_blank">Aptiv</a></span> company.
        </p>`,

        `<p>
        <span class="job-title">C# Developer @ <span class="link"><a href="https://www.netcom365.pl/" target="_blank">NetCom</a></span></span>
        <br>
        <span class="period">05/2023 - present</span>
        <br>
        <ul>
            <li>developing extensions to existing ERP system</li>
            <li>developing new WinForms applications</li>
            <li>writing SQL functions and stored procedures</li>
        </ul>
        Most used tech: C#/.NET, MSSQL/TSQL, WinForms, DevExpress
        </p>`
    ];
}

function load_exp(id) {
    $(".exp-content").html(expData[id]);
}