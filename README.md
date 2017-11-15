# TodoListProject

TodoListProject is a simple project that combines jQuery with some 'extensive' CSS.

It is a simpe Todo List. You are able to add/remove a specific Todo. You are also able to set a line-through style option on an already completed Todo. 

As soon as you hover over a list item, trash can icon will appear and you will be able to delete that specific todo. Typing a Todo in the input section will add it to the list.

Clicking on a button in the top right corner will automatically toggle between input being shown or hidden.



Code example:
.keypress/.which/.val/.append are methods I've used to write a Todo and add it's value as a text to the list. 
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

This app is a separe project that combines jQuery,some moderate CSS styling and HTML into a whole, perfecty working app. This is a part of my learning process using Udemy's "Web Developer Bootcamp" course.
