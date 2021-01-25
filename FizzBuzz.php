<?php

$output = array();

for ($i = 1; $i <= 100; $i++) {
  if($i%3===0 && $i%5===0){
    array_push($output, "fizzbuzz");
  } elseif($i%3===0){
    array_push($output, "jizz");
  }elseif($i%5===0){
    array_push($output, "buzz");
  }else {
    array_push($output, $i);
    }
}

foreach ($output as $number) {
  if($number === "jizz"){
    continue;
    
  }elseif($number === "fizzbuzz"){
    break;
  }else{
echo $number."\n";
  }
}