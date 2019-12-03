var api_key= "52dc9252efca45afb983088f26a698fd"
var api_request= "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=52dc9252efca45afb983088f26a698fd"

var request = new XMLHttpRequest()
var technology;
var id;
var name;
var title;
var description;
var url;
var urlImage;


request.open('Get',api_request,true)

request.onload= function(){
    technology=JSON.parse(this.response)

        var sources = technology['articles']
        id= sources[0]['source']['id']
        name = sources[0]['source']['name']
        title = sources[0]['title']
        description = sources[0]['description']
        url = sources[0]['url']
        urlImage = sources[0]['urlToImage']
        console.log(id,name,description)
    
        id1= sources[1]['source']['id']
        name1 = sources[1]['source']['name']
        title1 = sources[1]['title']
        description1 = sources[1]['description']
        url1 = sources[1]['url']
        urlImage1 = sources[1]['urlToImage']
        console.log(id1,name1,description1)
    
        id2= sources[2]['source']['id']
        name2 = sources[2]['source']['name']
        title2 = sources[2]['title']
        description2 = sources[2]['description']
        url2 = sources[2]['url']
        urlImage2 = sources[2]['urlToImage']
        console.log(id2,name2,description2)
        
        id3= sources[3]['source']['id']
        name3 = sources[3]['source']['name']
        title3 = sources[3]['title']
        description3 = sources[3]['description']
        url3 = sources[3]['url']
        urlImage3 = sources[3]['urlToImage']
        console.log(id3,name3,description3)

        id4 = sources[4]['source']['id']
        name4 = sources[4]['source']['name']
        title4 = sources[4]['title']
        description4 = sources[4]['description']
        url4 = sources[4]['url']
        urlImage4 = sources[4]['urlToImage']
        console.log(id4,name4,description4)

        id5= sources[5]['source']['id']
        name5 = sources[5]['source']['name']
        title5 = sources[5]['title']
        description5 = sources[5]['description']
        url5 = sources[5]['url']
        urlImage5 = sources[5]['urlToImage']
        console.log(id5,name5,description5)

        id6= sources[6]['source']['id']
        name6 = sources[6]['source']['name']
        title6 = sources[6]['title']
        description6 = sources[6]['description']
        url6 = sources[6]['url']
        urlImage6 = sources[6]['urlToImage']
        console.log(id6,name6,description6)

        id7= sources[7]['source']['id']
        name7 = sources[7]['source']['name']
        title7 = sources[7]['title']
        description7 = sources[7]['description']
        url7 = sources[7]['url']
        urlImage7 = sources[7]['urlToImage']
        console.log(id7,name7,description7)

        id8= sources[8]['source']['id']
        name8 = sources[8]['source']['name']
        title8 = sources[8]['title']
        description8 = sources[8]['description']
        url8 = sources[8]['url']
        urlImage8 = sources[8]['urlToImage']
        console.log(id8,name8,description8)

   addNewsToHTML();
};

function addNewsToHTML(){

    var image0 = document.getElementById('image1');
    var title0= document.getElementById('title1');
    var text0 = document.getElementById('text1');
    var link0 = document.getElementById('link1');

    
    if(urlImage == null)
    {
        image0.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image0.src = urlImage;
    }

    title0.innerHTML = title;
    text0.innerHTML = description;
    link0.href = url;

    var image1 = document.getElementById('image2');
    var title_1= document.getElementById('title2');
    var text1= document.getElementById('text2');
    var link1 = document.getElementById('link2');

    if(urlImage1 == null)
    {
        image1.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image1.src = urlImage1;
    }

    title_1.innerHTML = title1;
    text1.innerHTML = description1;
    link1.href = url1;

    var image2 = document.getElementById('image3');
    var title_2= document.getElementById('title3');
    var text2= document.getElementById('text3');
    var link2 = document.getElementById('link3')

    if(urlImage2 == null)
    {
        image2.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image2.src = urlImage2;
    }

    title_2.innerHTML = title2;
    text2.innerHTML = description2;
    link2.href = url2;
    
    var image3 = document.getElementById('image4');
    var title_3= document.getElementById('title4');
    var text3= document.getElementById('text4');
    var link3 = document.getElementById('link4')

    if(urlImage3 == null)
    {
        image3.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image3.src = urlImage3;
    }
    
    title_3.innerHTML = title3;
    text3.innerHTML = description3;
    link3.href = url3;

    var image4 = document.getElementById('image5');
    var title_4= document.getElementById('title5');
    var text4= document.getElementById('text5');
    var link4 = document.getElementById('link5')

    if(urlImage4 == null)
    {
        image4.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image4.src = urlImage4;
    }

    title_4.innerHTML = title4;
    text4.innerHTML = description4;
    link4.href = url4;

    var image5 = document.getElementById('image6');
    var title_5= document.getElementById('title6');
    var text5= document.getElementById('text6');
    var link5 = document.getElementById('link6')

    if(urlImage5 == null)
    {
        image5.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image5.src = urlImage5;
    }

    title_5.innerHTML = title5;
    text5.innerHTML = description5;
    link5.href = url5;

    var image6 = document.getElementById('image7');
    var title_6= document.getElementById('title7');
    var text6= document.getElementById('text7');
    var link6 = document.getElementById('link7')

    if(urlImage6 == null)
    {
        image6.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image6.src = urlImage6;
    }

    title_6.innerHTML = title6;
    text6.innerHTML = description6;
    link6.href = url6;

    var image7 = document.getElementById('image8');
    var title_7= document.getElementById('title8');
    var text7= document.getElementById('text8');
    var link7 = document.getElementById('link8')

    if(urlImage7 == null)
    {
        image7.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image7.src = urlImage7;
    }
    
    title_7.innerHTML = title7;
    text7.innerHTML = description7;
    link7.href = url7;

    var image8 = document.getElementById('image9');
    var title_8= document.getElementById('title9');
    var text8 = document.getElementById('text9');
    var link8 = document.getElementById('link9')

    if(urlImage8 == null)
    {
        image8.src= "images/default-image-tech.jpeg";
    }
    else
    {
        image8.src = urlImage8;
    }
    
    title_8.innerHTML = title8;
    text8.innerHTML = description8;
    link8.href = url8;

}

request.send();
