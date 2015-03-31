$(document).ready(function(){
    var pageHeight = $(window).height();
    var pageWidth = $(window).width();
    // alert(pageWidth);
    
    var sectionWidth = pageWidth / 4;
    var imageWidth = pageWidth / 4.5;
    var imageHeight = pageHeight / 2.7;
    $('img').attr('width', imageWidth);
    $('img').attr('height', imageHeight);
    
});
