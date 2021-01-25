<?php

function magic8Ball($question){
  echo "What is your yes or no question?";
  $userQuestion = readline(">>  ");
  echo "I recieved the question: ".$userQuestion.".";

  $number = rand(0, 19);

  //echo $number;

  switch ($number) {
    case 0:
        echo "It is certain.\n";
        break;
    case 1:
        echo "It is decidedly so.\n";
        break;
    case 2:
        echo "Without a doubt.\n";
        break;
    case 3:
        echo "Without a doubt.\n";
        break;
    case 4:
        echo "Yes - definitely.\n";
        break;
    case 5:
        echo "You may rely on it.\n";
        break;
    case 6:
        echo "As I see it, yes.\n";
        break;
    case 7:
        echo "Most likely.\n";
        break;
    case 8:
        echo "Outlook good.\n";
        break;
    case 9:
        echo "Yes.\n";
        break;
    case 10:
        echo "Signs point to yes.\n";
        break;
    case 11:
        echo "Reply hazy, try again.\n";
        break;
    case 12:
        echo "Ask again later.\n";
        break;
    case 13:
        echo "Better not tell you now.\n";
        break;
    case 14:
        echo "Cannot predict now.\n";
        break;
    case 15:
        echo "Concentrate and ask again.\n";
        break;
    case 16:
        echo "Don't count on it.\n";
        break;
    case 17:
        echo "My reply is no.\n";
        break;
    case 18:
        echo "My sources say no.\n";
        break;
    case 19:
        echo "Outlook not so good.\n";
        break; 
}
}

magic8Ball("test");