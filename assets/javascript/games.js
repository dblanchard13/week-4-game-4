var charList = [];
var playerChosed = false;
var cpuChosed =false;
var player;
var cpu;
//--------------------------
function charConstructor(name, hp, ap, img) {
	return{
		id: 0,
		name: name,
		hp: hp,
		ap: ap,
		countAP: 1,
		img: img,
		status: true,
		$me:"",
		attack: function(enemie) {
			enemie.hp -= this.ap * this.countAP;
			this.countAP++;
		},
		defend: function(enemie){
			enemie.hp -= this.ap * 2; // still working on it.
		},		
	};
};
//--------------------------
var game = {
	
}
//--------------------------
function charDisplay (){
	//= Declare Characters Here ==(id, name, Health Points, AttackPower)===
	charList.push(charConstructor("luke Skywallker",100,5, "./assets/images/luke.png"));
	charList.push(charConstructor("Obi-Wan Kenobi",120,8, "./assets/images/obiWan.png"));
	charList.push(charConstructor("Darth Sidius",150,12, "./assets/images/dSidius.png"));
	charList.push(charConstructor("Darth Maul",180,13, "./assets/images/dMaul.png"));
	//=====================================================================
	for (var i = 0; i < charList.length; i++){
		var character;
		charList[i].id = i;

		character = $("<li class='character-list'>")
			.attr("id",charList[i].id);
		character
			.append($("<p>").text(charList[i].name));
		character
			.append($("<img>").attr("src",charList[i].img));
		character
			.append($("<p>").text("HP - " + charList[i].hp));

		charList[i].$me = character;

		$(".character-container").append(charList[i].$me);
	}
}
/*========================= Logic ===========================*/
charDisplay();

$(document).ready( function(){

	//===== Chosing Characters=========
	$(".character-list").on("click", function(){
		var id = parseInt($(this).attr("id"));

		if (!playerChosed){
			$(this).attr("class", "player");
			player = charList[id];
			playerChosed = true;
			$("#player").append(charList[id].$me);
		}else if (!cpuChosed){
			$(this).attr("class", "cpu");
			cpu = charList[id];
			cpuChosed = true;
			$("#cpu").append(charList[id].$me);
		}
	});
	//======= Fignt Table ================
	$("#btn-attack").on("click", function(){

		player.attack(cpu);
		cpu.defend(player);

		console.log(player);
		console.log(cpu);

		if(player.hp <= 0){
			console.log("game over");

		}else if (cpu.hp <= 0){
			console.log("enemie defeated, chose another one.");
			cpuChosed = false;
			cpu.status = false;
			$("#cpu").empty();

		}
	
	});
	//============ Restar Game ============

function fight (){

}


});








console.log(charList);