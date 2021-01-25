<?php

class StringUtilities {

  static function secondCase($string){
    
    if (strlen($string) >= 2) {
        $string = strtolower($string);
        $string[1] = strtoupper($string[1]);
        return $string;
    } else{
        return "";
    }
  }
}

class Pajamas{
  private $owner, $fit, $color;

  function __construct(
    $owner = "unclaimed",
    $fit = "fine",
    $color = "white"){

      $this->owner = StringUtilities::secondCase($owner);
      $this->fit = $fit;
      $this->color = $color;
  }

  public function setFit($new_fit){
    $this->fit = $new_fit;
  }

  public function describe(){
     return "$this->owner's $this->color pajamas fit $this->fit.";
  }
}

class ButtonablePajamas extends Pajamas{
  private $button_state = "unbuttoned";

  public function describe() {
  return parent::describe() . " They also have buttons which are currently $this->button_state.";
}

public function toggleButtons(){
  if ($this->button_state === "unbuttoned") {
    $this->button_state = "buttoned";
  } else {
    $this->button_state = "unbuttoned";
  }
}
}

$chicken_PJs = new Pajamas("Chicken", "loose", "blue");
echo $chicken_PJs->describe()."\n";

$chicken_PJs->setFit("tight af");

echo $chicken_PJs->describe()."\n";

$moose_PJs = new ButtonablePajamas("Moose", "good", "green");
echo $moose_PJs->describe()."\n";

echo $moose_PJs->toggleButtons()."\n";

echo $moose_PJs->describe()."\n";