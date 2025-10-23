
function outputLoad(){
    console.log('JAVASCRIPT GOOD LOAD');
}

window.addEventListener("resize", function(){
    if (document.documentElement.clientWidth > 639){
        forceCloseSearchMenu();
        if (location.pathname.indexOf("/vault") > -1){
           if (document.getElementById("vault-view-list").checked == false){
            vaultGalleryViewSelect();
            } 
        }
    } else {
        if (location.pathname.indexOf("/vault") > -1){
            vaultGalleryViewSelect();
        }
    }
});

function dis1(){
    window.location.href = "https://discord.gg/syS95dFw6Z";
    console.log('ERR: DISCORD REDIRECT FAILED');
}

function copyPostLinkID(postRef) {
    document.getElementById("URLCopyVal").value = "https://" + window.location.host + "#" + postRef;
    let copyText = document.getElementById("URLCopyVal");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function copyVaultLinkID(vaultRef) {
    document.getElementById("URLCopyVal").value = "https://" + window.location.host + "/vault#" + vaultRef;
    let copyText = document.getElementById("URLCopyVal");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}


function openFilterMenu(){
    let checkBox = document.getElementById("hide-filter-menu-tbx-id");
    let filterMenuCont = document.getElementById("filter-tags-container");

    if (checkBox.checked == false){
        checkBox.checked = true;
        filterMenuCont.style.visibility = "visible";
        filterMenuCont.style.opacity = "100%";
    } else if (checkBox.checked == true) {
        checkBox.checked = false;
        filterMenuCont.style.visibility = "hidden";
        filterMenuCont.style.opacity = "0%";
    }
}

function forceCloseFilterMenu(){
    document.getElementById("hide-filter-menu-tbx-id").checked = false;
    document.getElementById("filter-tags-container").style.visibility = "hidden";
    document.getElementById("filter-tags-container").style.opacity = "0%";
}

function openSearchMenu(){
    let checkBox = document.getElementById("hide-search-bar-tbx");
    let searchMenu = document.getElementById("ops-searchbar-cont");

    if (document.documentElement.clientWidth > 639){
        if (checkBox.checked == false){
            checkBox.checked = true;
            searchMenu.style.visibility = "visible";
            searchMenu.style.bottom = "-120px";
            searchMenu.style.opacity = "100%";
            document.getElementById("ops-big-container-id").style.marginBottom = "75px";
    
        } else if (checkBox.checked == true) {
            checkBox.checked = false;
            searchMenu.style.visibility = "hidden";
            searchMenu.style.bottom = "-50px";
            searchMenu.style.opacity = "0%";
            document.getElementById("ops-big-container-id").style.marginBottom = "0px";
        }
    } else {
        if (checkBox.checked == false){
            checkBox.checked = true;
            searchMenu.style.visibility = "visible";
            searchMenu.style.bottom = "-170px";
            searchMenu.style.opacity = "100%";
            document.getElementById("ops-big-container-id").style.marginBottom = "75px";
    
        } else if (checkBox.checked == true) {
            checkBox.checked = false;
            searchMenu.style.visibility = "hidden";
            searchMenu.style.bottom = "-100px";
            searchMenu.style.opacity = "0%";
            document.getElementById("ops-big-container-id").style.marginBottom = "0px";
        }
    } 
}

function forceCloseSearchMenu(){
    let checkBox = document.getElementById("hide-search-bar-tbx");
    let searchMenu = document.getElementById("ops-searchbar-cont");

    if (document.documentElement.clientWidth > 639){
        if (checkBox.checked == true) {
            checkBox.checked = false;
            searchMenu.style.visibility = "hidden";
            searchMenu.style.bottom = "-50px";
            searchMenu.style.opacity = "0%";
            document.getElementById("ops-big-container-id").style.marginBottom = "0px";
        }
    } else {
        if (checkBox.checked == true) {
            checkBox.checked = false;
            searchMenu.style.visibility = "hidden";
            searchMenu.style.bottom = "-100px";
            searchMenu.style.opacity = "0%";
            document.getElementById("ops-big-container-id").style.marginBottom = "0px";
        }
    }

}

function openSearchMenuTop(){
    let checkBox = document.getElementById("hide-search-bar-tbx");
    let searchMenu = document.getElementById("ops-searchbar-cont");

    if (document.documentElement.clientWidth > 639){
        if (checkBox.checked == false){
            checkBox.checked = true;
            searchMenu.style.visibility = "visible";
            searchMenu.style.bottom = "-120px";
            searchMenu.style.opacity = "100%";
            document.getElementById("ops-big-container-id").style.marginBottom = "75px";
        }
    } else {
        if (checkBox.checked == false){
            checkBox.checked = true;
            searchMenu.style.visibility = "visible";
            searchMenu.style.bottom = "-170px";
            searchMenu.style.opacity = "100%";
            document.getElementById("ops-big-container-id").style.marginBottom = "75px";
        }
    }
}

function openTopMenu(){
    let checkBox = document.getElementById("hide-top-menu-tbx");
    let topMenuCont = document.getElementById("hidden-top-menu-banner");

    if (checkBox.checked == false){
        checkBox.checked = true;
        topMenuCont.style.visibility = "visible";
        topMenuCont.style.top = "2.45rem";
    } else if (checkBox.checked == true) {
        checkBox.checked = false;
        topMenuCont.style.visibility = "hidden";
        topMenuCont.style.top = "-10rem";
    }
}

function clearSearchBar(){
    let searchBar = document.getElementById("ops-searchbar-id");
    let filSearchVal = searchBar.value.toUpperCase();
    if (filSearchVal == ""){
    } else {
        searchBar.value = ""; 
        //console.log("DEBUG: Searchbar Cleared");
    }
    searchSelection();
}

function searchSelection() {
    let searchBar = document.getElementById("ops-searchbar-id");
    let filSearchVal = searchBar.value.toUpperCase();
    let postList = document.getElementsByClassName("ops-post-container");
    let slice, sliceText, txtValue;
    //console.log('SEARCH CALLED FOR VAL: ' + filSearchVal);

    if (filSearchVal == ""){
        let s = document.getElementById("ops-search-icon-id");
        let c = document.getElementById("ops-search-clear-icon-id");
        s.style.display = "flex";
        c.style.display = "none";
    } else {
        let s = document.getElementById("ops-search-icon-id");
        let c = document.getElementById("ops-search-clear-icon-id");
        s.style.display = "none";
        c.style.display = "flex";
    }

    for (i = 0; i < postList.length; i++) {
        slice = postList[i].getElementsByClassName("ops-post-title-text")[0];
        sliceText = postList[i].getElementsByClassName("ops-post-content-text")[0];
        txtValue = slice.textContent + sliceText.textContent;
        if (txtValue.toUpperCase().indexOf(filSearchVal) > -1) {
            postList[i].classList.add("tag-selected");
        } else {
            postList[i].classList.remove("tag-selected");
        }
    }
    setTickboxesOff();
    setFilterMarker('OFF');
    forceCloseFilterMenu();
    updateTagState();
}

filterSelection('NONE');
function filterSelection(filterInput) {
    let x = document.getElementsByClassName("ops-post-container");
    document.getElementById("ops-searchbar-id").value = "";
    let s = document.getElementById("ops-search-icon-id");
    let c = document.getElementById("ops-search-clear-icon-id");
    s.style.display = "flex";
    c.style.display = "none";

    //console.log('FILTER CALLED');

    if (filterInput == "NONE") {
        for (i = 0; i < x.length; i++) {
            AddClass(x[i], "tag-selected");
        }
        setFilterMarker('OFF');
        //console.log('FILTER EXIT_1: LOAD CASE');
        return;
    } else {
        let checkBox = document.getElementsByClassName("hidden-filter-tbx");
        let checkIsFilter = false;
        for (j = 0; j < checkBox.length; j++) {
            if ((checkBox[j].checked == true) && (checkIsFilter == false)){
                checkIsFilter = true;
            }
        }
        if (checkIsFilter == false) { 
            for (i = 0; i < x.length; i++) {
            AddClass(x[i], "tag-selected");
            }
            //console.log('FILTER EXIT_2: NO FILTER');
            updateTagState()
            setFilterMarker('OFF');
            return;
        }
    }

    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "tag-selected");
    }
    for (i = 0; i < x.length; i++) {
        let alreadyAdded = false;
        if ((document.getElementById("TAG-infantry-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-infantry') > -1) {
                AddClass(x[i], "tag-selected"); 
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-rockets-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-rockets') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-artillery-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-artillery') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-vehicles-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-vehicles') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-tanks-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-tanks') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-naval-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-naval') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-qrf-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-qrf') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-parmesan-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-parmesan') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-memerey-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-memerey') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-highlight-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-highlight') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
        if ((document.getElementById("TAG-cheez-tbx").checked == true) && (alreadyAdded == false)) {
            if (x[i].className.indexOf('TAG-cheez') > -1) {
                AddClass(x[i], "tag-selected");
                alreadyAdded = true;
            }
        }
    }
    setFilterMarker('ON');
    updateTagState();
    //console.log('COMPLTD TAG ACTIVE, FILTER DONE');
}

function setFilterMarker(state){
    if (state == "ON") {
        document.getElementById("filter-icon-btn").style.backgroundColor = "#df0000";
    } else if (state == "OFF") {
        document.getElementById("filter-icon-btn").style.backgroundColor = "#ce000000";
    }
}

function directUpdateTags(givenTagType, tickBoxType){
    let tagType = document.getElementsByClassName(givenTagType);
    let checkBox = document.getElementById(tickBoxType);

    if (checkBox.checked == true){
        for (i = 0; i < tagType.length; i++) {
            AddClass(tagType[i], "post-TAG-active");
        }
    } else if (checkBox.checked == false) {
        for (i = 0; i < tagType.length; i++) {
            RemoveClass(tagType[i], "post-TAG-active");
        }
    }
}

function updateTagTickbox(givenTagType, tickBoxType){
    let tagType = document.getElementsByClassName(givenTagType);
    let checkBox = document.getElementById(tickBoxType);

    if (checkBox.checked == true){
        checkBox.checked = false;
        for (i = 0; i < tagType.length; i++) {
            RemoveClass(tagType[i], "post-TAG-active");
        }
    } else if (checkBox.checked == false) {
        checkBox.checked = true;
        for (i = 0; i < tagType.length; i++) {
            AddClass(tagType[i], "post-TAG-active");
        }
    }
    filterSelection('innerFilterCall');
}

function updateTagState(){
    directUpdateTags('post-TAG-infantry', 'TAG-infantry-tbx');
    directUpdateTags('post-TAG-rockets', 'TAG-rockets-tbx');
    directUpdateTags('post-TAG-artillery', 'TAG-artillery-tbx');
    directUpdateTags('post-TAG-vehicles', 'TAG-vehicles-tbx');
    directUpdateTags('post-TAG-tanks', 'TAG-tanks-tbx');
    directUpdateTags('post-TAG-naval', 'TAG-naval-tbx');
    directUpdateTags('post-TAG-qrf', 'TAG-qrf-tbx');
    directUpdateTags('post-TAG-parmesan', 'TAG-parmesan-tbx');
    directUpdateTags('post-TAG-memerey', 'TAG-memerey-tbx');
    directUpdateTags('post-TAG-highlight', 'TAG-highlight-tbx');
    directUpdateTags('post-TAG-cheez', 'TAG-cheez-tbx');
}

function setTickboxesOff(){
    document.getElementById("TAG-infantry-tbx").checked = false;
    document.getElementById("TAG-rockets-tbx").checked = false;
    document.getElementById("TAG-artillery-tbx").checked = false;
    document.getElementById("TAG-vehicles-tbx").checked = false;
    document.getElementById("TAG-tanks-tbx").checked = false;
    document.getElementById("TAG-naval-tbx").checked = false;
    document.getElementById("TAG-qrf-tbx").checked = false;
    document.getElementById("TAG-parmesan-tbx").checked = false;
    document.getElementById("TAG-memerey-tbx").checked = false;
    document.getElementById("TAG-highlight-tbx").checked = false;
    document.getElementById("TAG-cheez-tbx").checked = false;
}

function AddClass(element, name) {
    element.classList.add(name);
}

function RemoveClass(element, name) {
    element.classList.remove(name);
}


function vaultGalleryViewSelect(){
    document.getElementById("vault-view-list").checked = false;
    if (document.documentElement.clientWidth > 639){

        let a = document.getElementsByClassName("vault-grid-section");
        let c = document.getElementsByClassName("vault-section-back");
        for (i = 0; i < a.length; i++) {
            a[i].style.width = "49%";
        }
        for (i = 0; i < c.length; i++) {
            c[i].style.gridTemplateColumns = "auto";
            c[i].style.gridTemplateRows = "auto auto";
            c[i].style.width = "auto";
            c[i].style.gap = "0.7rem";
        }

    } else {

        let a = document.getElementsByClassName("vault-grid-section");
        let c = document.getElementsByClassName("vault-section-back");
        for (i = 0; i < a.length; i++) {
            a[i].style.width = "100%";
        }
        for (i = 0; i < c.length; i++) {
            c[i].style.gridTemplateColumns = "auto";
            c[i].style.gridTemplateRows = "auto auto";
            c[i].style.width = "auto";
            c[i].style.gap = "0.7rem";
        }
    }
}

function vaultListViewSelect(){
    document.getElementById("vault-view-list").checked = true;
    if (document.documentElement.clientWidth > 639){

        let b = document.getElementsByClassName("vault-grid-section");
        let c = document.getElementsByClassName("vault-section-back");
        for (i = 0; i < b.length; i++) {
            b[i].style.width = "100%";
        }
        for (i = 0; i < c.length; i++) {
            c[i].style.gridTemplateColumns = "35% auto";
            c[i].style.gridTemplateRows = "auto";
            c[i].style.width = "95%";
            c[i].style.gap = "1.25rem";
        }
        
    } else {
        vaultGalleryViewSelect();
    }
}



outputLoad();