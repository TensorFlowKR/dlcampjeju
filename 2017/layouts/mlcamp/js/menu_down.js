
function m_btn_open() {
    var status = jQuery('.nav_gnb').css('display');
    if (status === 'none') {
        jQuery('.nav_gnb').css('display', 'block');
    } else {
        jQuery('.nav_gnb').css('display', 'none');
    }
}

jQuery(document).ready(function () {
    if (jQuery(window).width() < 1160) {
        jQuery(".nav_gnb").css("display", "none");
    }
    else {
        jQuery(".nav_gnb").css("display", "block");
    }
});
jQuery(window).resize(function () {
        if (jQuery(window).width() < 1160) {
        jQuery(".nav_gnb").css("display", "none");
    }
    else {
        jQuery(".nav_gnb").css("display", "block");
    }
});
