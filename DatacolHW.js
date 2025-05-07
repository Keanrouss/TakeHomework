let csv = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26'

let cell = ''
let table = []
let row = []

for (let i = 0; i < csv.length; i++) {
	let char = csv[i] 

	if (char !== ',' && char !== '\n') {
		cell = cell + char
	} 

	if (char === ',') {
		row.push(cell)
		cell = ''
	} 

	if (char === '\n' || i === csv.length - 1) {
		row.push(cell)
		cell = ''
		table.push(row)
		row = []
	}
}

console.log(table)




// let row = ''
// let cell = ''

// for (let i = 0; i < csv.length; i++) {
// 	let char = csv[i]
	
// 	if (char !== ',' && char !== '\n') {
// 		cell = cell + char 
// 	}

// 	if (char === ",") {
// 		row = row + " " + cell  // ID Name
// 		cell = ''
// 	} else if (char === "\n" || i === csv.length - 1) {
// 		row = row + " " + cell
// 		cell = ''
// 		console.log(row)
// 		row = ''
// 	}
// }

/*

ID Name Occupation Age
42 Bruce Knight 41

*/
//Part 3//
let table_obj = []
let row_template = {
 id: undefined,
 name: undefined,
 occupation: undefined,
 age: undefined
}
for (let r=1; r < table.length; r++) {
 let row = JSON.parse(JSON.stringify(row_template));
 row.id = table[r][0];
 row.name = table[r][1];
 row.occupation = table[r][2];
 row.age = table[r][3];
 table_obj.push(row);
}
console.log(table_obj)

//Part 4//

let table_obj_new = JSON.parse(JSON.stringify(table_obj));
table_obj_new.pop();
table_obj_new.splice(1, 0, {id: "48", name: "Barry", occupation: "Runner", age: "25"});
table_obj_new.push({id: "7", name: "Bilbo", occupation: "None", age: "111"});

console.log(table_obj_new);