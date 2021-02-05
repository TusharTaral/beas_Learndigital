
     var nav_bar = window.pageYOffset;
    window.onscroll = function() {
    var hide_nav_bar = window.pageYOffset;
    if (nav_bar > hide_nav_bar) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-57px";
    }
    nav_bar = hide_nav_bar;
    }
        