let card = document.createElement("div")
card.setAttribute("class","card")

let listTitle = document.createElement("div")
listTitle.setAttribute("class", "list-title")

let clear = document.createElement("i")
clear.setAttribute("class", "fas fa-undo-alt")

let date = document.createElement("h1")
date.setAttribute("class", "date")

let itemList = document.createElement("div")
itemList.setAttribute("id", "item-list")

let inputContainer = document.createElement("div")
inputContainer.setAttribute("class", "input")

let plus = document.createElement("i")
plus.setAttribute("class", "fas fa-plus-circle")

let input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("name", "input")

function addChildren(parent,children){
	for (let i = 0; i < children.length; i++){
		parent.appendChild(children[i])
	}
}

addChildren(document.body,[card])
addChildren(card,[listTitle,itemList,inputContainer])
addChildren(listTitle, [date, clear])
addChildren(inputContainer, [plus, input])



const options = {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};
const today = new Date();

date.innerHTML = today.toLocaleDateString('en-GB', options);




function insertItem(value){
	let list = document.createElement("ul")
	list.setAttribute("class","list")

	let listItem = document.createElement("li")
	listItem.setAttribute("class","list-item")

	let text = document.createElement("span")
	text.setAttribute("class","list-item")
	text.innerText = input.value
	
	let checkbox = document.createElement("input")
	checkbox.setAttribute("type","checkbox")
	checkbox.setAttribute("name","checkbox")

	let trash = document.createElement("i")
	trash.setAttribute("class","far fa-trash-alt")

	addChildren(itemList,[list])
	addChildren(list,[listItem])
	addChildren(listItem,[checkbox,text,trash])

	trash.addEventListener('click', function(e) {
		console.log(e);
		trash.parentNode.parentNode.removeChild(trash.parentNode);
	})
}

plus.addEventListener('click', function(e) {
	console.log(e)
	if (input.value.length >0) {
		insertItem(input.value);
		input.value = "";
		input.focus();
	}
});


let numberOfItems = itemList.childNodes;

clear.addEventListener('click', function(e) {
	console.log(e);
	while (numberOfItems.length > 0) {
		itemList.removeChild(itemList.firstChild);
		numberOfItems.length--;
	}
})