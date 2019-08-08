/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/MSquared88')
  .then((response) => {
    const matthew = newGitUser(response)
    cards.appendChild(matthew)
  })
.catch((err) => {
    alert(err)
  })
const cards = document.querySelector('.cards')

/* Step 2: Inspect and study the data coming back, this is YOUR 
github info! You will need to understand the structure of this 
data in order to use it to build your component function 

Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
follow this link in your browser https://api.github.com/users/<Your github name>/followers 
, manually find some other users' github handles, or use the list found 
at the bottom of the page. Get at least 5 different Github usernames and add them as
Individual strings to the friendsArray below.

Using that array, iterate over it, requesting data for each user, creating a new card for each
user, and adding that card to the DOM.
*/

// const followersArray = [
//   'https://api.github.com/users/MWeberLambdaweb19',
//   'https://api.github.com/users/JaxAtwood', 
//   'https://api.github.com/users/chrisbonifacio',
//   'https://api.github.com/users/yoshimii',
//   'https://api.github.com/users/ajflowers',
//   'https://api.github.com/users/MosesSupposes',
//   'https://api.github.com/users/briannakeune'
// ];

// followersArray.forEach((item) => {
//   axios.get(item)
//     .then((response) => {
//       let follower  = newGitUser(response)
//       cards.appendChild(follower)
      
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })



axios.get('https://api.github.com/users/MSquared88/followers')
.then((res) => {
  let followers = []
  res.data.forEach((ele) => {
    followers.push(ele.url)
  })
  followers.forEach((ele) => {
    axios.get(ele)
    .then((response) => {
      let follower  = newGitUser(response)
      cards.appendChild(follower)
    })
  })   
})
.catch((err) => {
  alert(err)
})




/* Step 3: Create a function that accepts a single object as its only argument,
Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function newGitUser(obj){
  //nested iside of cards div
  const newUser = document.createElement('div')
  newUser.classList.add('card')

  //nested inside of newUser
  const userImg = document.createElement('img')
  userImg.src = obj.data.avatar_url

  //nested inside of newUser
  const userInfo = document.createElement('div')
  userInfo.classList.add('card-info')

  //nested inside of userInfo
  const userName = document.createElement('h3')
  userName.classList.add('name')
  userName.textContent = obj.data.name

  //nested inside of userInfo
  const userHandle = document.createElement('p')
  userHandle.classList.add('username')
  userHandle.textContent = obj.data.login
  
  //nested inside of userInfo
  const userProfile = document.createElement('p')

  //nested inside of userProfile
  const userProfileLink = document.createElement('a')
  userProfileLink.href = obj.data.html_url
  userProfileLink.textContent = obj.data.html_url
  
  //nested inside of newUser
  const userFollowers = document.createElement('p')
  userFollowers.textContent = `Followers: ${obj.data.followers} `
  
  //nested inside of newUser
  const userFollowing = document.createElement('p')
  userFollowing.textContent = `Following: ${obj.data.following} `

  //nested inside of newUser
  const userBio = document.createElement('p')
  userBio.textContent = obj.data.bio

  newUser.appendChild(userImg)

  newUser.appendChild(userInfo)
  userInfo.appendChild(userName)
  userInfo.appendChild(userHandle)

  userInfo.appendChild(userProfile)
  userProfile.appendChild(userProfileLink)

  userInfo.appendChild(userFollowers)
  userInfo.appendChild(userFollowing)
  userInfo.appendChild(userBio)

  

  return newUser
}


/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
