//-----HOVERING_SIGLINGS-----

let elem1 = document.getElementById("sec1");

elem1.onmouseenter = function() {
    document.getElementById("dd1").classList.add("hovered");
};

elem1.onmouseleave = function() {
    document.getElementById("dd1").classList.remove("hovered");
};

let elem2 = document.getElementById("sec2");

elem2.onmouseenter = function() {
    document.getElementById("dd2").classList.add("hovered");
};

elem2.onmouseleave = function() {
    document.getElementById("dd2").classList.remove("hovered");
};

let elem3 = document.getElementById("sec3");

elem3.onmouseenter = function() {
    document.getElementById("show").classList.add("hovered");
};

elem3.onmouseleave = function() {
    document.getElementById("show").classList.remove("hovered");
};

//-----OPENING_SIDE_FOLDERS-----

let status1 = false;

function opener1() {
    if (status1) {
        document.getElementById("sec11").classList.remove("open");
        status1 = false;
        document.getElementById("dd11").classList.remove("activated");
        document.getElementById("up11").classList.remove("appear");
        document.getElementById("down11").classList.remove("disap");
    } else {
        document.getElementById("sec11").classList.add("open");
        status1 = true;
        document.getElementById("dd11").classList.add("activated");
        document.getElementById("up11").classList.add("appear");
        document.getElementById("down11").classList.add("disap");
    };
};

let status2 = false;

function opener2() {
    if (status2) {
        document.getElementById("sec21").classList.remove("open");
        status2 = false;
        document.getElementById("dd21").classList.remove("activated");
        document.getElementById("up21").classList.remove("appear");
        document.getElementById("down21").classList.remove("disap");
    } else {
        document.getElementById("sec21").classList.add("open");
        status2 = true;
        document.getElementById("dd21").classList.add("activated");
        document.getElementById("up21").classList.add("appear");
        document.getElementById("down21").classList.add("disap");
    };
};

let status3 = false;

function opener3() {
    if (status3) {
        document.getElementById("sec1").classList.remove("open2");
        status3 = false;
        document.getElementById("dd1").classList.remove("activated2");
        document.getElementById("up1").classList.remove("appear");
        document.getElementById("down1").classList.remove("disap");
    } else {
        document.getElementById("sec1").classList.add("open2");
        status3 = true;
        document.getElementById("dd1").classList.add("activated2");
        document.getElementById("up1").classList.add("appear");
        document.getElementById("down1").classList.add("disap");
    };
};

let status4 = false;

function opener4() {
    if (status4) {
        document.getElementById("sec2").classList.remove("open2");
        status4 = false;
        document.getElementById("dd2").classList.remove("activated2");
        document.getElementById("up2").classList.remove("appear");
        document.getElementById("down2").classList.remove("disap");
    } else {
        document.getElementById("sec2").classList.add("open2");
        status4 = true;
        document.getElementById("dd2").classList.add("activated2");
        document.getElementById("up2").classList.add("appear");
        document.getElementById("down2").classList.add("disap");
    };
};

//-----SHOW_MORE-----

let showStatus = false;

function showMore() {
    if (document.documentElement.clientWidth < 880) {
        if (showStatus) {
            document.getElementById("sec3").classList.remove("openShow");
            document.getElementById("sec3").classList.add("closeShow");
            showStatus = false;
            document.getElementById("show").classList.remove("activeShow");
            document.getElementById("main").classList.remove("covered");
            document.getElementById("closingArrow").classList.remove("arrAppear");
        } else {
            document.getElementById("sec3").classList.remove("closeShow");
            document.getElementById("sec3").classList.add("openShow");
            showStatus = true;
            document.getElementById("show").classList.add("activeShow");
            document.getElementById("main").classList.add("covered");
            document.getElementById("closingArrow").classList.add("arrAppear");
        };
    }
};

function falseIt() {
    if (showStatus) {
        document.getElementById("sec3").classList.remove("openShow");
        document.getElementById("sec3").classList.add("closeShow");
        showStatus = false;
        document.getElementById("show").classList.remove("activeShow");
        document.getElementById("main").classList.remove("covered");
        document.getElementById("closingArrow").classList.remove("arrAppear");
    };
};