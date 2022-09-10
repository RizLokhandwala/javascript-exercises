const findTheOldest = function(people) {
    let age = 0;
    let index;
    for(i=0; i<people.length; i++) {
        let tmpAge;
        if (people[i].yearOfDeath != null) {
            tmpAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        else {
            tmpAge = 2022-people[i].yearOfBirth;
        }
            
        if (tmpAge > age) {
            age = tmpAge;
            index = i;
        } 
    }
    console.log(index);
    return people[index]
};

// Do not edit below this line
module.exports = findTheOldest;
