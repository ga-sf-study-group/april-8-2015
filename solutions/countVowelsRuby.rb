# Count Vowels

def count_vowels(string)
  array = string.each_char.to_a
  vowels = {"a" => 0, "e" => 0, "i" => 0, "o" => 0, "u" => 0}
  array.each do |char|
    if vowels.has_key?(char)
      vowels[char] += 1
    end
  end
  print "There were: \n"
  vowels.each do |k,v|
    print "#{v} #{k}'s\n"
  end
end


puts "Enter a string: "
string = gets.strip
puts "#{count_vowels(string)}"