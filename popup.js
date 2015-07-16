$(document).ready(function(){
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
});

function makeLinks(data, ulist) {

	var i = 0
	for (i = 0; (i < 10 && (data.getElementsByTagName("item")[i] != null)); i += 1) {
		var item = data.getElementsByTagName("item")[i];
		var newListElem = document.createElement("li");
		var a = document.createElement("a");
		a.textContent = item.getElementsByTagName("title")[0].firstChild.nodeValue;
		a.setAttribute('href', item.getElementsByTagName("link")[0].firstChild.nodeValue);
		newListElem.appendChild(a)
		ulist.appendChild(newListElem)
		console.log(item)
		console.log(item.getElementsByTagName("title")[0].firstChild.nodeValue)
		console.log(newListElem)
	}

}

function loadPolitics(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticPoliticsChannel?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("politics"));
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.politics').addEventListener('click', loadPolitics);
})

function loadBusiness(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticBusinessChannel?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("business"));
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.business').addEventListener('click', loadBusiness);
})


function loadCulture(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticCulture?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("culture"));

		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.culture').addEventListener('click', loadCulture);
})

function loadGlobal(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticInternational?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("global"));

		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.global').addEventListener('click', loadGlobal);
})

function loadTech(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticScienceAndTechnology?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("tech"));
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.tech').addEventListener('click', loadTech);
})


function loadUS(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticNational?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("us"));

		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.us').addEventListener('click', loadUS);
})


function loadHealth(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticFood?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("health"));

		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.health').addEventListener('click', loadHealth);
})

function loadSexes(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticSexesChannel?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("sexes"));
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.sexes').addEventListener('click', loadSexes);
})


function loadEducation(e) {
	$.ajax({
		url: "http://feeds.feedburner.com/AtlanticEducationChannel?fmt=xml",
		type: 'GET',
		success: function(data) {
			makeLinks(data, document.getElementById("education"));
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button.education').addEventListener('click', loadEducation);
})
