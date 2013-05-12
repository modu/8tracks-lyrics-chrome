$(document).ready(function(){  
  $("#sidebar").append('<input type="button" id="getLyrics" value="Get"/>');
  $("#sidebar").append('<div id = "lyrics" style="overflow-y: auto; width: 301px; height: 400px;">Lyrics</div>');
  
  $("#getLyrics").click(GetLyrics);						// call normal function to get lyrics

  $("#player_skip_button").on("click",GetLyrics);		//call normal function to get lyrics when a song is skipped
  
  //$("#next_mix_button").on("click",{ name:"FromNextMix"} ,GetLyrics);
  
  // call normal function to get lyrics of new song when user skips the playlist
});
  
 function GetLyrics(){
 
  console.log("Handler for .click() called.");
  var track = $("#now_playing").find(".t").html();
  var artist = $("#now_playing").find(".a").html();
  
  //Replace whitespace with underscore
  track = track.replace(/ /gi,'_');
  artist = artist.replace(/ /gi,'_');
  alert("Inside get lyrics function");
  console.log(track + " - " + artist);
  
  $("#lyrics").load("http://lyrics.wikia.com/api.php?artist=" + artist + "&song=" + track + "&fmt=json&X-Wikia-API-Key=d728c02d80061d1dd54006a9924c1e7a5243f539",function(){
    var text = $('#lyrics').html();
    var url = text.substring(text.search('http'),text.search('}')-2);
    $('#lyrics').load(url+" .lyricbox");
	});
};	