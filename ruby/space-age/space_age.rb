class SpaceAge
  attr_reader :seconds
  def initialize(seconds)
    @seconds = seconds
  end

  def on_earth
    seconds/60/60/24/365
  end
end