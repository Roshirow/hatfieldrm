// LIGHT GALLERY
$('#gallery-1').lightGallery({
    selector: 'a',
});

require(['./lightgallery.js'], function() {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function(){
        $("#lightgallery").lightGallery(); 
    });
});

var getStuff = 'https://api.thecatapi.com/v1/images/search';

var setStuff = {};

var doStuff = function(data){
  
 showStuff (data);
  
};

$.getJSON( getStuff, setStuff, doStuff);

var showStuff = function(data) {console.log(data[0].url);
                                
                                $('img').attr( 'src' , data[0].url  );
                                
       }