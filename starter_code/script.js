const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = fruit.filter((a)=>str.test(a));
	return results;
}

function searchHandler(e) {
	// TODO
	if(input.value===""){
		showSuggestions("",1);
	} else {
		showSuggestions(search(new RegExp(`${input.value.trim()}`, 'i')));
	}
}

function showSuggestions(results, inputVal) {
	if(results.length === 0){
		suggestions.innerHTML = "";
		return;
	}
	t = "";
	for(let i = 0; i < chooseValue(results.length, 5); i++){
		t+=`<li>${results[i]}</li>`;
	}
	suggestions.innerHTML = t;
}
const chooseValue = (arrLength, max) => arrLength <= max ? arrLength : max;
function useSuggestion(e) {
	if(e.target.tagName !== 'LI'){
		return
	}
	input.value = e.target.innerHTML;
	showSuggestions([],1);
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);