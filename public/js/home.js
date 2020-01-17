"use strict";
var toolsButtons = $('#toolsButtons').find('li'),
    toolsContents = $('#toolsContents').find('li'),
    PreloadImages = {},
    SliderBigImageObj = $("#slider_big_image"),
    slideImageWrapper = $('#slideImage');
toolsButtons.each(function(i) {
    PreloadImages[this.id] = new Image();
    PreloadImages[this.id].src = $(this).data("image");
});

function showTools(index) {
    var imgSrc = SliderBigImageObj.attr('src');
    if (typeof(PreloadImages[toolsButtons.eq(index).attr('id')].src) != 'undefined' && PreloadImages[toolsButtons.eq(index).attr('id')].src != null) {
        var img = '<img src="' + imgSrc + '" width="787" height="528" alt="Ahrefs" style="z-index: 9;" id="slider_image_fade">';
        slideImageWrapper.prepend(img);
        $('#slider_image_fade').stop().fadeOut(800, function() {
            $('#slider_image_fade').remove();
        });
        SliderBigImageObj.attr("src", PreloadImages[toolsButtons.eq(index).attr('id')].src);
    }
    toolsButtons.removeClass('active');
    toolsButtons.eq(index).addClass('active');
    toolsContents.removeClass('active');
    toolsContents.eq(index).addClass('active');
    return false;
}
toolsButtons.click(function(e) {
    e.preventDefault();
    var index = $(this).index();
    showTools(index);
});
$.each(toolsContents.find('img'), function() {
    if ($(this).attr('data-image')) $(this).attr('src', $(this).attr('data-image'));
});
var featuresButtons = $('#featuresButtons').find('li'),
    featuresContents = $('#featuresContents').find('li'),
    featuresPreloadImages = {},
    featuresSliderBigImageObj = $("#features_slider_big_image"),
    featuresslideImageWrapper = $('#features_slideImage');
featuresButtons.each(function(i) {
    featuresPreloadImages[this.id] = new Image();
    featuresPreloadImages[this.id].src = $(this).data("image");
});

function showFeatures(index) {
    var imgSrc = featuresSliderBigImageObj.attr('src');
    if (typeof(featuresPreloadImages[featuresButtons.eq(index).attr('id')].src) != 'undefined' && featuresPreloadImages[featuresButtons.eq(index).attr('id')].src != null) {
        var img = '<img src="' + imgSrc + '" width="787" height="528" alt="Ahrefs" style="z-index: 9;" id="features_slider_image_fade">';
        featuresslideImageWrapper.prepend(img);
        $('#features_slider_image_fade').stop().fadeOut(800, function() {
            $('#features_features_slider_image_fade').remove();
        });
        featuresSliderBigImageObj.attr("src", featuresPreloadImages[featuresButtons.eq(index).attr('id')].src);
    }
    featuresButtons.removeClass('active');
    featuresButtons.eq(index).addClass('active');
    featuresContents.removeClass('active');
    featuresContents.eq(index).addClass('active');
    return false;
}
featuresButtons.click(function(e) {
    e.preventDefault();
    var index = $(this).index();
    showFeatures(index);
});
$.each(featuresContents.find('img'), function() {
    if ($(this).attr('data-image')) $(this).attr('src', $(this).attr('data-image'));
});
$('.count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        },
        complete: function() {
            $('.home__datas__item--cpu').find('.count').text(parseInt($('.home__datas__item--cpu').find('.count').text()).toLocaleString());
        }
    });
});
$('.a-dropdown').click(function() {
    var self = $(this).find('p.current');
    var next = $(this).find('p.current').next();
    if (next.css('display') == "none") {
        next.css('display', 'block');
    } else {
        next.css('display', 'none');
    }
});

function draw() {
    for (var i = 0; i < 40; i++) {
        var randomPX = Math.floor((Math.random() * 1800) + 1);
        var randomPY = Math.floor((Math.random() * 1000) + 1);
        var randomSize = Math.floor((Math.random() * 20) + 5);
        ctx.fillStyle = "#0f4c7b";
        ctx.fillRect(randomPX, randomPY, randomSize, randomSize);
    }
}
if ($('#dataCanvas').length > 0) {
    var c = document.getElementById('dataCanvas');
    var ctx = c.getContext('2d');
    draw();
}
if ($('[data-toggle="tooltip"]').length > 0) {
    $('[data-toggle="tooltip"]').tooltip({
        html: true
    });
}
if (typeof Tipped != "undefined") {
    Tipped.remove($('.ahrefs-icon-info'));
    $('.ahrefs-icon-info').each(function() {
        Tipped.create($(this), $("#" + $(this).data('tip')).html(), {
            position: $(this).data('position'),
            size: 'medium',
            maxWidth: 247
        });
    });
}

function openTestModal(_videoId) {
    $('#videoModal').modal({
        keyboard: true,
        backdrop: true
    });
    $('.js-lazyYT').attr('data-youtube-id', _videoId);
}
$('#videoModal').on('shown.bs.modal', function(e) {
    $('.js-lazyYT').lazyYT();
    setTimeout(function() {
        $('.lazyYT-image-loaded').trigger('click');
    });
}).on('hide.bs.modal', function(e) {
    $('#videoModal').find('.modal-body').html('<div class="js-lazyYT embed-responsive" data-ratio="16:9"></div>');
});
if ($('.page-home').length > 0) {
    var trigger = $('.video-modal');
    trigger.click(function(e) {
        openTestModal($(this).attr('data-video'));
    });
}
var moddal_close = $('#modalClose'),
    modals = $('.modal'),
    signInModal = $('#signInModal'),
    toggleLoginIcon = $('.navbar-toggler--loginicon');
moddal_close.click(function() {
    modals.modal('hide');
});
$('.navbar-toggler').click(function() {
    modals.modal('hide');
    if ($(this).data('target') == "#topnavMenu") {
        signInModal.on('hidden.bs.modal', function(e) {
            toggleLoginIcon.removeClass('hover');
        });
    } else {
        signInModal.on('hidden.bs.modal', function(e) {
            moddal_close.removeClass('hover');
            toggleLoginIcon.addClass('hover');
            removeAllHover();
        });
    }
});

function removeAllHover() {
    $('body').click(function() {
        moddal_close.removeClass('hover');
        toggleLoginIcon.removeClass('hover');
    });
}
signInModal.on('shown.bs.modal', function(e) {
    moddal_close.addClass('hover');
    toggleLoginIcon.removeClass('hover');
});
toggleLoginIcon.click(function() {
    $('#topnavMenu').collapse('hide');
});

function changeToolsHeightForRU() {
    if ($('.ahrefs__tools-descriptions')) {
        $('.ahrefs__tools-descriptions').addClass('ru');
    }
}