$(document).ready(function() {

  var circleOrEx = "o"; // "O" Player goes first. 
  var isGameInProgress = true; // The game is ready to begin. 
  var winningCombos = { // This variable represents all the winning combinations that are possible on the tic tac toe board from 0 - 8. 
      
    0: [ //0 is key - The below are the possible winning combos starting from 0, the top left square 
      [1, 2], // Winning across the top ( 0,1,2 ) 
      [3, 6], // Winning down the left hand side ( 0, 3, 6)
      [4, 8]  // Winning diagonally from 0 (0, 4, 8)
    ],
    
    1: [   // 1 is key,  Winning Combos starting for 1, top middle box.
      [0, 2], // Winning across the top ( 0,1,2 ) 
      [4, 7] // Winning down the middle (1, 4, 7) 
    ],
    2: [   // Winning Combos starting for 2, right top box 
      [0, 1],  // Winning across the top ( 0,1,2 ) 
      [5, 8], // Winning down the right hand side (2, 5, 8)
      [4, 6] // Winning diagonally  from 2 (2, 4, 6)
    ],
    3: [   // Winning Combos starting for 3, left middle box. 
      [0, 6], // Winning down the left hand side (0,3,6)
      [4, 5] // Winning across the middle row (3, 4, 5) 
    ],
    4: [   // Winning Combos starting for 4, middle box.  
      [1, 8], // NOT A WINNING COMBO... Mistake in the code. 
      [2, 6], // Winning diagonally  from 2 (2, 4, 6)
      [1, 7], // Winning down the middle (1, 4, 7) 
      [3, 5] // Winning across the middle row (3, 4, 5) 
        
        //Another possible winning code would be [0, 8]
    ],
    5: [  // Winning Combos starting for 5, right middle box.
      [2, 8], // Winning down the right hand side (2, 5, 8)
      [3, 4] // Winning across the middle row (3, 4, 5) 
    ],
    6: [  // Winning Combos starting for 6, left bottom square. 
      [0, 3], // Winning down the left hand side ( 0, 3, 6)
      [2, 4], // Winning diagonally from 6 (6, 4, 2) 
      [7, 8] // Winning across the bottom row (6, 7, 8) 
    ],
    7: [  // Winning Combos starting for 7, middle bottom box.
      [1, 4], // Winning down the middle (1, 4, 7) 
      [6, 8]  // Winning across the bottom row (6, 7, 8)
    ],
    8: [  // Winning Combos starting for 8, 
      [0, 4], // Winning diagonally from 8 (8, 4, 0)
      [2, 5], // Winning down the right hand side (2, 5, 8)
      [6, 7] // Winning across the bottom row (6, 7, 8)
    ]
  };

  // This event causes the function to run when you click the board. 
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// 
        
       // Remove the empty class and add either an 'X' or an 'O' value to the square when it is is clicked
        
        
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); //This code lets the player put either and 'X' or an 'O' to play the game. 

      if (circleOrEx === "o") {
        circleOrEx = "x";
      } else {
        circleOrEx = "o";
      }
    }

  });

  // This events runs the function when you click on the #newGame id. 
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); //This variable is the black squares in the Tic Tac Toe game. 
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //this creates multiple games of tic tac toe all over the page when you finish playing a board. 
        
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { //moving a Tic Tac Toe Board that has already been played somewhere else 
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    //The each function deletes what is in the empty class, the player is able to enter 'X' or 'O' in the blank squares on the board 
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

//checksIfWon checks if the player has won 
//chosenSquare is the specific winning combination; the  parameter is 0-8 
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { //The nested for loop gives the length of the multiArr 
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) {
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { // Player must press three squares on the board to complete a game. 
          playerWon = false;
        }
      }

      if (playerWon) { //remaining lines affect the board when a player enters a winning combination

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //The player who wins, there winning combo turns the color green.
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green");
        alert("Winner is " + circleOrEx.toUpperCase() + "!");
        isGameInProgress = false;
        return false; //this exits the loop
      }
    }


  }
})