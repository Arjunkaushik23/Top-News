console.log("project is on my way");

// initialize the news api parameters
newsAccordion = document.getElementById("newsAccordion");

// create a ajax new request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=af610934d5d94be890707d7487a9b6c2",
  true
);

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    // console.log(articles);

    let newsHTML = "";
    articles.forEach(function(element, index) {
        // console.log(element,index);
        let news = `<p>
                        <button class="btn btn-primary p-3 mb-2 bg-success text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        <b>Breaking News${index+1} :- </b> ${element["title"]}
                        </button>
                        </p>
                        <div style="min-height: 120px;">
                        <div class="collapse collapse-horizontal" id="collapse${index}">
                        <div class="card card-body" style="width: 300px;">
                        ${element["description"]}.<a href="${element["url"]}" target="_blank" >Read Full News Here</a>
                        </div>
                        </div>
                    </div> `;
        newsHTML += news;            
    });
    newsAccordion.innerHTML = newsHTML;
  } 
  else {
    console.log("Some error occured");
  }
} 

xhr.send();


