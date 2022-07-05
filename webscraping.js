<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  
    <p id="paraId"></p>
    <script>
    var dd=document.querySelectorAll("dd");
    let movies = [];
    var xhr=new XMLHttpRequest();
    xhr.open("GET","https://cors-anywhere.herokuapp.com/https://time.com/",true);
    xhr.responseType="document";
    xhr.onload=function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
           var response=xhr.responseXML.querySelectorAll(".most-popular-feed__item-container li").each(function(el , index){
        let link = $(this).find('li.most-popular-feed__item div a').prop('href');
        let title = $(this).find('li.most-popular-feed__item h3').text();
    
        movies.push({ title: title, link : link});
    });
    console.log(movies);
    document.getElementById("paraId").innerHTML =movies;
}
    };
    xhr.onerror=function(){
        console.log(xhr.status,shr.statusText);
    }
    xhr.send();
    </script>
</body>
</html>
