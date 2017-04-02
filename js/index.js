var quote="";
var author="";
var col=['16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', "#73A857"];
function getQuote(){
 
  $.ajax({
     headers: {
      "X-Mashape-Key": "1rcjSPPpQhmshx7GLfqfTr7iy5KRp1L6UW4jsnGunNhDtLkizB"
      
    },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',


   success: function(data) {
        var post = JSON.parse(data);
        $('#author-name').text(post.author);
        $('#text').html(post.quote);
  quote = $('#text > p').text();
      author = $('#author-name').text();
     $('#tweet').attr('href','https://twitter.com/intent/tweet?hashtags=quote&related=quotebot&text='+encodeURIComponent('"' + quote + '" ' + author));
    
 var color=Math.floor(Math.random()*col.length);
$("button").click(function(){
        $("body").css({"background-color":col[color]});
  $(".btn,.fa-twitter").css({"background-color":col[color]});
 $(".quote-text").animate({
          opacity: 0
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 100);
          $('#text').text(post.quote);
        });
      $(".author").animate({
          opacity: 0
        }, 100,
        function() {
          $(this).animate({
            opacity: 1
          }, 100);
          $('#author-name').html(post.author);
        });
    });
    
       
  },
    
    error: function(){
			$('#quote').text("Some unexpected error occurred. Please try again later.");
			$('#author').text("~ Your Computer.");
		},
    
		cache:false
     
     
  });
}


$(document).ready(function(){
  getQuote();
  	$('#quote-btn').on("click",function(e){
    getQuote();
	});
  
});