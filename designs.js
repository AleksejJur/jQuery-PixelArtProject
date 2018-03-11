function makeGrid() {
const rows = $("#input_height").val(); // return value from height input
const cols = $("#input_width").val(); // return value from width input

const table = $("#pixel_canvas"); // targeting table

table.children().remove(); // removing old table each time we generate new table

for (let i = 0; i < rows; i++) { //generating table
	table.append("<tr></tr>");
	for (let x = 0; x < cols; x++) {
		table.children().last().append("<td></td>");
	}
}

// // Coloring table

table.on("click", "td", function(){
	let color = $("#color_picker").val();
	$(this).attr("bgcolor", color);
});

};

$("#submit").click(function(evt) {
  evt.preventDefault(); //Required to avoid submit and page reload
  makeGrid();
});


