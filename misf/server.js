const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const issues = [{ id: 1, status: 'Open', owner: 'Ravan',
created: new Date('2017-04-11'), effort: 5, 
completionDate: undefined, 
title: 'Error in console when clicking Add',
},
{
 id: 2, status: 'Assigned', owner: 'Eddie',
 created: new Date('2017-04-12'), effort: 14,
 completionDate: new Date('2017-04-20'),
 title: 'Missing bottom border on panel',
}
];

app.get('/api/issues', (req,res) => {
	const metadata = { total_count: issues.length };
	res.json({ _metadata: metadata, records: issues });
});

const validIssueStatus = {
New: true,
Open:true,
Assigned:true,
Fixed:true,
Verified:true,
Closed:true,
};

const issueFieldType = {
id: 'required',
status: 'required',
owner: 'required',
effort: 'optional',
created: 'required',
completionDate: 'optional',
title: 'required',
};

function validateIssue(issue) {
 for (const field in issueFieldType) {
  const type = issueFieldType[field];
 if (!type) {
  delete issue[field];
 }else if (type === 'required' && !issue[field]) {
    return `${field} is required.`;
}
}

if (!validIssueStatus[issue.status])
   return  `${issue.status} is not a valid status.`;

return null;
}

app.post('/api/issues', (req,res) => {
 const newIssue = req.body;
 newIssue.id = issues.length +1;
 newIssue.created = new Date();
if (!newIssue.status)
  newIssue.status = 'New';

const err = validateIssue(newIssue);
if (err) {
 res.status(422).json({message: `Invalid request: ${err}` });
 return;
}

issues.push(newIssue);

res.json(newIssue);
});
app.listen(3000, () => {
  console.log('App started on port 3000');
});
