function makeGrid() {
var rows = $("#input_height").val(); // return value from height input
var cols = $("#input_width").val(); // return value from width input

var table = $("#pixel_canvas"); // targeting table

table.children().remove(); // removing old table each time we generate new table

for (var i = 0; i < rows; i++) { //generating table
	table.append("<tr></tr>");
	for (var x = 0; x < cols; x++) {
		table.children().last().append("<td></td>");
	}
}

// // Coloring table

table.on("click", "td", function(){
	var color = $("#color_picker").val();
	$(this).attr("bgcolor", color);
});

};

$("#submit").click(function(evt) {
  evt.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});


