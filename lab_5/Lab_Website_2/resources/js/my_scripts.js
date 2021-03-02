/*
	players is an array to hold each player's information.
	Fields:
		name - Football player's name
		img  - The relative/absolute path to the image file.
		alt  - The alternative text that describes the image.
		year - The student's year in college (Freshman, Sophomore, Junior, Senior).
		major- The student's current college major.
		games_played    - The number of football games the student has played for the Buffs.
		pass_yards      - The total number of passing yards in the student's football career for the Buffs.
		rushing_yards   - The total number of rushing yards in the student's football career for the Buffs.
		receiving_yards - The total number of receiving yards in the student's football career for the Buffs.
*/
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];



function viewStudentStats(id, toggle)
{
	var x = document.getElementById(id);
	x.style.visibility = "inherit";
	x.style.height = "auto";
}
				
function changeColor(color)
{
	document.body.style.background = color;
	 window.addEventListener("load",function() { changeBackground('color') });
}



function loadStatsPage()
{
    var dubs = 0;
    var Ls = 0;
    var scores = document.getElementById("stats_table");
    for(var r = 2; r < 14; r++)
	{
        var homScore = parseInt(scores.rows[r].cells[2].innerHTML);
        var oppScore = parseInt(scores.rows[r].cells[3].innerHTML);
        if(oppScore > homScore)
		{
            scores.rows[r].cells[4].innerHTML = scores.rows[r].cells[1].innerHTML;
            Ls++;
        }
        else
		{
            scores.rows[r].cells[4].innerHTML = "Colorado Boulder";
            dubs++;
        }
    }
    document.getElementById("wins").innerHTML = dubs;
    document.getElementById("losses").innerHTML = Ls;
}


function loadPlayersPage()
{
	var ele = document.getElementById("player_selector");
	for (j = 0; j < players.length; j++)
	{
	  var link = document.createElement("a");
	  link.href = "#";
	  link.classList.add("dropdown-item");
	  link.classList.add("player");
	  link.text = players[j].name;
	  link.onclick = function()
	  {
		switchPlayers($(this).index());
	  }
	  ele.appendChild(link);
	}
  }
		
	function switchPlayers(playerNum)
	{ 
		var bigtable = document.getElementById("table");
		document.getElementById('p_year').innerHTML = players[playerNum].year;
		document.getElementById('p_major').innerHTML = players[playerNum].major;
		var d = document.getElementById('g_played').innerHTML = players[playerNum].games_played;
		document.getElementById('player_img').src = players[playerNum].img;
		document.getElementById('player_img').alt = players[playerNum].alt;
		var a = document.getElementById('p_yards').innerHTML = players[playerNum].pass_yards;
		var b = document.getElementById('r_yards').innerHTML = players[playerNum].rushing_yards;
		var c = document.getElementById('rec_yards').innerHTML = players[playerNum].receiving_yards;
		document.getElementById('avg_p_yards').innerHTML = a/d;
		document.getElementById('avg_r_yards').innerHTML = b/d;
		document.getElementById('avg_rec_yards').innerHTML =c/d;


	}
	/*
			parameters: 
				playerNum - The index of the football player in the players array.
			
			purpose:
				This method will update the the spans on the player's information pageX
				and calculate the average passing, rushing, and receiving yards.
				
				Span ids:
					p_year     - the player's year in college
					p_major    - the player's major in college
					g_played   - the number of games played for Buffs
					player_img - the player's photo (must set src and alt)
					p_yards    - the number of passing yards
					r_yards    - the number of rushing yards
					rec_yards  - the number of receiving yards
					
					Calculated values:
					  avg_p_yards   - the average number of passing yards for the player's Buff career
					  avg_r_yards   - the average number of rushing yards for the player's Buff career
					  avg_rec_yards - the average number of receiving yards for the player's Buff career
*/
				

