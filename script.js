
$(document).ready(function(){
  var page = '1';


function getData() {
  $.getJSON('https://api.unsplash.com/users/baciutudor/photos?per_page=10&order_by=latest&page='+page+'&client_id=09858877bb2538e70eac2d6d50a1fee25311837a5591af779de312869ecda475', function(data) {

    console.log(data);


    var imageList = data;

    $.each(imageList, function(i, val) {

      var image = val;
      var imageURL = val.urls.regular;
      var imageDescription = val.description;
      var imgId = val.id;
      var userLocation = val.user.location;
      var userImageLikes = val.likes;
      var viewUnsplash = val.links.html;

      $('.grid-container').append(
        '<div class="image" ><a data-magnify="gallery" href="'+imageURL+'"  ><img id="myModal" src="'+imageURL+'" /></a><div><p> '+imageDescription+'</p><a href=""><span class="iconify" data-icon="ant-design:heart-outlined" data-inline="false"></span><br>'+ userImageLikes + ' </a><br>  <p> <span class="iconify" data-icon="ic:outline-location-on" data-inline="false"></span>'+ userLocation +'</p> <a href=' + viewUnsplash +' target=_blank> view on unsplash</a> </div></div>'
      );  
    });  
  });
}





getData();

$('div.load-more-button > button').on('click', function() {
  page ++;
  getData();
});


});

