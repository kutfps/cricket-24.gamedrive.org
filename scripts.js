$(document).ready(function(){
    $('.slick-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000, // Adjust the speed of the slideshow
        prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
        nextArrow: '<button type="button" class="slick-next">&#10095;</button>'
    });
});


function toggleAndScrollToDownloadArea() {
    toggleDownloadArea();
    scrollToDownloadArea();
}

function toggleDownloadArea() {
    var downloadArea = document.getElementById('download-area');
    downloadArea.style.display = (downloadArea.style.display === 'block') ? 'none' : 'block';
}

function scrollToDownloadArea() {
    var downloadArea = document.getElementById('download-area');
    downloadArea.scrollIntoView({ behavior: 'smooth' });
}


function togglePopup() {
    var popup = document.getElementById('popup');
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
    } else {
        popup.style.display = 'block';
    }
}
