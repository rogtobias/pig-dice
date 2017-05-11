//--------------------FRONTEND LOGIC
$(document).ready(function() {
  $("#players").submit(function(event) {
    event.preventDefault();

    var gameType = $("input:radio[name=flavor]:checked").val();
    if (gameType === "twoPlayer") {
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
    } else if (gameType === "computerEasy") {
      player1 = new Player(true);
      player2 = new Player(false);

      $("#main").show();
      $("#intro").hide();

      var playerOneName = $("#inputtedPlayerOne").val();

      player1.playerName = playerOneName;
      player2.playerName = "Mean Pig";

      $("#playerOne").text(player1.playerName);
      $("#playerTwo").text(player2.playerName);
    } else {
      player1 = new Player(true);
      player2 = new Player(false);

      $("#main").show();
      $("#intro").hide();

      var playerOneName = $("#inputtedPlayerOne").val();

      player1.playerName = playerOneName;
      player2.playerName = "Mean Pig";

      $("#playerOne").text(player1.playerName);
      $("#playerTwo").text(player2.playerName);
    }
  });

  $("#playerOneRollBtn").click(function() {
    event.preventDefault();
    player1.roll = GetRoll();
    player1.RollOne();
    $("#playerOneRoll").text(player1.roll);
  });

  $("#playerTwoRollBtn").click(function() {
    event.preventDefault();
    player2.roll = GetRoll();
    player2.RollOne();
    $("#playerTwoRoll").text(player2.roll);
  });

  $("#playerOneHold").click(function() {
    event.preventDefault();
    player1.Hold();
    $("#playerOneTotalScore").text(player1.totalScore);
  });

  $("#playerTwoHold").click(function() {
    event.preventDefault();
    player2.Hold();
    $("#playerTwoTotalScore").text(player2.totalScore);
  });

  $("#btn-newGame").click(function() {
    event.preventDefault();
    player1.NewGame();
    player2.NewGame();
  });
});

//--------------------BACKEND LOGIC
var player1 = "";
var player2 = "";

function GetRoll() {
  return Math.floor(Math.random() * 6) + 1;
};

function Player() {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;
  this.playerName;
};

Player.prototype.RollOne = function() {
  if (this.roll === 1) {
    this.tempScore = 0;
    alert(this.playerName + " Your turn is over. Please pass the mouse.");
  } else {
    this.tempScore += this.roll;
  }
};

Player.prototype.Hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  if (this.totalScore >= 15) {
    alert(this.playerName + " You are the winner! congratulations!");
    player1.NewGame();
    player2.NewGame();
  } else {
    alert(this.playerName + " You are holding and your score has been added. Please pass the mouse.");
  }
};

Player.prototype.NewGame = function() {
  this.roll = 0;
  $("#playerOneRoll").text(player1.roll);
  $("#playerTwoRoll").text(player2.roll);
  this.tempScore = 0;
  this.totalScore = 0;
  $("#playerOneTotalScore").text(player1.totalScore);
  $("#playerTwoTotalScore").text(player2.totalScore);
  this.playerName = "";
  $("#main").hide();
  $("#intro").show();
  $("#players")[0].reset();
};
