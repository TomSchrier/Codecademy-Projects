<?php
$initial = '555';

function convertOct($octString){
  $result = octdec($octString);

  return $result;
}

echo "del 1: ";
echo convertOct($initial);
$a = convertOct($initial);
echo "\n";


function convertDegreeToRadians($degree){
  $result= deg2rad($degree);
  return $result;
}

echo "del 2: ";
echo convertDegreeToRadians($a);
$b = convertDegreeToRadians($a);
echo "\n";

function getCosine($number){
   $result = cos($number);
   return $result;
}

echo "del 3: ";
echo getCosine($b);
$c = getCosine($b);
echo "\n";

function roundDecimal($number){
  $result = round($number,3);
  return $result;
}

echo "del 3: ";
echo roundDecimal($c);
$d = roundDecimal($c);
echo "\n";

function toLog($number){
  $result = log($number);
  return $result;
}

echo "del 5: ";
echo toLog($d);
$e = toLog($d);
echo "\n";

function absolute($number){
  $result = abs($number);
  return $result;
}

echo "del 6: ";
echo absolute($e);
$f = absolute($e);
echo "\n";

function arcCosine($number){
  $result = acos($number);
  return $result;
}

echo "del 7: ";
echo arcCosine($f);
$g = arcCosine($f);
echo "\n";

function radToDeg($number){
  $result = rad2deg($number);
  return $result;
}

echo "del 8: ";
echo rad2deg($g);
$h = rad2deg($g);
echo "\n";

function roundDown($number){
  $result = floor($number);
  return $result;
}

echo "del 9: ";
echo roundDown($h);
$i = roundDown($h);
echo "\n";


function subtract($number){
  $result = ($number-47);
  return $result;
}

echo "del 10: ";
echo subtract($i);
$j = subtract($i);
echo "\n";