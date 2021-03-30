chooseStory();
function chooseStory()
{
	let html = '';
	html = '<div class="col-md-12 col-sm-12">'+
					'<h5>Choose a story</h5>';
					for (let i = 0; i < stories.length; i++) {
					  html +='<button id="'+i+'" class="selectStory">'+stories[i].title+'</button>';
					}
				html+='</div>';

	document.getElementById('content').innerHTML = html;
	 x = document.getElementsByClassName("selectStory");
	for(let i = 0; i < x.length; i++) {
		x[i].addEventListener('click', words);
	}
}

function words()
{
	console.log(this.id);
	$story = this.id;
	let html = '';
	html = '<div class="col-md-12 col-sm-12">'+
				'<h5>Provide the following words</h5>'+
				'<form id="myForm">';
				for (let i = 0; i < stories[$story].words.length; i++) {
					const word = stories[$story].words[i];
					html +='<input type="text" name="'+word+'" placeholder="'+word+'">';
				}
				html +='<input type="hidden" name="story" value="'+$story+'">'+
				'<button id="myFormButton" type="submit">Read Story</button>'+
				'</form>'
			'</div>';

	document.getElementById('content').innerHTML = html;

	document.getElementById('myFormButton').onclick = function (e) {
		e.preventDefault();
		let input = document.querySelector('#myForm');
		let c2 = input.childNodes;
		const word = {};

		for (let i = 0; i < (c2.length)-2; i++) {
			const name = c2[i].name;
			const value = c2[i].value;
			word[name] = value;
		}
		let myStory = stories[myForm.elements["story"].value].output(word);

		let html = '';
		html = '<div class="col-md-12 col-sm-12">'+
					'<div class="container">'+
						'<h4>Mission Statement</h4>'+
						myStory+
					'</div>'+
					'<button id="chooseStory">Create another story</button>'+
				'</div>';

		document.getElementById('content').innerHTML = html;

		document.getElementById('chooseStory').addEventListener("click", chooseStory);
	}
}