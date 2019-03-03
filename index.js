function randomInfo() {
  var randomNumber = Math.ceil(Math.random() * 10);
  var randomContent;
  switch (randomNumber) {
    case 1:
      randomContent = "Random Fact: Why the chicken crossed the road is actually a very morbid joke.</br> -Wei";
      break;
    case 2:
      randomContent = "Random Fact: Most Buggy Code can fix itself with enough Internal Screaming </br> - Unknown";
      break;
    case 3:
      randomContent = "Random Joke: Why did the programmer quit his job?</br> Because he didnt get arrays -The Internet";
      break;
    case 4:
      randomContent = "Random Fact: I prefer some coffee with my mug of cream <br> -Wei";
      break;
    case 5:
      randomContent = "I would like to be rewarded for hardwork with Sushi</br> -Wei";
      break;
    case 6:
      randomContent = "Always remember that true beauty comes from within - from within bottles, jars, compacts, and tubes.</br>-Peter's Almanac";
      break;
    case 7:
      randomContent = "I always wanted to be somebody, but now I realize I should have been more specific</br> -Lily Tomlin";
      break;
    case 8:
      randomContent = "If you can't see the bright side of life, polish the dull side.</br> -Unknown";
      break;
    case 9:
      randomContent = "All right, let's not panic. I'll make the money back by selling one of my livers. I can get by with one!.</br> -Homer Simpson";
      break;
    case 10:
      randomContent = "Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!</br> -Unknown";
      break;

    default:
      randomContent = "Its loading... I think... ";
  }

  document.querySelector('.randomStuff').innerHTML = randomContent;
}
//Fade In on onload
$(".fadeDiv").animate({
  opacity: 1
}, 3000, "swing");

//random stuff
randomInfo();

$(".header").prepend("<a class='toggler'><i class='far fa-plus-square'></i></a>")
$(".inner_sections").hide();
$(document).ready(function() {

  //Open and Close the sections
  $(".header").click(function(e) {
    var sectionText = "." + $(this).text().trim();
    $(sectionText).toggle(300);

    if ($(this).find('.fa-plus-square').length !== 0) {
      $(this).find(">:first-child").html("<i class='far fa-minus-square'></i>");
    } else {
      $(this).find(">:first-child").html("<i class='far fa-plus-square'></i>");
    }

  });

  //navbar links
  $(".nav-link").click(function(e) {
    var sectionText = "." + $(this).text().trim();
    var sectionHeader = sectionText + "_H";
    $(sectionText).show(300);
    if ($(sectionHeader).find('.fa-plus-square').length !== 0) {
      $(sectionHeader).find(">:first-child").html("<i class='far fa-minus-square'></i>");
    }
    if(sectionText==".Home")
    {
      document.body.scrollTop = 0;
    }
    else{
      var goToPosition = $(sectionText).offset().top - 100;
      $('html, body').animate({
    scrollTop: (goToPosition)},100);
    }

  });

});
