 <html>
 <body>
<h1> jQuery TableSplit </h1>
<div>
 <h1>Requires</h1>
 jQuery > 1.4
 </div>
 <ul>
 <li>
  First, get a copy of the git repo by running:

    git clone https://github.com/ranjaninagesh/jQuery-tablesplit.git
 </li>
 <li>
  Add the jquery-tablesplit.js to your javascripts folder.
 </li>
 <li>
   Inculde it in your page.
    <div> < <span> script type='text/javascript' src="jquery-tablesplit.js"/ </span> > </div>
 </li>
 </ul>
  <h1> Example Usage </h1>
 <pre> 
<table id='testTable'>
		<tbody>
			<tr> 
					<td>
					 Title 1
					</td>
					<td>
					 Title 2
					</td>
					<td>
					 Title 3
					</td>
				</tr >
				<tr >
					<td >
					 Row 1
					</td>
					<td>
					 Row 1
					</td>
					<td>
					 Row 1
				 	</td>
				</tr>
				<tr>
					<td>
					 Row 2
					</td>
					<td>
					 Row 2
					</td>
					<td>
					 Row 2
					</td>
				</tr>
				<tr>
					<td>
					 Row 3
					</td>
					<td>
					 Row 3
					</td>
					<td>
					 Row 3
					</td>
				</tr>
			</tbody>
		</table>
< script >
jQuery("#yourTableId").tableSplit();
< /script >
</pre>
<h2>Options:</h2>

By default the table is splitted after 15 columns. You can change the same as shown below.

jQuery("#yourTableID").tableSplit({noOfColumns:2});

<h1> Result </h1>

<table>
	<tbody>
		<tr> 
				<td>
				 Title 1
				</td>
				<td>
				 Title 2
				</td>
			</tr >
			<tr >
				<td >
				 Row 1
				</td>
				<td>
				 Row 1
				</td>
			</tr>
			<tr>
				<td>
				 Row 2
				</td>
				<td>
				 Row 2
				</td>
			</tr>
			<tr>
				<td>
				 Row 3
				</td>
				<td>
				 Row 3
				</td>
			</tr>
		</tbody>
</table>
<table>
	<tbody>
		<tr>
		<td>
		 Title 3
		</td>
		</tr>
		<tr>
		<td>
		Row 1
		</td>
		</tr>
		<tr>
		<td>
		Row 2
		</td>
		</tr>
		<tr>
		<td>
		Row 3
		</td>
		</tr>
	</tbody>
</table>

<h1> Example Practical Usage</h1>

When we print large tables with many columns it tends to cut off columns at the end. We can use this plugin to print the columns which cuts off into another page without changing the code for the table.


</body>
</html>
