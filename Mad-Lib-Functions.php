<?php

function generateStory($ingular_noun, $verb, $color, $distance_unit){
$story = "\nThe ".$ingular_noun." are lovely, ".$color.", and deep.\nBut I have promises to keep,\nAnd miles to go before I ".$verb.",\nAnd ".$distance_unit." to go before I sleep.\n";

  return $story;
};


echo generateStory("car", "die", "red", "cm");