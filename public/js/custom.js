
$(window).load(function () {
    try {
    "use strict";
    $("#preloader").delay(400).fadeOut("slow"), $("#preloader .inner").fadeOut();
    var e = new WOW({
    offset: 100,
    mobile: !1
    });
    e.init(), $(window).scroll(function () {
    $(window).scrollTop() > $("nav").height() ? $("nav.navbar-slide").addClass("show-menu") : ($("nav.navbar-slide").removeClass("show-menu"), $(".navbar-slide .navMenuCollapse").collapse({
    toggle: !1
    }), $(".navbar-slide .navMenuCollapse").collapse("hide"), $(".navbar-slide .navbar-toggle").addClass("collapsed"))
    })
    }catch (err) { }
    }), $(document).ready(function () {
    try {
    "use strict";
    $("#minimal-intro").css("min-height", $(window).height()), $(window).resize(function () {
    $("#minimal-intro").css("min-height", $(window).height())
    }), $("#screenshots-slider").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
    enabled: !0
    }
    }), $("#subscribe_form").submit(function () {
    if ($(".error").hide(), $(".error").fadeIn(), $(this).valid()) {
    $("#subscribe_submit").button("loading");
    var e = $(this).attr("action");
    $.ajax({
    url: e,
    type: "POST",
    data: {
    newsletter_email: $("#subscribe_email").val()
    },
    success: function (e) {
    $("#subscribe_submit").button("reset"), $("#modalMessage .modal-title").html('<i class="icon icon-envelope-open"></i>' + e), $("#modalMessage").modal("show")
    },
    error: function () {
    $("#subscribe_submit").button("reset"), $("#modalMessage .modal-title").html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!'), $("#modalMessage").modal("show")
    }
    })
    }
    return !1
    }), $("#contact_form").submit(function () {
    if ($(this).valid()) {
    $("#contact_submit").button("loading");
    var e = $(this).attr("action");
    $.ajax({
    url: e,
    type: "POST",
    data: {
    contactname: $("#contact_name").val(),
    contactemail: $("#contact_email").val(),
    contactmessage: $("#contact_message").val()
    },
    success: function () {
    $("#contact_submit").button("reset"), $("#modalContact").modal("hide"), $("#modalMessage .modal-title").html('<i class="icon icon-envelope-open"></i>Well done!<br>Your message has been successfully sent!'), $("#modalMessage").modal("show")
    },
    error: function () {
    $("#contact_submit").button("reset"), $("#modalContact").modal("hide"), $("#modalMessage .modal-title").html('<i class="icon icon-ban"></i>Oops!<br>Something went wrong!'), $("#modalMessage").modal("show")
    }
    })
    } else $("#contact_submit").button("reset");
    return !1
    })
    }catch (err) { }
    });