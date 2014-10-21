/*
 * Author: Andrea Fassina
 * Date: 20-10-2014
 * Creative Commons ShareALike License 2.0
 * TU Delft
 * Web Science Engineering IFML WebRatio
 * Embeds a YouTube video obtained from an entity.
*/

var showiframe = showiframe || {};

showiframe.show = (function ($) {
	var url, element, iframe;
        /*
         * Initializes screen components.
         */
        function init() {
	    //alert("HELLO");
            var el = jQuery( ".value.col-md-10" );
            var el1 = el.attr('id','ytplayer');
            var url_video_element = el.find('a:first');
            var id_of_element = url_video_element;
            var url_of_video = url_video_element.attr('href');
	    //console.log("URL OF VIDEO: "+url_of_video);
            var id = youtube_parser(url_of_video);
            embedVideo(id);
            return id;
        }
        //From http://stackoverflow.com/questions/18336873/
        function youtube_parser(url){
	    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    if (match&&match[7].length==11){
		return match[7];
	    }else{
		//console.log("Wrong URL");}
	}

        function embedVideo(id) {
	  var tag = document.createElement('script');
	  tag.src = "https://www.youtube.com/player_api";
	  var firstScriptTag = document.getElementsByTagName('script')[0];
	  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          //console.log("Added script... for video with id "+id);
	  var player;
	  function onYouTubePlayerAPIReady() {
            //console.log("Loaded youtube api");
	    player = new YT.Player('ytplayer', {
	      height: '390',
	      width: '640',
	      videoId: id
	    });
        }}
        
	return {            
            init: init            
        };	
}(showiframe || {}, jQuery));
