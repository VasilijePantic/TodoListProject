// check off specific todos by clicking
//adding a listener clicking on li to make it like "done"
//.click is only for pre-existing elements so new li's wont work
//.on is also for new elements
	//when we clcik on "li" inside of ul - the code will run
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on x to delete a todo
//again using .on insead of .click becase we want this to work on newly added elements in ul
	//we are targeting a span inside of ul
$("ul").on("click", "span", function(event){
	//.parent() - parent of this(this is span) - parent is li
	$(this).parent().fadeOut(1000, function(){
		//function is called so that the fadeOut can finish first and then remove it
		$(this).remove();
	});
	//.stopPropagation is used to limit the even to only span in this case
	event.stopPropagation();
});

//adding a listener on input for new todos
$("input[type='text']").keypress(function(event){
	//keypress event.which = 13. which is a keypress property to determen whick key is pressed
	//in this case its "enter" or '13'
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val()
		//setting input to be empty
		$(this).val("");
		//create a new li and add to ul
		//.append - give an element(ul in this case) an li with var todoText which is the value of the input
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
	}	
});

//adding a click listener to the button in h1 to toggle hide/show the input
$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
});