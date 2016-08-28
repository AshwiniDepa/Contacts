
function searchF() {
	//get search term from the input tag
	var search,contacts,searchTerm;
	search=document.getElementById("search");
	console.log(search,"search what you want to know");
	console.log(search.value);
	searchTerm=search.value.toLowerCase();
	console.log(searchTerm,"fetch");
	//getting the contacts list
	contacts=document.getElementById("contacts");
	console.log(contacts.children);
	//loop operation - not matching elements will be hidden
	for(var i=0, l=contacts.children.length;i<l;i++) {
		console.log(contacts.children[i], i,contacts.children[i].innerHTML);
		var thisTerm;
		thisTerm=contacts.children[i].innerHTML.toLowerCase();
		console.log(thisTerm,"get");
		if(thisTerm.indexOf(searchTerm)>-1){
			console.log("Found");
			contacts.children[i].style.display="block";
		} else {
			console.log("Notfound");
			contacts.children[i].style.display="none";
		}
		
    }
}
