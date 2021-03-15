const reset = document.querySelector("#reset");

let players = {
  pool: [
    "Sam",
    "Vasile",
    "Mimi",
    "Tom",
    "Andrew",
    "Ben",
    "Archibald",
    "Adam",
    "Alex",
    "Aaron",
  ],
  team1: [],
  team2: [],
};

/* ======================= */
/**
 * Create a team picker app which will have 3 columns:
 *
 * 1. Pool of players
 * 2. Team 1
 * 3. Team 2
 *
 * Requirements:
 * 1. On load all players from {players.pool} should be rendered
 * in "Pool" column
 * 2. Each player element should has player name, and two buttons
 * to pick a side(check markup example for {createPlayerEl} function)
 * 3. when I click on a button with class "to_team1", this player needs
 * to be removed from "pool" list and added to "Team 1" list
 * 4. when I click on a button with class "to_team2", this player needs
 * to be removed from "pool" list and added to "Team 2" list
 * 5. Inside "Pool" container you have "Reset" button. When you click on it,
 * it should reset all lists to initial state.
 *
 * NOTE: remember to keep {players} object always updated.
 */
/* ======================= */

/**
 * As a part of team picker app, you need to create
 * a function {createPlayerEl} which takes a player name and return
 * a markup for this player
 *
 * Player markup should be:
 * <li class="player">
 *  <p>${name}</p>
 *	<div class="buttons">
 *    <button class="btn to_team1"> < </button>
 *    <button class="btn to_team2"> > </button>
 *  </div>
 * </li>
 */

 const playerslist = players.pool;
 const team1 =players.team1;
 const team2 =players.team2;
 const poolSection = document.querySelector('.column.pool');
//                                             MAKE LIST IN POOL 
 const createPlayerEl = () =>{
   playerslist.forEach((playerName,index) => {
     const playerChoice = document.createElement('li');
     playerChoice.classList.add('player');
     playerChoice.innerHTML = `<p>${playerName}</p>
       <div class="buttons" id="${index}">
       <button class="btn to_team1"> < </button>
       <button class="btn to_team2"> > </button>
       </div>`;
     poolSection.appendChild(playerChoice);
   })
   return poolSection;
 }

 createPlayerEl();

 const createTeamMember = (player,teamToGoInto) => {
   // team1.forEach(player => {
     console.log('teamToGoInto',teamToGoInto)
     const playerWrap = document.createElement('li');
     playerWrap.innerHTML = `<p>${player}</p>`;
     teamToGoInto.appendChild(playerWrap);
   // })
 }
   //                                          BUTTON FUNCTIONS 

 const goToTeam1Btn = [...document.querySelectorAll('li')];

 goToTeam1Btn.forEach(player =>{player.addEventListener("click", (event)=>{
   const ptag = player.querySelector('p').innerText;
   player.remove();
   indexOfPlayer = playerslist.indexOf(ptag);
   console.log(indexOfPlayer);

   playerRemoved = playerslist.splice(indexOfPlayer,1);
   console.log(playerRemoved);

   
   const team1Roster = document.querySelector('.column.team1');
   const team2Roster = document.querySelector('.column.team2');

   
   let btnClasses = event.target.className

   if (btnClasses.includes('to_team1')){
     team1.push(playerRemoved[0]);
     createTeamMember(playerRemoved[0],team1Roster);

  
   } else if(btnClasses.includes('to_team2')){
     team2.push(playerRemoved[0]);
     createTeamMember(playerRemoved[0],team2Roster);
   }
 })
});

