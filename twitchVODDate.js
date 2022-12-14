// ==UserScript==
// @name            TwitchVOD Date
// @namespace       TVODD
// @description     Replace "X days ago" with the actual date of the VOD on Twitch VOD pages
// @copyright       Nitatemic
// @icon
//
//
// @match           https://*.twitch.tv/*
// @match           https://*.twitch.tv/*/videos/*
//
// @version         0.0.4
// ==/UserScript==

function showTrueDate() {
	console.log("showTrueDate() called")
	/* Select all element with data-test-selector="preview-card-image-link" */
	let videos = document.querySelectorAll('[data-a-target="preview-card-image-link"]');
	videos.forEach(function(video) {
		/* Get the img child element  */
		let img = video.getElementsByClassName('tw-image')[0];
		/* Get the title of the video */
		let title = img.getAttribute('title');
		/* Get the actual date of the video select with class tw-media-card-stat */
		let date = video.getElementsByClassName('tw-media-card-stat')[2];
		/* Replace the date with the actual date */
		date.innerText = title;
	});
}

window.onload = function(){
	showTrueDate()
}

/* Run the function every 10 seconds */
setInterval(showTrueDate, 10000);
