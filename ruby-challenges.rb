# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------

# 1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']


# Method --> word_contains_letter
# Input: array of words, a single letter (two params)
# Output: array of the words that contain the single letter 

def word_contains_letter(array, letter)
    array.select { |array| array.include?(letter) }
end

p word_contains_letter(beverages_array, letter_o)
# ["coffee", "soda water"]
p word_contains_letter(beverages_array, letter_t)
# ["tea", "water", "soda water"]


# -------------------

# 2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sum_nums array
    array.map(&:to_i).sum
end

p sum_nums nums_array1
# 76
p sum_nums nums_array2
# 100


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0



# Create a class --> bike
    # initializes with model: Ninja / wheels: 2 / current_speed: 0
# Create a method --> bike_info
    # return "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph"
# Create a method --> pedal_faster; pass integer to adjust speed
              #   --> brake; pass integer to adjust speed; bike cannot go negative speeds

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize model = 'Ninja', wheels = 2, current_speed = 0
        @model = model,
        @wheels = wheels,
        @current_speed = current_speed
    end

    def bike_info
        "The #{model} bike has #{wheels} wheels and is going #{current_speed} mph"
    end

    def pedal_faster up_speed
        @current_speed += up_speed
    end

    def brake down_speed
        if down_speed > @current_speed
            @current_speed = 0
        else
            @current_speed -= down_speed
        end
    end
end

my_bike = Bike.new

p my_bike.pedal_faster(10)
# 10
p my_bike.pedal_faster(18)
# 28
p my_bike.brake(5)
# 23
p my_bike.brake(25)
# 0
p my_bike.bike_info
# "The [\"Ninja\", 2, 0] bike has 2 wheels and is going 0 mph"
# I cannot figure out why the entire hash is being returned when calling the model.