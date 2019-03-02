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
      randomContent = "I would like to be rewarded with Sushi</br> -Wei";
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
      randomContent = "All right, let's not panic. I'll make the money back by selling one of my livers. I can get by with one!</br> -Unknown";
      break;

    default:
      randomContent = "Its loading... I think... ";
  }
document.querySelector('.randomStuff').innerHTML = randomContent;
}
randomInfo();
