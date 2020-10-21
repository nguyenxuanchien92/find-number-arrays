let numbers = [-3, 5, 1, 3, 2, 10];


function find_number(num) {
    for (let i = 0; i < numbers.length; i++) {
        if (num == numbers[i]) {
            console.log("Value " + numbers[i] + " found at index " + i);
        }
    }
}

find_number(1)