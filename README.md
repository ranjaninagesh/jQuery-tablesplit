 <html>
 <body>
<h1> jQuery TableSplit </h1>
<div>
 <h1>Requires</h1>
 jQuery > 1.4
 </div>
 <div>
  First, get a copy of the git repo by running:

    git clone https://github.com/ranjaninagesh/jQuery-tablesplit.git
    </div>
  <h1> Example Usage </h1>
 <pre> 
< html >
< head >
< script src="http://code.jquery.com/jquery-1.11.1.min.js"></script >
< script src="jquery-tablesplit.js"></script >
< /head >
< body >
< table id='testTable' >
		< tbody >
			< tr > 
					< td >
					 Title 1
					< /td >
					< td >
					 Title 2
					< /td >
					< td >
					 Title 3
					< /td >
				< /tr >
				< tr >
					< td >
					 Row 1
					< /td >
					< td >
					 Row 1
					< /td >
					< td >
					 Row 1
				 	< /td >
				< /tr >
				< tr >
					< td >
					 Row 2
					< /td >
					< td >
					 Row 2
					< /td>
					< td >
					 Row 2
					< /td >
				< /tr >
				< tr >
					< td >
					 Row 2
					< /td >
					< td >
					 Row 2
					< /td >
					< td >
					 Row 2
					< /td >
				< /tr >
				< tr >
					< td >
					 Row 3
					< /td >
					< td >
					 Row 3
					< /td >
					< td >
					 Row 3
					< /td >
				< /tr >
			< /tbody >
		< /table >
< script >
jQuery("#testTable").tableSplit();
< /script >
<  /body >
< /html  >
</pre>
<h2>Options:</h2>

By default the table is splitted after if it exceeds 15 columns. You can change the same as shown below.

jQuery("#testTable").tableSplit({noOfColumns:4});
</body>
</html>
