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

By default the table is splitted after if it exceeds 15 columns. You can change the same as shown below.

jQuery("#testTable").tableSplit({noOfColumns:2});

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

</body>
</html>
