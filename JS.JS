console.log("I exist!");
document.getElementById('source').innerHTML=quote.source;
document.getElementById('translation').innerHTML=quote.translate;
document.getElementById('newQuote').addEventListener('click', function(){
$(function insertQuote() {
    var quoteGet = "";
    $.ajax({
    type : 'GET',
    url : 'https://eda-te-reo.herokuapp.com/api/whakatauki',
    success : function(quote) {
        quoteGet= quote;
        insertQuote()
    }

    });
})
