function play() {
    document.getElementById('first').classList.add('hidden')
    document.getElementById('second').classList.remove('hidden')
    
    randomNumber()
}

// random number section 
function randomNumber() {
    const word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '/'];

    const randomNum = Math.floor(Math.random() * 27);

    document.getElementById('word').innerText = word[randomNum];
    // console.log( word[randomNum]);
    
    
}

// keyboard typing section 
function clicked(allWord) {
    const word = document.getElementById('word').innerText;
    if (word === allWord) {
        const score = document.getElementById('score').innerText;
        const scoreNum = parseInt(score);
        const totalScore = scoreNum + 5;

        document.getElementById('score').innerText = totalScore;

        randomNumber()
    } else {
        const life = document.getElementById('life').innerText;
        const lifeNum = parseInt(life);
        const totalLife = lifeNum - 1;
        document.getElementById('life').innerText = totalLife;

        randomNumber()

        if (totalLife === 0) {
            document.getElementById('second').classList.add('hidden');
            document.getElementById('third').classList.remove('hidden');

            const score = document.getElementById('score').innerText;
            document.getElementById('new-score').innerText = score;
        }
    }

}
// play section 
function playAgain() {
    document.getElementById('third').classList.add('hidden');
    document.getElementById('second').classList.remove('hidden');
    document.getElementById('life').innerText = 5;

    randomNumber()
}





// enter key press section 
  document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("enterBtn").click(); 
    }
  });


//  play again keypress section 
document.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      document.getElementById("playAgainBtn").click(); 
    }
  });

  
//  keyboard keys section 
// q btn 
document.addEventListener("keyup", function(event) {
    if (event.key === "q") {
      document.getElementById("btn-q").click(); 
    }
  });

  // btn-w
document.addEventListener("keyup", function(event) {
    if (event.key === "w") {
      document.getElementById("btn-w").click(); 
    }
  });
  // btn-e
document.addEventListener("keyup", function(event) {
    if (event.key === "e") {
      document.getElementById("btn-e").click(); 
    }
  });
    // btn-r
document.addEventListener("keyup", function(event) {
    if (event.key === "r") {
      document.getElementById("btn-r").click(); 
    }
  });
    // btn-t
document.addEventListener("keyup", function(event) {
    if (event.key === "t") {
      document.getElementById("btn-t").click(); 
    }
  });
    // btn-y
document.addEventListener("keyup", function(event) {
    if (event.key === "y") {
      document.getElementById("btn-y").click(); 
    }
  });
    // btn-u
document.addEventListener("keyup", function(event) {
    if (event.key === "u") {
      document.getElementById("btn-u").click(); 
    }
  });
    // btn-i
document.addEventListener("keyup", function(event) {
    if (event.key === "i") {
      document.getElementById("btn-i").click(); 
    }
  });
    // btn-o
document.addEventListener("keyup", function(event) {
    if (event.key === "o") {
      document.getElementById("btn-o").click(); 
    }
  });
    // btn-p
document.addEventListener("keyup", function(event) {
    if (event.key === "p") {
      document.getElementById("btn-p").click(); 
    }
  });
    // btn-a
document.addEventListener("keyup", function(event) {
    if (event.key === "a") {
      document.getElementById("btn-a").click(); 
    }
  });
    // btn-s
document.addEventListener("keyup", function(event) {
    if (event.key === "s") {
      document.getElementById("btn-s").click(); 
    }
  });
    // btn-d
document.addEventListener("keyup", function(event) {
    if (event.key === "d") {
      document.getElementById("btn-d").click(); 
    }
  });
    // btn-f
document.addEventListener("keyup", function(event) {
    if (event.key === "f") {
      document.getElementById("btn-f").click(); 
    }
  });
    // btn-g
document.addEventListener("keyup", function(event) {
    if (event.key === "g") {
      document.getElementById("btn-g").click(); 
    }
  });
    // btn-h
document.addEventListener("keyup", function(event) {
    if (event.key === "h") {
      document.getElementById("btn-h").click(); 
    }
  });
    // btn-j
document.addEventListener("keyup", function(event) {
    if (event.key === "j") {
      document.getElementById("btn-j").click(); 
    }
  });
    // btn-k
document.addEventListener("keyup", function(event) {
    if (event.key === "k") {
      document.getElementById("btn-k").click(); 
    }
  });
    // btn-l
document.addEventListener("keyup", function(event) {
    if (event.key === "l") {
      document.getElementById("btn-l").click(); 
    }
  });
    // btn-z
document.addEventListener("keyup", function(event) {
    if (event.key === "z") {
      document.getElementById("btn-z").click(); 
    }
  });
    // btn-x
document.addEventListener("keyup", function(event) {
    if (event.key === "x") {
      document.getElementById("btn-x").click(); 
    }
  });
    // btn-c
document.addEventListener("keyup", function(event) {
    if (event.key === "c") {
      document.getElementById("btn-c").click(); 
    }
  });
    // btn-v
document.addEventListener("keyup", function(event) {
    if (event.key === "v") {
      document.getElementById("btn-v").click(); 
    }
  });
    // btn-b
document.addEventListener("keyup", function(event) {
    if (event.key === "b") {
      document.getElementById("btn-b").click(); 
    }
  });
    // btn-n
document.addEventListener("keyup", function(event) {
    if (event.key === "n") {
      document.getElementById("btn-n").click(); 
    }
  });
    // btn-m
document.addEventListener("keyup", function(event) {
    if (event.key === "m") {
      document.getElementById("btn-m").click(); 
    }
  });
    // btn-/
document.addEventListener("keyup", function(event) {
    if (event.key === "/") {
      document.getElementById("btn-/").click(); 
    }
  });





