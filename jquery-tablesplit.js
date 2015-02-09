(function ( $ ) {
$.fn.tablesplit = function( options ) {
// This is the easiest way to have default options.
var settings = $.extend({
// These are the defaults.
noOfColumns: 15
}, options );
// Greenify the collection based on the settings variable.
 var tableOne = $(this).addClass('tablesplit1');
  var tableTwo = tableOne.clone().addClass('tablesplit2').appendTo('body');

  // number of rows in table
  var numOfRows = tableOne.find('tr').length;

  // select rows of each table
  var tableOneRows = tableOne.find('tr');
  var tableTwoRows = tableTwo.find('tr');

  // loop through each row in table one.
  // since table two is a clone of table one,
  // we will also manipulate table two at the same time.
  tableOneRows.each(function(index){
  // save row for each table
  var trOne = $(this);
  var trTwo = tableTwoRows.eq(index);
   var removeCount = settings.noOfColumns -1
  // remove columns greater than noOfColumns from table one
  trOne.children(':gt('+removeCount+')').remove();
  trTwo.children(':lt('+(removeCount+1)+')').remove();
});
};
}( jQuery ));