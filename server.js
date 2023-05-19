import express, { json } from 'express';
import './db.json';

const app = express();
const port = 8000;

app.use(json());

app.get('/players', (req, res) => {
	res.json(db.players);
});

// GET all Videos
app.get('/videos', (req, res) => {
	// const videoLists = [];

	const videos = fetch('http://localhost:3000/players').then((response) =>
		console.log(response)
	);

	res.json(videos);
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});
