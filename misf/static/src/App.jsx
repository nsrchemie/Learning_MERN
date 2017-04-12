const issues = [{ id: 1, status: 'Open', owner: 'Ravan',
created: new Date('2017-04-11'), effort: 5, completionDate: undefined, title: 'Error in console when clicking Add',
},
{
 id: 2, status: 'Assigned', owner: 'Eddie',
 created: new Date('2017-04-12'), effort: 14,
 completionDate: new Date('2017-04-20'),
 title: 'Missing bottom border on panel',
}
];

  const contentNode = document.getElementById('contents');
  
  class IssueFilter extends React.Component {
     render() {
       return (
        <div>Filter</div>
)}}

 class IssueRow extends React.Component {
   render() {
     const borderedStyle = {border: "1px solid silver", padding: 4};
     return (
      <tr>
        <td style={borderedStyle}>{this.props.children}</td>
	<td style={borderedStyle}>{this.props.issue_title}</td>
     </tr>
)}}

IssueRow.propTypes = {
 issue_id: React.PropTypes.number.isRequired,
 issue_title: React.PropTypes.string
};

  class IssueTable extends React.Component {
     render() {
      const borderedStyle = {border: "1px solid silver", padding: 6};
	 return (
          <table style={{borderCollapse: "collapse"}}>
	   <thead>
	    <tr>
	     <th style={borderedStyle}>Id</th>
	     <th style={borderedStyle}>Title</th>
	    </tr>
	  </thead>
	 <tbody>
	   <IssueRow issue_id={1}>
	Error in console when clicking Add</IssueRow>
	   <IssueRow issue_id={2}>
	    "Missing bottom border"</IssueRow>
         </tbody>
	</table>
)}}

  class IssueAdd extends React.Component {
     render() {
       return (
        <div>Add</div>
)}}
  class IssueList extends React.Component {
     render() {    
       return (
	<div>
	<h1>Issue Tracker</h1>
	<IssueFilter />
	<hr />
	<IssueTable issues={issues}/>
	<hr />
	<IssueAdd />
	</div>
	);
    }}

  ReactDOM.render(<IssueList />, contentNode);

