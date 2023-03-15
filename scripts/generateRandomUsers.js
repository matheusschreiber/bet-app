async function createUser() {
  const response = await fetch("https://randomuser.me/api/?page=3&results=20&seed=abc&nat=br")
  const {results} = await response.json()
  
  const users = []
  results.map((user)=>{
    users.push({
      name:user.name.first + " " + user.name.last,
      picture: user.picture.large
    })
  })

  await Promise.all(users.map(async(user)=>{
    await fetch("http://localhost:3000/user", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  }))
}


createUser()
