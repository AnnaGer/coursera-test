(function (window) {
  var names = ["Yaakov", "Anna", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var x = "Hello";
  var firstLetter  = 0;

  for (var i = 0; i < names.length; i++) {
    firstLetter  = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})(window);

