async function main(){
	let response = await fetch("http://localhost:3000/user")
	const {users} = await response.json()

  response = await fetch("http://localhost:3000/match")
	const {matches} = await response.json()

  const bets = []
  const userUpdate = [...users]

  matches.map((match)=>{
    users.map((user)=>{

      // console.log(match.team_1_name+" x "+match.team_2_name+" - "+user.name)
      
      const team1Score = Math.floor(Math.random()*3)
      const team2Score = Math.floor(Math.random()*3)

      const won = team1Score>team2Score?1:2
      let result_win = false
      let score_win = false
      let status = "ongoing"
      let points = 0

      if (match.team_1_score && match.team_2_score){
        const result = match.team_1_score>match.team_2_score?1:2
        if (result==won) {
          result_win = true
          points+=10
        }
        if (match.team_1_score==team1Score && match.team_2_score==team2Score) {
          score_win=true
          points+=50
        }

      
        
        status='finished'
      }

      bets.push({
        userId: user.id,
        matchId: match.id,
        status,
        score_1: team1Score,
        score_2: team2Score,
        date: "2023-03-05T00:00:00.000Z",
        score_win,
        result_win,
        points,
      })
      
      
      const userToUpdate = userUpdate.find(userData=>userData.id==user.id)
      
      if (result_win || score_win) userToUpdate.wins+=1
      else if (userToUpdate.wins==null) userToUpdate.wins=0
      userToUpdate.points+=points
    });
  })




  await Promise.all(bets.map(async(bet)=>{

    const response = await fetch("http://localhost:3000/bet", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bet),
      });

    console.log(await response.json())
  }))

  await Promise.all(userUpdate.map(async(user)=>{
    const response = await fetch("http://localhost:3000/user/"+user.id, {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          points:user.points,
          wins: user.wins,
        }),
      });

    console.log(await response.json())
  }))


}

main()





