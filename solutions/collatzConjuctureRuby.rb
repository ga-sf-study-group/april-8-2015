# Collatz Conjucture 

puts "Gimme a number greater than one: "
n = gets.strip.to_i
steps = 0
if n <= 1
  return "Try again with an integer greater than one"
end

while n > 1
  if n % 2 == 0
    n /= 2
    steps += 1
  else
    n = (3 * n) + 1
    steps += 1
  end
end

puts "It took #{steps} steps to get to one"