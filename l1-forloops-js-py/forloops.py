# lets start with a list which we will be iterating thru:

animals = ['kitten', 'platypus', 'hedgehog', 'monkey', 'iguana', 'blobfish']

# a simple for loop

for x in animals:  # every element in animals will be called 'x' throughout this loop
    print(x)

# the following loop will allow you to increment an index from 0 to 1 to 2 etc. and then use that index to access our animal list.

# i will go from 0 up to (but not reach!) length of animals (in this case 6)
for i in range(len(animals)):
    print('Animal #{1}: {2}'.format(i, animals[i]))

# now we'll mention the break condition, which tells the loop to stop right there and skip over any more iterations

for x in animals:
    if x == 'platypus':
        print('I thought these were real animals!?')
        break
    print('Cool animal:', x)

# somewhat related, there is the continue condition, which tells the loop to skip over JUST THIS iteration, and to go to the next one

for i in range(len(animals)):
    if i == 3:
        continue
    print('Animal #{1}: {2}'.format(i, animals[i]))

# Hope this was understandable and informative!
