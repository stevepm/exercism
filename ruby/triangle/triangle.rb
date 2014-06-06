class Triangle

  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3]
  end

  def kind
    hash = {}

    @sides.each do |side|
      if hash[side]
        hash[side] += 1
      else
        hash[side] = 1
      end
    end

    return_value = nil
    hash.each do |_, value|
      if value == 3
        return_value = :equilateral
        break
      elsif value == 2
        return_value = :isosceles
        break
      else
        return_value = :scalene
      end
    end
    return_value

  end

end