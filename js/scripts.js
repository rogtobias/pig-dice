//--------------------FRONTEND LOGIC
$(document).ready(function() {
  $("#players").submit(function(event) {
    event.preventDefault();
    debugger;
    var playerOne = $("input#inputtedPlayerOne").val();
    var playerTwo = $("input#inputtedPlayerTwo").val();

    var playerOne = new PlayerOne(playerOne);
    var playerTwo = new PlayerTwo(playerTwo);

    $("#intro").hide();
    $("#main").show();
  });
});
//--------------------BACKEND LOGIC
function GetRoll() {
  return Math.floor(Math.random() * 6) + 1;
};

function PlayerOne(playerOne = "", score) {
  this.name = playerOne;
  this.score = [];
};

function PlayerTwo(playerTwo = "", score) {
  this.name = playerTwo;
  this.score = [];
};
