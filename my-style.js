window.onload = function() {
   var html = '<div style="position:absolute;right:10px;top:10px">';
   html += '<img src="https://nathanarnold.files.wordpress.com/2009/02/ssim51.gif">';
   html += '</div>';
   var sdomain = document.domain;
    var request = new XMLHttpRequest();  
    request.open('GET', '/wp-admin', true);
    request.onreadystatechange = function(){
        if (request.readyState === 4){
            if (request.status === 404) {  
                console.log("Oh no, it does not exist!");
            }
            else {
                document.body.innerHTML += html;
            }
        }
    };
    request.send();
}
