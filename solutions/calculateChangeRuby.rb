# Calculate Change - Ruby

print "Enter how much this costs : "
cost = gets.strip.to_f
print "\nEnter the amount given : "
amount = gets.strip.to_f
change_due = amount - cost
printf("\nChange due : %.2f", change_due)

coins = { "dollars" => 1.00, "quarters" => 0.25, "dimes" => 0.10, "nickels" => 0.05, "pennies" => 0.01 }
change = {}

coins.each do |key, value|
  counter = 0
  while (change_due >= value)
    change_due -= value
    change_due = change_due.round(2)
    counter += 1
  end
  change[key] = counter
end

print "\nIn coins, we're giving you the following as change : "
change.each do |key, value|
  printf("\n#{key} - %.0f", value)
end
print "\n"