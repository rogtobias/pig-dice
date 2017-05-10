//--------------------FRONTEND LOGIC
$(document).ready(function() {
  $("#players").submit(function(event) {
    event.preventDefault();

    player1 = new Player(true);
    player2 = new Player(false);

    $("#main").show();
    $("#intro").hide();

    var playerOneName = $("#inputtedPlayerOne").val();
    var playerTwoName = $("#inputtedPlayerTwo").val();

    player1.playerName = playerOneName;
    player2.playerName = playerTwoName;

    $("#playerOne").text(player1.playerName);
    $("#playerTwo").text(player2.playerName);

  });

  $("#playerOneRoleBtn").click(function() {
    event.preventDefault();
    player1.role = GetRole();
    player1.RoleOne();
    $("#playerOneRole").text(player1.role);
  });

  $("#playerOneHold").click(function() {
    event.preventDefault();
    player1.Hold();
    $("#playerOneTotalScore").text(player1.totalScore);
    console.log(player1.totalScore);
  });
});

//--------------------BACKEND LOGIC
var player1 = "";
var player2 = "";

function GetRole() {
  return Math.floor(Math.random() * 6) + 1;
};

function Player(turn) {
  this.role = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = turn;
  this.playerName;
};

Player.prototype.RoleOne = function() {
  if (this.role === 1) {
    this.tempScore = 0;
    alert(this.playerName + " Your turn is over.");
  } else {
    this.tempScore += this.role;
  }
};

Player.prototype.Hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  alert(this.playerName + " You are holding and your score has been added.")
};

Player.prototype.WinnerCheck = function() {
  if (this.totalScore >= 100) {
    alert(this.playerName + " You are the winner!")
  }
};

Player.prototype.NewGame = function() {
  this.role = 0;
  this.tempScore = 0;
  this.totalScore =0;
  this.playerName = "";
};

var ClearValues = function() {
  $("#inputtedNameOne").val("");
  $("#inputtedNameTwo").val("");
}
