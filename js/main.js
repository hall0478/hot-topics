const container = document.querySelector("#main-content");
const links = document.querySelectorAll("nav a");
let url = "partials/home.html";



(function () {
    fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            let parser = new DOMParser();
            let htmlDOM = parser.parseFromString(data, "text/html");

            let content = htmlDOM.getElementById("articles");
            container.innerHTML = content.innerHTML;
        })
        .catch(function (error) {
            console.log(error.message)
        });
})();


function loadContent(e) {
    if (e.target.textContent === "Home") {
        url = "partials/home.html";
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                let parser = new DOMParser();
                let htmlDOM = parser.parseFromString(data, "text/html");

                let content = htmlDOM.getElementById("articles");
                container.innerHTML = content.innerHTML;
            })
            .catch(function (error) {
                console.log(error.message)
            });



    } else if (e.target.textContent === "Portfolio") {
        url = "partials/portfolio.html";
        fetch(url)
            .then(function (response) {
                return response.text();
            })
            .then(function (data) { 
                let parser = new DOMParser();
                let htmlDOM = parser.parseFromString(data, "text/html");

                let content = htmlDOM.getElementById("images");
                container.innerHTML = content.innerHTML;
            })
            .catch(function (error) {
                console.log(error.message)
            });
    }
}


for (i = 0; i < links.length; i++) {
    links[i].addEventListener("click", loadContent);
}