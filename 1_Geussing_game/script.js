let btn = document.getElementById('btn');
let output = document.getElementById('outputText');

let number = Math.floor(Math.random() * 17);

btn.addEventListener('click', function() {
    let input = document.getElementById('userInput').value;
    // let randomNumberMinus = number - 1;
    // let randomNumberPlus = number + 1;
    if (input == number){
        output.innerHTML = `Awesome! You number ${number} was correct. You can be named many things, hungry not being one of them. `
    } else {
        if (input == number+1 || input == number-1) {
            output.innerHTML = "So close, but you just missed it! Are you in a class that started on the thirteenth or what?"
        } else {
            output.innerHTML = `Bummer... You guessed ${input} and the secret number was ${number}.`
        }
    }

//     if (input == number){
//         output.innerHTML = `Awesome! You number ${number} was correct. You can be named many things, hungry not being one of them. `
//     }else if (input == randomNumberPlus || input == randomNumberMinus) {
//     output.innerHTML = "So close, but you just missed it! Are you in a class that started on the thirteenth or what?"
//         } else {
//             output.innerHTML = `Bummer... You guessed ${input} and the secret number was ${number}.`
// }




 });

    document.querySelector('.restart-btn').addEventListener('click', function(){
        window.location.reload();
        return false;
      });