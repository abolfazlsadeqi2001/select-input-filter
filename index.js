var todoPlans = [
	{title:"solve the trains",teacher:"Nadery",lesson:"dini",classId:12},
	{title:"teach new section",teacher:"Esmaeeli",lesson:" physic ",classId:11},
	{title:"teach new section",teacher:"Esmaeeli",lesson:" chemistry ",classId:10},
	{title:"teach functions",teacher:"Nik-khah",lesson:" dini ",classId:11},
];
var table;
var classSelector;
var lessonSelector;
var classFilter = "all";
var lessonFilter = "all";
// called on startup
function init(){
	// value the general variables
	table = document.querySelector("table");// table
	classSelector = document.querySelector("#classId");// class selector
	classSelector.addEventListener("change",()=>{
		classFilter = classSelector.value.toLowerCase().trim();
		doNewFilters();
	});
	lessonSelector = document.querySelector("#lessonId");// lesson selector
	lessonSelector.addEventListener("change",()=>{
		lessonFilter = lessonSelector.value.toLowerCase().trim();
		doNewFilters();
	});
	// initial the table elements
	todoPlans.forEach((todo)=>{
		todo.lesson = todo.lesson.trim().toLowerCase();
		addRow(todo)
	});
}
// do new filters on table
function doNewFilters(){
	clearTable();
	
	var sameClasses = [];
	todoPlans.forEach(todo=>{// set filter for classId
		if(classFilter == "all" || todo.classId == classFilter){
			sameClasses.push(todo);
		}
	})
	
	var sameLessons = [];
	todoPlans.forEach(todo=>{// set filter for lesson
		if(lessonFilter == "all" || todo.lesson == lessonFilter){
			sameLessons.push(todo);
		}
	})
	
	sameClasses.forEach(classTodo=>{
		sameLessons.forEach(lessonTodo =>{
			if(classTodo == lessonTodo)
				addRow(classTodo)
		});
	});
}
// to clear all rows of a table exclude header row
function clearTable(){
	var rows = document.querySelectorAll("table tr");
	for(var i=0; i<rows.length; i++){
		if(i != 0){
			rows[i].remove();
		}
	}
}
// to add a new row via a to do object
function addRow(obj){
	var row = document.createElement("tr");
	
	var titleColumn = document.createElement("td");
	titleColumn.innerHTML = obj.title;
	row.appendChild(titleColumn);
	
	var teacherColumn = document.createElement("td");
	teacherColumn.innerHTML = obj.teacher;
	row.appendChild(teacherColumn);
	
	var lessonColumn = document.createElement("td");
	lessonColumn.innerHTML = obj.lesson;
	row.appendChild(lessonColumn);
	
	var classColumn = document.createElement("td");
	classColumn.innerHTML = obj.classId;
	row.appendChild(classColumn);
	
	table.appendChild(row);
}