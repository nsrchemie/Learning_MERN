const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/api/issues', (req,res) => {
	const metadata = { total_count: issues.length };
	res.json({ _metadata: metadata, records: issues });
});

app.post('/api/issues', (req,res) => {
 const newIssue = req.body;
 newIssue.id = issues.length +1;
 newIssue.created = new Date();
if (!newIssue.status)
  newIssue.status = 'New';

issues.push(newIssue);

res.json(newIssue);
});
app.listen(3000, () => {
  console.log('App started on port 3000');
});
