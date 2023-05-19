// app.use(urlencoded({ extended: true }));

// fetch all players
// app.get('/api/players', (req, res) => {
// 	db.collection('players')
// 		.get()
// 		.then((players) => {
// 			res.send(players);
// 		});
// });

// fetch a single player by ID
app.get('/api/players/:id', (req, res) => {
	db.collection('players')
		.doc({ id: parseInt(req.params.id) })
		.get()
		.then((player) => {
			res.send(player);
		});
});

// create a new player
app.post('/api/players', (req, res) => {
	const player = req.body;
	db.collection('players')
		.add(player)
		.then(() => {
			res.send({ message: 'Player added successfully' });
		});
});

// update a player by ID
app.put('/api/players/:id', (req, res) => {
	const player = req.body;
	db.collection('players')
		.doc({ id: parseInt(req.params.id) })
		.update(player)
		.then(() => {
			res.send({ message: 'Player updated successfully' });
		});
});

// delete a player by ID
app.delete('/api/players/:id', (req, res) => {
	db.collection('players')
		.doc({ id: parseInt(req.params.id) })
		.delete()
		.then(() => {
			res.send({ message: 'Player deleted successfully' });
		});
});

// fetch all coaches
app.get('/api/coaches', (req, res) => {
	db.collection('coaches')
		.get()
		.then((coaches) => {
			res.send(coaches);
		});
});

// fetch a single coach by ID
app.get('/api/coaches/:id', (req, res) => {
	db.collection('coaches')
		.doc({ id: parseInt(req.params.id) })
		.get()
		.then((coach) => {
			res.send(coach);
		});
});

// create a new coach
app.post('/api/coaches', (req, res) => {
	const coach = req.body;
	db.collection('coaches')
		.add(coach)
		.then(() => {
			res.send({ message: 'Coach added successfully' });
		});
});

// update a coach by ID
app.put('/api/coaches/:id', (req, res) => {
	const coach = req.body;
	db.collection('coaches')
		.doc({ id: parseInt(req.params.id) })
		.update(coach)
		.then(() => {
			res.send({ message: 'Coach updated successfully' });
		});
});

// delete a coach by ID
app.delete('/api/coaches/:id', (req, res) => {
	db.collection('coaches')
		.doc({ id: parseInt(req.params.id) })
		.delete()
		.then(() => {
			res.send({ message: 'Coach deleted successfully' });
		});
});


// fetch initial data
get('https://jsonplaceholder.typicode.com/users').then((response) => {
	// save players to the database
	response.data.forEach((user, index) => {
		db.collection('players').add({
			id: index + 1,
			name: user.name,
			username: user.username,
			email: user.email,
			phone: user.phone,
			website: user.website,
		});
	});
});

// fetch initial data
get('https://jsonplaceholder.typicode.com/posts').then((response) => {
	// save coaches to the database
	response.data.forEach((post, index) => {
		db.collection('coaches').add({
			id: index + 1,
			title: post.title,
			body: post.body,
		});
	});
});
