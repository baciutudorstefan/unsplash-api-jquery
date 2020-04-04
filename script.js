var APIKey = '09858877bb2538e70eac2d6d50a1fee25311837a5591af779de312869ecda475';
var page = '1';


function getData() {
  $.getJSON('https://api.unsplash.com/users/baciutudor/photos?per_page=10&page='+page+'&client_id=09858877bb2538e70eac2d6d50a1fee25311837a5591af779de312869ecda475', function(data) {

    console.log(data);


    var imageList = data;

    $.each(imageList, function(i, val) {

      var image = val;
      var imageURL = val.urls.regular;
      var imageDescription = val.description;
      var userName = val.user.name;
      var userLocation = val.user.location;
      var userImageLikes = val.likes;
      var userImageColor = val.color;
      var viewUnsplash = val.links.html;

      $('.grid-container').append(
        '<div class="image"><img src="'+ imageURL +'"><p> ' + imageDescription + '</p>'+ userLocation +'<p> </p> <a href=' + viewUnsplash +' target=_blank> view on unsplash</a></div>'
      );  
      
//       $("img").hover(function() {
//   $(".image").css("background-color", userImageColor )
// });
      
    });  
  });
}





getData();

$('div.load-more-button > button').on('click', function() {
  page ++;
  getData();
});