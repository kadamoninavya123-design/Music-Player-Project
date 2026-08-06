// Select all the elements in the HTML page
// and assign them to a variable
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

// Specify globally used values
let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create the audio element for the player
let curr_track = document.createElement('audio');

// Define the list of tracks that have to be played
let track_list = [
{
	name: "A Stroll Alone",
	artist: "Everet Almond",
	image: "https://tse2.mm.bing.net/th?id=OIP.UHVn5mwz9VS-9kvTpWvjkgHaE5&pid=Api&P=0&h=180",
	path: "A Stroll Alone - Everet Almond.mp3"
},
{
	name: "Doc and Wyatt",
	artist: "Everet Almond",
	image: "https://tse1.mm.bing.net/th?id=OIP.g0s2EWJ0GBDO4hl_doYp0AHaFi&pid=Api&P=0&h=180",
	path: "Doc and Wyatt - Everet Almond.mp3"
},
{
	name: "Head of The Snake",
	artist: "Everet Almond",
	image: "https://wallpapercave.com/wp/eufhwJ7.jpg",
	path: "Head of The Snake - Everet Almond.mp3"
},
{
	name: "Miss U",
	artist: "Everet Almond",
	image: "http://wallpapercave.com/wp/7OheGDE.jpg",
	path: "Miss U - Everet Almond.mp3"
},
{
	name: "Night Owl",
	artist: "Broke For Free",
	image: "https://tse1.mm.bing.net/th?id=OIP.svrTj9IJMpF0dOn0BLyiIQHaFj&pid=Api&P=0&h=180",
	path: "song1.mp3"
},
{
	name: "Enthusiast",
	artist: "Tours",
	image: "https://wallpapercave.com/wp/wp6493106.jpg",
	path: "song2.mp3"
},
{
	name: "Shipping Lanes",
	artist: "Chad Crouch",
	image: "https://tse4.mm.bing.net/th?id=OIP.76dmgPn4DnOozQcKFHlKvgHaFL&pid=Api&P=0&h=180",
	path: "song3.mp3"
},
{
	name: "Devara",
	artist: "Ntr",
	image: "https://png.pngtree.com/thumb_back/fw800/back_pic/05/07/74/75597777195c4a9.jpg",
	path: "song4.mp3"
},
{
	name: "Flow Win",
	artist: "Khan",
	image: "https://png.pngtree.com/background/20230611/original/pngtree-girl-singing-a-song-to-the-crowd-in-a-club-picture-image_3150321.jpg",
	path: "song5.mp3"
},
{
	name: "Flow Win",
	artist: "Prabhas",
	image: "https://png.pngtree.com/back_origin_pic/00/11/10/074f1987bd13f1c81833e4cbf69300e4.jpg",
	path: "song6.mp3"
},
{
	name: "Brand New Baby Girl",
	artist: "Jeremy Korpas",
	image: "https://wallpaperaccess.com/full/1163120.jpg",
	path: "song7.mp3"
},
{
	name: "I Feel Great",
	artist: "Jeremy Korpas",
	image: "https://img.freepik.com/premium-vector/vector-illustration-kids-playing-music-singing_29937-30.jpg?w=2000",
	path: "song8.mp3"
},
{
	name: "Strong Self Esteem",
	artist: "Jeremy Korpas",
	image: "https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-color-atmosphere-campus-singing-program-background-design-backgroundsinging-program-backgroundmicrophonesingergeometric-image_70039.jpg",
	path: "song9.mp3"
},
{
	name: "Highway Nocturne",
	artist: "National Sweetheart",
	image: "https://c8.alamy.com/comp/2RC0BRG/stylish-girl-singing-songs-with-microphone-holding-mic-at-karaoke-posing-against-gray-background-2RC0BRG.jpg",
	path: "song10.mp3"
},
{
	name: "Burlesque",
	artist: "National Sweetheart",
	image: "https://tse2.mm.bing.net/th?id=OIP.P3PYivfyv30Kbv9UBNujhgHaDZ&pid=Api&P=0&h=180",
	path: "song11.mp3"
},
{
	name: "Videodrome",
	artist: "National Sweetheart",
	image: "https://tse1.mm.bing.net/th?id=OIP.wZS2L1kbSWTX_fI_vVaBHQHaEe&pid=Api&P=0&h=180",
	path: "song12.mp3"
},
{
	name: "Sands of Serenity",
	artist: "Patrick Patrikios",
	image: "https://tse4.mm.bing.net/th?id=OIP.OH3b8y3Qlo1byhAfO3rbZAHaGE&pid=Api&P=0&h=180",
	path: "song13.mp3"
},
{
	name: "I Don't Think So",
	artist: "The Soundlings",
	image: "https://cdn2.vectorstock.com/i/1000x1000/34/46/group-kids-dancing-and-singing-a-song-vector-26473446.jpg",
	path: "song14.mp3"
},
{
	name: "Candle Apple Town",
	artist: "National Sweetheart",
	image: "https://i.pinimg.com/736x/8c/08/00/8c080036f9da700a956d6b5a8ad47cbc.jpg",
	path: "song15.mp3"
},
{
	name: "Sugar High",
	artist: "Jeremy Korpas",
	image: "https://tse2.mm.bing.net/th?id=OIP.UHVn5mwz9VS-9kvTpWvjkgHaE5&pid=Api&P=0&h=180",
	path: "song16.mp3"
},
{
	name: "I Feel Great",
	artist: "Jeremy Korpas",
	image: "https://tse1.mm.bing.net/th?id=OIP.g0s2EWJ0GBDO4hl_doYp0AHaFi&pid=Api&P=0&h=180",
	path: "song17.mp3"
},
{
	name: "Bazaar Baliad",
	artist: "Patrick Patrikios",
	image: "https://wallpapercave.com/wp/eufhwJ7.jpg",
	path: "song18.mp3"
},
{
	name: "Mirage Melody",
	artist: "Patrick Patrikios",
	image: "http://wallpapercave.com/wp/7OheGDE.jpg",
	path: "song19.mp3"
},
{
	name: "A Stroll Alone",
	artist: "Everet Almond",
	image: "https://tse1.mm.bing.net/th?id=OIP.svrTj9IJMpF0dOn0BLyiIQHaFj&pid=Api&P=0&h=180",
	path: "song20.mp3"
}
];
loadTrack(track_index);

function loadTrack(track_index) {
	// Clear the previous seek timer
	clearInterval(updateTimer);
	resetValues();
	
	// Load a new track
	curr_track.src = track_list[track_index].path;
	curr_track.load();
	
	// Update details of the track
	track_art.style.backgroundImage = 
		"url(" + track_list[track_index].image + ")";
	track_name.textContent = track_list[track_index].name;
	track_artist.textContent = track_list[track_index].artist;
	now_playing.textContent = 
		"PLAYING " + (track_index + 1) + " OF " + track_list.length;
	
	// Set an interval of 1000 milliseconds
	// for updating the seek slider
	updateTimer = setInterval(seekUpdate, 1000);
	
	// Move to the next track if the current finishes playing
	// using the 'ended' event
	curr_track.addEventListener("ended", nextTrack);
	
	// Apply a random background color
	random_bg_color();
	}
	
	function random_bg_color() {
	// Get a random number between 64 to 256
	// (for getting lighter colors)
	let red = Math.floor(Math.random() * 256) + 64;
	let green = Math.floor(Math.random() * 256) + 64;
	let blue = Math.floor(Math.random() * 256) + 64;
	
	// Construct a color with the given values
	let bgColor = "rgb(" + red + ", " + green + ", " + blue + ")";
	
	// Set the background to the new color
	document.body.style.background = bgColor;
	}
	
	// Function to reset all values to their default
	function resetValues() {
	curr_time.textContent = "00:00";
	total_duration.textContent = "00:00";
	seek_slider.value = 0;
	}
	function playpauseTrack() {
		// Switch between playing and pausing
		// depending on the current state
		if (!isPlaying) playTrack();
		else pauseTrack();
		}
		
		function playTrack() {
		// Play the loaded track
		curr_track.play();
		isPlaying = true;
		
		// Replace icon with the pause icon
		playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
		}
		
		function pauseTrack() {
		// Pause the loaded track
		curr_track.pause();
		isPlaying = false;
		
		// Replace icon with the play icon
		playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
		}
		
		function nextTrack() {
		// Go back to the first track if the
		// current one is the last in the track list
		if (track_index < track_list.length - 1)
			track_index += 1;
		else track_index = 0;
		
		// Load and play the new track
		loadTrack(track_index);
		playTrack();
		}
		
		function prevTrack() {
		// Go back to the last track if the
		// current one is the first in the track list
		if (track_index > 0)
			track_index -= 1;
		else track_index = track_list.length - 1;
		
		// Load and play the new track
		loadTrack(track_index);
		playTrack();
		}
		
		function seekTo() {
			let seekto = curr_track.duration *  (seek_slider.value / 100);
			curr_track.currentTime = seekto;
		}
		function setVolume() {
			curr_track.volume = volume_slider.value / 100;
			
		}
		function seekUpdate() {
			let seekPosition = 0;
		
			if (!isNaN(curr_track.duration)) {
				seekPosition = curr_track.currentTime * (100 / curr_track.duration);
				seek_slider.value = seekPosition;
		
				let currentMinutes = Math.floor(curr_track.currentTime / 60);
				let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
				let durationMinutes = Math.floor(curr_track.duration / 60);
				let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);
		
				if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
				if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
		
				curr_time.textContent = currentMinutes + ":" + currentSeconds;
				total_duration.textContent = durationMinutes + ":" + durationSeconds;
			}
		}