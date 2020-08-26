// LIGHT GALLERY
$('#gallery-1').lightGallery({
    selector: 'a',
});

require(['./lightgallery.js'], function() {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
        $("#lightgallery").lightGallery(); 
    });
});
