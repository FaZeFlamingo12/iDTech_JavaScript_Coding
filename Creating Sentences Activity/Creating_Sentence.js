var Sentencer = require('sentencer');

Sentencer.make("This sentence has {{ a_noun }} and {{ an_adjective }} {{ noun }} in it.");
// returns something like "This sentence has a bat and a finless cinema in it."
Sentencer.configure({
    // the list of nouns to use. Sentencer provides its own if you don't have one!
    nounList: [],
  
    // the list of adjectives to use. Again, Sentencer comes with one!
    adjectiveList: [],
  
    // additional actions for the template engine to use.
    // you can also redefine the preset actions here if you need to.
    // See the "Add your own actions" section below.
    actions: {
      my_action: function(){
        return "something";
      }
    }
  });

  var noun = Sentencer.make("{{ noun }}")
// "actor", "knight", "orchid", "pizza", etc.
var nounWithArticle = Sentencer.make("{{ a_noun }}")
// "an actor", "a knight", "an orchid", "a pizza", etc.
var pluralNoun = Sentencer.make("{{ nouns }}")
// "actors", "knights", "orchids", "pizzas", etc.
var adjective = Sentencer.make("{{ adjective }}")
// "blending", "earthy", "rugged", "untamed", etc.
var adjective = Sentencer.make("{{ an_adjective }}")
// "a blending", "an earthy", "a rugged", "an untamed", etc.

Sentencer.configure({
    actions: {
      number: function() {
        return Math.floor( Math.random() * 10 ) + 1;
      }
    }
  });
  
  console.log( Sentencer.make("I can count to {{ number }}.")
  // "I can count to 5."

  Sentencer.configure({
    actions: {
      number: function(min, max) {
        return Math.floor( Math.random() * (max - min) ) + min;
      }
    }
  });
  
  console.log( Sentencer.make("I can count to {{ number(8, 10) }}.")
  // "I can count to 8."