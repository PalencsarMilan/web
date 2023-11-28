let user = {};

user.firstName = 'John';
user.lastName = 'Smith';
user.firstName = 'Paul';

delete user.firstName;

function print() 
{
    console.log(user.firstName+" ", user.lastName);
}
print()
