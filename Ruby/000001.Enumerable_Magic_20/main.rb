#Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:
def each_cons list, n
    array = []
    (list.length-n+1).times do |count| 
        array2 = []
        n.times do |count2|
        array2.push(list[count+count2]) 
        end
        array.push(array2)
    end
return array
end

print each_cons([3, 5, 8, 13],2)

### Best codewars solution
# def each_cons list, n
# list.each_cons(n).to_a
# end