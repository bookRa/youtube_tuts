# keys

another_object = {1: 'hey', 2: 'kay'}

primitive_var = 'simple'

o = {
    # unlike JS python WILL evaluate an external variable as a key (as long as it is primitive)
    primitive_var: another_object,
    # somestr: 55, # This will not work like in JS where o['somestr']= 55. Python will try to find the somestr var and not find it
    'k': 3,
    'k': 'overridden three',
    66: 8,
    '66': 9995,  # will not override the previous key
    7.9: 'hello',
    # {1: 'go', 2:'no'}: True, #key can only be primitive!
    True: 'trill',
    None: 'wow try again',
}

z = o['66']
