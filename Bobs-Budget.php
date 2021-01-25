<?php
  
$annualExpenses = [
    "vacations" => 1000,
    "carRepairs" => 1000,    
];

$monthlyExpenses = [
    "rent" => 1500,
    "utilities" => 200,
    "healthInsurance" => 200
];

$weeklyExpenses = [
  "gas" => 25,
  "food" => 90,
  "entertainment" => 47
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

// Write your code below:
print_r($incomeSegments);

$netIncome = ($incomeSegments[0][0]*$incomeSegments[0][1]) + ($incomeSegments[1][0]*$incomeSegments[1][1]) + ($incomeSegments[2][0]*$incomeSegments[2][1]);

echo "Netincome: ".$netIncome;


$annualIncome = $netIncome - $socialSecurity;
echo "\n";
echo "Annual income: ".$annualIncome;

$afterAnnualExpenses = $annualIncome - ($annualExpenses["vacations"]+$annualExpenses["carRepairs"]);
echo "\n";
echo "Annual income after annual expenses: ".$afterAnnualExpenses;


$monthlyIncome = ($afterAnnualExpenses/12);
echo "\n";
echo "Monthly income: ".round($monthlyIncome, 1);

$monthlyIncomeAfterExpenses = $monthlyIncome - ($monthlyExpenses["rent"]+$monthlyExpenses["utilities"]+$monthlyExpenses["healthInsurance"]);
echo "\n";
echo "Monthly income after expenses: ".round($monthlyIncomeAfterExpenses, 1);

$weeklyIncome = ($monthlyIncomeAfterExpenses/4.33);

echo "\n";
echo "Weekly income: ".round($weeklyIncome, 1);

$weeklyIncomeAfterExpenses = $weeklyIncome - ($weeklyExpenses["gas"]+$weeklyExpenses["food"]+$weeklyExpenses["entertainment"]);
echo "\n";
echo "Weekly income: ".round($weeklyIncomeAfterExpenses, 1);

$savePrYear = $weeklyIncomeAfterExpenses*52;
echo "\n";
echo "Save each year: ".round($savePrYear, 1);