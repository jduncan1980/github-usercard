const rootDiv = document.querySelector('.cards');

const cardMaker = (cardObject) => {
	const cardDiv = document.createElement('div');
	cardDiv.classList.add('card');

	const img = document.createElement('img');
	img.src = cardObject.avatar_url;
	cardDiv.appendChild(img);

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');
	cardDiv.appendChild(cardInfo);

	const cardHeader = document.createElement('h3');
	cardHeader.classList.add('name');
	cardHeader.textContent = cardObject.name;
	cardInfo.appendChild(cardHeader);

	const userName = document.createElement('p');
	userName.classList.add('username');
	userName.textContent = cardObject.login;
	cardInfo.appendChild(userName);

	const location = document.createElement('p');
	location.textContent = `Location: ${cardObject.location}`;
	cardInfo.appendChild(location);

	const profile = document.createElement('p');
	cardInfo.appendChild(profile);

	const profileLink = document.createElement('a');
	profileLink.href = cardObject.html_url;
	profileLink.textContent = cardObject.html_url;
	profile.appendChild(profileLink);

	const followers = document.createElement('p');
	followers.textContent = `Followers: ${cardObject.followers}`;
	cardInfo.appendChild(followers);

	const following = document.createElement('p');
	following.textContent = `Following: ${cardObject.following}`;
	cardInfo.appendChild(following);

	const bio = document.createElement('p');
	bio.textContent = `Bio: ${cardObject.bio}`;
	cardInfo.appendChild(bio);

	const githubChart = document.createElement('img');
	githubChart.src = `http://ghchart.rshah.org/${cardObject.login}`;
	githubChart.classList.add('github-chart', 'hide-chart');
	cardDiv.appendChild(githubChart);

	const moreInfo = document.createElement('span');
	moreInfo.textContent = 'Click card for more info...';
	moreInfo.classList.add('more-info');
	cardDiv.appendChild(moreInfo);

	cardDiv.addEventListener('click', () => {
		githubChart.classList.toggle('hide-chart');

		if (moreInfo.textContent === 'Click card for more info...') {
			moreInfo.textContent = 'Click card for less info...';
		} else {
			moreInfo.textContent = 'Click card for more info...';
		}
	});

	return cardDiv;
};

axios
	.get(
		'https://cors-anywhere.herokuapp.com/https://api.github.com/users/jduncan1980'
	)
	.then((response) => {
		const newCard = cardMaker(response.data);
		rootDiv.appendChild(newCard);
		// console.log(response.data);
	})
	.catch((err) => {
		console.log(err, 'HTTP Request Failed');
	});

axios
	.get(
		'https://cors-anywhere.herokuapp.com/https://api.github.com/users/jduncan1980/following'
	)
	.then((response) => {
		response.data.forEach((follower) => {
			const newCard = cardMaker(follower);
			rootDiv.appendChild(newCard);
		});
	})
	.catch((err) => {
		console.log(err, 'HTTP Request Failed');
	});

//https://api.github.com/users/jduncan1980/following{/other_user}
// const followersArray = [
// 	'pvaidya56',
// 	'gaearon',
// 	'git-moss',
// 	'bradtraversy',
// 	'andrewjmead',
// ];

// followersArray.forEach((follower) => {
// 	axios
// 		.get(
// 			`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${follower}`
// 		)
// 		.then((response) => {
// 			const newCard = cardMaker(response.data);
// 			rootDiv.appendChild(newCard);
// 		})
// 		.catch((err) => {
// 			console.log(err, 'HTTP Request Failed');
// 		});
// });

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    

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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
