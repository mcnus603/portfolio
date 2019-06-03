
var container1 = document.getElementById("container1");
var projectsInfo = [];

var socialNames = ['LinkedIn', 'Instagram', 'Are.na', 'Github', 'Email'];
var socialLinks = ["https://www.linkedin.com/in/sarahmcnutt/", "https://www.instagram.com/sarah_mcnutt_design/", "https://www.are.na/sarah-mcnutt", "https://github.com/mcnus603", "mailto:hello@sarahmcnutt.me"];
var footer = document.getElementById('footer');

var scrollEl = 'me';

$.getJSON("portfolio.json", function(json){
  projectsInfo = json.content.projects;



	var pathname = document.location.pathname;
	console.log(pathname);

//if select all
	if(pathname == "/selectall.html") {
	
		// footer = document.getElementById('0');
		container1.html = "";
		workHide();
		scrollEl = '0';

		section = projectsInfo[0];
		console.log(section);

		var projectCont = document.createElement('div');

		projectCont.className = 'projectCont';
		var projectInfo = document.createElement('div');
		projectInfo.className = "projectInfo"


		var title = section.title;
		var titleEl = document.createElement('div');
		titleEl.innerHTML = title; 
		titleEl.className = "projTitle"

		var tag = section.tags;
		var tagEl = document.createElement('div');
		tagEl.innerHTML = tag;
		tagEl.className = "projTag";

		projectInfo.appendChild(titleEl);
		projectInfo.appendChild(tagEl);

		var text = section.text; 
		for(var i = 0; i < text.length; i ++){
				var textEl = document.createElement('div');
				textEl.innerHTML = text[i];
				textEl.className = "projText";
				projectInfo.appendChild(textEl);
		}


		var images = section.images;

		projectCont.appendChild(projectInfo);

		for(var i = 0; i < images.length; i++) {
			console.log()
			var el = document.createElement('img');
			el.className = 'projImg';

			var url = images[i];
			el.src = url; 
			projectCont.appendChild(el);
		}


		container1.appendChild(projectCont);

		createFooter();
		
	} else {
		createHomepage();
	}

	

});

function createHomepage() {

	for (var i = 0; i < projectsInfo.length; i++) {

		//left or right
		var r = i%2; 

		var hpContainer = document.createElement('div');
		hpContainer.className = "hpContainer";
		if(r == 0) {
			hpContainer.classList.add('leftHp');
		} else {
			hpContainer.classList.add('rightHp');
		}

		var textContainer = document.createElement('div');
		textContainer.className = 'hpTextCont';

		var imgUrl = projectsInfo[i].hpImage;
		var imgEl = document.createElement('img');
		imgEl.className = "hpImg"
		imgEl.src = imgUrl;

		var title = projectsInfo[i].title;
		var titleEl = document.createElement('div');
		titleEl.className = 'hpTitle';
		titleEl.innerHTML = title

		var tag = projectsInfo[i].tags;
		var tagEl = document.createElement('div');
		tagEl.className = 'hpTag';
		tagEl.innerHTML = tag;

		var desription = projectsInfo[i].description;
		descripEl = document.createElement("div");
		descripEl.innerHTML = desription;
		descripEl.className = "hpDescrip";

		var more = document.createElement('div');
		more.innerHTML = "[more]";
		more.className = "more";

		hpContainer.id = i;
		imgEl.id = i;
		titleEl.id = i;
		descripEl.id = i;
		more.id = i;

		hpContainer.appendChild(imgEl);
		textContainer.appendChild(titleEl);
		textContainer.appendChild(tagEl);
		textContainer.appendChild(descripEl);
		textContainer.appendChild(more);
		hpContainer.appendChild(textContainer);
		container1.appendChild(hpContainer);


		//add event listeners

		hpContainer.addEventListener('click', function(e){ 
			

			var num = e.srcElement.id;
			scrollEl = num;
	
			container1.innerHTML = "";
			makeAWorkPage(num);

	


		});

		imgEl.addEventListener('mouseover', function(e){
			// imgEl.style.cursor = "wait";
		});
		imgEl.addEventListener('mouseleave', function(e){

		});

	
	}


		// console.log($(scrollEl));
		// $(scrollEl).scrollTop(0);
		var elmnt = document.getElementById(scrollEl);
		elmnt.scrollIntoView()

}

function headerEventListeners() {
	//HEADER EVENT LISTENTER
	document.getElementById('about').addEventListener('click', function(e){
		console.log('hello');
		container1.innerHTML = "";

		removeFooter();

		var aboutCont = document.createElement('div');
		aboutCont.innerHTML = "Sarah McNutt a New York based Graphic Designer. Born in Pennsylvania, she is graduating witha B.F.A. in Communication Design and a minor in Creative Coding from Parsons School of Design. She is constantly working between print and digital designs.";
		aboutCont.className = 'bio';
		container1.appendChild(aboutCont);

		for( var i = 0; i < socialNames.length; i++) {
			var container = document.createElement('a');
			container.href = socialLinks[i];
			container.className = 'socialCont';
			container.target = "_blank"

			var text = document.createElement('div');
			text.innerHTML = socialNames[i];
			text.className = 'social';

			var image = document.createElement('img');
			image.src = "images/arrow.png";
			image.className = 'arrow';

			container.appendChild(image);
			container.appendChild(text);
			container1.appendChild(container);

			document.body.style.backgroundColor = "yellow";
			document.getElementById('newHeader').style.backgroundColor = "yellow";

		}

		
		workHide();
		
	});

	document.getElementById('me').addEventListener('click', function(e){
		document.body.style.backgroundColor = "white";
		document.getElementById('newHeader').style.backgroundColor = "white";

		var hpCons = [];
		hpCons = document.getElementsByClassName('hpContainer');

		if(hpCons[0]){

		} else {
			container1.innerHTML = "";
			createHomepage();
			removeFooter();
			var noneB = document.getElementById('noneB'); 
			noneB.innerHTML = "Selected Work";
			noneB.id = "work";
		}
	});
}

function makeAWorkPage(name){

	workHide();
	$('html,body').scrollTop(0);

	var section = projectsInfo[name]; 
	console.log(section);

	var projectCont = document.createElement('div');

	projectCont.className = 'projectCont';
	var projectInfo = document.createElement('div');
	projectInfo.className = "projectInfo"


	var title = section.title;
	var titleEl = document.createElement('div');
	titleEl.innerHTML = title; 
	titleEl.className = "projTitle"

	var tag = section.tags;
	var tagEl = document.createElement('div');
	tagEl.innerHTML = tag;
	tagEl.className = "projTag";

	projectInfo.appendChild(titleEl);
	projectInfo.appendChild(tagEl);

	var text = section.text; 
	for(var i = 0; i < text.length; i ++){
			var textEl = document.createElement('div');
			textEl.innerHTML = text[i];
			textEl.className = "projText";
			projectInfo.appendChild(textEl);
	}


	var images = section.images;

	projectCont.appendChild(projectInfo);

	for(var i = 0; i < images.length; i++) {
		console.log()
		var el = document.createElement('img');
		el.className = 'projImg';

		var url = images[i];
		el.src = url; 
		projectCont.appendChild(el);
	}


	container1.appendChild(projectCont);

	createFooter();
}


function workHide(){

	var work = document.getElementById('work');

	if(work) {
		work.innerHTML = "";
		work.id = "noneB";
		// work.style.display = "none";

		work.addEventListener('click', function(e){
			container1.innerHTML = "";
			createHomepage();
			removeFooter()

			var noneB = document.getElementById('noneB'); 
			noneB.innerHTML = "Slected Work";
			noneB.id = "work";
		});

	}

}

function createFooter() {
	var back = document.createElement('div');
	back.id = "back";
	back.innerHTML = "Back";

	var next = document.createElement('div');
	next.id = "next";
	next.innerHTML = "Next";

	footer.appendChild(back);
	footer.appendChild(next);

	//back event listener
	back.addEventListener('click', function(e){
			container1.innerHTML = "";
			createHomepage();
			removeFooter();
			var noneB = document.getElementById('noneB'); 
			noneB.innerHTML = "Slected Work";
			noneB.id = "work";
	});

	//next event listener 

	next.addEventListener('click', function(e){
		nextPage(scrollEl);
	});
}

function removeFooter(){
	var next = document.getElementById('next');
	var back = document.getElementById('back');

	if(next){
		footer.removeChild(next);
	}

	if(back) {
		footer.removeChild(back);
	}
	
}


headerEventListeners();

function nextPage(id) {
	var newId = Number(id) + 1;
	

	if(newId == (projectsInfo.length)) {

		newId = 0;
	}

	console.log(newId);

	scrollEl = newId;
		
	container1.innerHTML = "";
	removeFooter();
	makeAWorkPage(newId);

}







