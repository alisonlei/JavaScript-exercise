// EXERCISE 1 (Week 8)


numbers = [ 22, 184, 68, 7560, 12, 55 ];
//numbers = [ 22, 184, 68, 7561, 13, 55 ];    // A test array; NOTHING is divisible by 3!


// Replace this comment with your answer
let res=function(numbers) {
    for (let i=0;i<numbers.length;i++){
        if (numbers[i]%3==0){
            console.log(numbers[i]);
            return numbers[i];
        }
    }
};
res(numbers)
