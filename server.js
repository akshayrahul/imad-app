var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
'article-one' : {
    title:"Article One",
    heading:"Friends With Benefits",
    content:`
        <p>
            Friends with Benefits is a 2011 American romantic comedy film directed by Will Gluck, and starring Justin Timberlake and Mila Kunis in the lead roles. The film features Patricia Clarkson, Jenna Elfman, Bryan Greenberg, Nolan Gould, Richard Jenkins, and Woody Harrelson in supporting roles.[4] The plot revolves around Dylan Harper (Timberlake) and Jamie Rellis (Kunis), who meet in New York City, and naively believe adding sex to their friendship will not lead to complications. Over time, they begin to develop deep mutual feelings for each other, only to deny it each time they are together.
        </p>
        <p>
            Principal casting for Friends with Benefits took place over a three-month period from April to July 2010. Gluck reworked the original script and plot shortly after casting Timberlake and Kunis. Filming began in New York City on July 20, 2010, and concluded in Los Angeles in September 2010. The film was distributed by Screen Gems and was released in North America on July 22, 2011.
        </p>
        `,
    
},
'article-two' : {
    title:"Article Two",
    heading:"El Clasico",
    content:`
        <p>
        El Clásico (Spanish pronunciation: [el ˈklasiko]; Catalan: El Clàssic,[1] pronounced [əɫ ˈkɫasik]; "The Classic") is the name given in football to any match between fierce rivals Real Madrid and FC Barcelona. Originally it referred only to those competitions held in the Spanish championship, but nowadays the term has been generalized, and tends to include every single match between the two clubs: UEFA Champions League, Copa del Rey, etc. Other than the UEFA Champions League Final, it is considered one of the biggest club football games in the world, and is among the most viewed annual sporting events.[2][3][4] The match is known for its intensity.
        </p>
        <p>
          Real Madrid leads the head to head results in competitive matches with 93 wins to Barcelona's 91, while Barcelona leads in total matches with 111 wins to Real Madrid's 97. Along with Athletic Bilbao, they are the only clubs in La Liga to have never been relegated.        
        </p>
        `,
    
},
'article-three' :{
    title:"Article Three",
    heading:"Education in India",
    content:`
         <p>
           Education in India is provided by the public sector as well as the private sector, with control and funding coming from three levels: central, state and local. Under various articles of the Indian Constitution, free and compulsory education is provided as a fundamental right to children between the ages of 6 and 14. The ratio of public schools to private schools in India is 7:5.
        </p>
        <p>
        India has made progress in terms of increasing the primary education attendance rate and expanding literacy to approximately three-quarters of the population in the 7–10 age group, by 2011.[3] India's improved education system is often cited as one of the main contributors to its economic development.[4] Much of the progress, especially in higher education and scientific research, has been credited to various public institutions. While enrolment in higher education has increased steadily over the past decade, reaching a Gross Enrolment Ratio of 24% in 2013,[5] there still remains a significant distance to catch up with tertiary education enrolment levels of developed nations,[6] a challenge that will be necessary to overcome in order to continue to reap a demographic dividend from India's comparatively young population.
        </p>
        `,
    
},
};

function createTemplate(data){
    var title = data.title;
    var heading=data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
    <head>
    <title>
      ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
<style>
    body{
	padding-top: 20px;
	
}
.tab{
	align-items: left;
	text-align: left;

}
a{
	color: red;
	text-decoration: none;
}
.text{
 
	text-align: center;
	width: 750px;
	padding-left: 300px;
}
h2{
	text-align: center;
	color: lightblue;
}
</style>
</head>
<body>
    <div class="tab">
        <a href="http://akshayrahul97.imad.hasura-app.io/">
            Home
        </a>
    </div>
    <h2>
        ${heading}
    </h2>
    <div class="text">
        ${content}
    </div>
</body>
</html>

    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articleName', function (req, res) {
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
