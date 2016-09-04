(function($) {
	'use strict';
	function generate(data)
	{
		var html='';
		for(var i=0,l=data.length; i<l; i++) {
			html+='<li class="list-group-item">'+data[i].name+' '+data[i].number+'</li>';
		}
		$('#contacts').html(html);
	}
	function searchF() {
		//get search term from the input tag
		var $search,$contacts,searchTerm,$individualcontacts;
		$search=$("#search");
		console.log(search,"search what you want to know");
		console.log($search.val());
		searchTerm=$search.val().toLowerCase();
		console.log(searchTerm,"fetch");
		//getting the contacts list
		$contacts=$("#contacts");
		$individualcontacts=$contacts.children();
		console.log($individualcontacts);
		//loop operation - not matching elements will be hidden
		for(var i=0, l=$individualcontacts.length;i<l;i++) {
			console.log($individualcontacts.eq(i),i,$individualcontacts.eq(i).text());
			var thisTerm;
			thisTerm=$individualcontacts.eq(i).text().toLowerCase();
			console.log(thisTerm,"get");
			if(thisTerm.indexOf(searchTerm)>-1){
				console.log("Found");
				$individualcontacts.eq(i).show();
			} else {
				console.log("Notfound");
				$individualcontacts.eq(i).hide();
			}	
		}
	}
	$(document).ready(function() {
		var $form = $('#form');
		$form.on('submit', function(e) {
			e.preventDefault();
			searchF();
			return false;
		});
		$('#search').on('change keyup', function(){
			searchF();
		});
	    generate([
			{
				"name": "Ashwini",
				"number": "9000564534"
			}, {
				"name": "sucharitha",
				"number": "8990256765"
			}, {
				"name": "Bindhu",
				"number": "9856453423"
			}, {
				"name": "Bhavya",
				"number": "786546353"
			}, {
				"name": "Chandana",
				"number": "7865676599"
			}, {
				"name": "Chethana",
				"number": "7865746577"
			}, {
				"name": "Deepa",
				"number": "8993456765"
			}, {
				"name": "Einkitha",
				"number": "8900345675"
			}, {
				"name": "Fouziya",
				"number": "8993456765"
			}, {
				"name": "Geetha",
				"number": "8993486765"
			}, {
				"name": "Harini",
				"number": "8993456765"
			}, { 
			    "name": "Irfan",
				"number": "8993456465"
		    }
		]);
	});
})(jQuery);