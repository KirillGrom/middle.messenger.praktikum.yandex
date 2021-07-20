const express = require('express');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;
const distPath = '/dist';

app.use(express.static(__dirname + distPath));

app.get('/*', (req, res) => {
	res.sendFile(__dirname + `${distPath}/index.html`);
});

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
});
