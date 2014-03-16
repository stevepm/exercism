class Hamming

  def self.compute(first, second)
    first_array = first.split('')
    second_array = second.split('')
    hamming = 0
    if first_array.count <= second_array.count
      first_array.count.times do |num|
        if first_array[num-1] != second_array[num-1] && !first_array[num-1].empty? && !second_array[num-1].empty?
          print "first " + first_array[num-1] + " second "+ second_array[num-1]
          hamming += 1
        end
      end
    end
    hamming
  end
end