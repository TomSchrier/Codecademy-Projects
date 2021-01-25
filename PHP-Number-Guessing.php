<?php

$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "This is a number guessing game. You can enter a number and see if it is too high, too low or correct.\n";

function guessNumber(){
global $play_count, $correct_guesses, $guess_high, $guess_low;

$play_count++;

$numberToGuess = rand(1, 10);

echo "\nNow it is time to guess. What is your number?\n";

$userGuess = intval(readline(">> "));

echo "\nRound: ".$play_count.".";
echo "\nYour guess was: ".$userGuess.".";
echo "\nThe random number was: ".$numberToGuess.".\n";

if($numberToGuess === $userGuess){
  $correct_guesses++;
} elseif($userGuess>$numberToGuess) {
  $guess_low++;
} elseif($userGuess<$numberToGuess){
  $guess_high++;
}

$percent_correct = $correct_guesses/$play_count * 100;
echo "percent correct: ".$percent_correct;

if ($guess_high > $guess_low){
    echo "When you guessed wrong, you tended to guess high";
} else if ($guess_high < $guess_low) {
    echo "When you guessed wrong, you tended to guess low";
}
};

guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();
guessNumber();