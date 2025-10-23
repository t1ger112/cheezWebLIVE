
window.onload = function() {

    document.getElementById("returnCBTripwire").addEventListener("click", ret1);
    document.getElementById("disBtn").addEventListener("click", dis1);
    document.getElementById("navMore").addEventListener("click", operateMenu);
    document.getElementById("close-icon-tripwire").addEventListener("click", forceCloseMenu);
    window.addEventListener("resize", forceCloseMenu);
    
    if (location.pathname.indexOf("/news") > -1){
        document.getElementById("showContL").addEventListener("click", runShowContL);
        document.getElementById("showContR").addEventListener("click", runShowContR);
        document.getElementById("newsboard-papers-view-more-btn-tripwire").addEventListener("click", pap1);
        document.getElementById("newsboard-videos-view-more-btn-tripwire").addEventListener("click", vid1);
        document.getElementById("newsboard-videos-more-news-btn-tripwire").addEventListener("click", news1);
    }
    if (location.pathname.indexOf("/news/papers") > -1){   
        //document.getElementById("").addEventListener("click", );
    }
    if (location.pathname.indexOf("/news/videos") > -1){   
        //document.getElementById("").addEventListener("click", );
        document.getElementById("newsboard-videos-more-news-btn-tripwire").addEventListener("click", news1);
    }
    if (location.pathname.indexOf("/news/collie") > -1){   
        //document.getElementById("").addEventListener("click", );
    }
    if (location.pathname.indexOf("/news/warden") > -1){   
        //document.getElementById("").addEventListener("click", );
    }
    console.log('JAVASCRIPT GOOD LOAD');
};


function AddClass(element, name) {
    element.classList.add(name);
}

function RemoveClass(element, name) {
    element.classList.remove(name);
}

function ret1(){
    window.location.href = "https://eatcheez.com/";
    console.log('ERR: CHEEZBOARD REDIRECT FAILED');
}

function dis1(){
    window.location.href = "https://discord.gg/syS95dFw6Z";
    console.log('ERR: DISCORD REDIRECT FAILED');
}

function pap1(){
    window.location.href = "https://eatcheez.com/news/papers";
    console.log('ERR: PAPERS REDIRECT FAILED');
}

function vid1(){
    window.location.href = "https://eatcheez.com/news/videos";
    console.log('ERR: VIDEOS REDIRECT FAILED');
}

function news1(){
    window.location.href = "https://eatcheez.com/news/shard-news";
    console.log('ERR: SHARD NEWS VIDS REDIRECT FAILED');
}

function runShowContL(){
    window.location.href = "https://www.youtube.com/watch?v=xThIZdFXL3U";
    console.log('ERR: runShowContL REDIRECT FAILED');
}

function runShowContR(){
    window.location.href = "https://eatcheez.com/news/shard-news";
    console.log('ERR: runShowContR REDIRECT FAILED');
}

function copyLinkID1(linkVal) {
    let a = "https://" + window.location.host + "#" + linkVal;
    a.select()
    navigator.clipboard.writeText(a.value);
}

function operateMenu(){
    let checkBox = document.getElementById("mobile-menu-status");
    let menuTriggerBTN = document.getElementById("mobile-menu-ident");
    let logo = document.getElementById("navbar-logo-image-ident");

    if (checkBox.checked == false){
        checkBox.checked = true;
        menuTriggerBTN.style.visibility = "visible";
        menuTriggerBTN.style.opacity = "100%";

        logo.style.top = "6.9rem";
        logo.style.left = "-5.55rem";
        logo.style.scale = "2.85";
        logo.style.rotate = "372deg";
        logo.style.pointerEvents = "none";
        

    } else if (checkBox.checked == true) {
        checkBox.checked = false;
        menuTriggerBTN.style.visibility = "hidden";
        menuTriggerBTN.style.opacity = "0%";

        logo.style.top = "0.2rem";
        logo.style.left = "-0.6rem";
        logo.style.scale = "1";
        logo.style.rotate = "357deg";
        logo.style.pointerEvents = "all";
    }
}

function forceCloseMenu(){
    let checkBox = document.getElementById("mobile-menu-status");
    if (checkBox.checked == true) {
        let menuTriggerBTN = document.getElementById("mobile-menu-ident");
        let logo = document.getElementById("navbar-logo-image-ident");

        checkBox.checked = false;
        menuTriggerBTN.style.visibility = "hidden";
        menuTriggerBTN.style.opacity = "0%";
        logo.style.top = "0.2rem";
        logo.style.left = "-0.6rem";
        logo.style.scale = "1";
        logo.style.rotate = "357deg";
        logo.style.pointerEvents = "all";
    }
}


