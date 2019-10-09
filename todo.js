const options = {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};

const date = new Date();

document.getElementById('date').innerHTML = date.toLocaleDateString('en-GB', options);

function getElementById(asdf){
	return "element with id "+asdf
}

console.log(getElementById("a cool id"))

let input = document.getElementById("input");

let card = document.getElementById("card");

function doSomething(){
	console.log("i'm doing something")
	return "a cool value"
}


let resultOfDosomting = doSomething()
console.log("result of doSomething",resultOfDosomting)

function insertItem(value){
	itemList.insertAdjacentHTML('beforeend', '<ul class="list"><li class="list-item"><input type="checkbox" name="checkbox" id="checkbox">'+value+'<i class="far fa-trash-alt" id="trash"></i></li></ul>');
	let trash = document.getElementById("trash");
	trash.removeAttribute('id');
	trash.addEventListener('click', function(e) {
		console.log(e);
		trash.parentNode.parentNode.removeChild(trash.parentNode);
	})
}

document.getElementById("plus").addEventListener('click', function(e) {
	console.log(e)
	if (input.value.length >0) {
		insertItem(input.value);
		input.value = "";
		input.focus();

		ööö
	}
});

let itemList = document.getElementById("item-list");

let numberOfItems = itemList.childNodes;

document.getElementById("clear").addEventListener('click', function(e) {
	console.log(e);
	while (numberOfItems.length > 0) {
		itemList.removeChild(itemList.firstChild);
		numberOfItems.length--;
	}
})