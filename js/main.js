// Corrected declaration of variables
let headerOne = document.querySelector("#HeaderOne");
let headerTwo = document.querySelector("#HeaderTwo");
let headerThree = document.querySelector("#HeaderThree");
let descriptionOne = document.querySelector("#DescriptionOne");
let descriptionTwo = document.querySelector("#DescriptionTwo");
let descriptionThree = document.querySelector("#DescriptionThree");
let buttonOne = document.querySelector("#ButtonOne");
let buttonTwo = document.querySelector("#ButtonTwo");
let buttonThree = document.querySelector("#ButtonThree");

/**
 * this is a promise that return value if standard pattern to verify that the request has completed 
 * and 
 * @param {*} apiLink 
 * @returns 
 */
const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText));
            } else {
                reject(Error("No Data Found"));
            }
        };
        myRequest.open("GET", apiLink);
        myRequest.send();
    });
};

/**
 * function that take api form link and update value of website
 */
getData("https://api.github.com/users/EngMohaOsama/repos")
    .then((result) => {
        let gitRevo = result;
        console.log(gitRevo);
        headerOne.textContent = gitRevo[0].name.replace("-", " ");
        descriptionOne.textContent = gitRevo[0].description;
        buttonOne.href = gitRevo[0].html_url;
        headerTwo.textContent = gitRevo[4].name.replace("-", " ");
        descriptionTwo.textContent = gitRevo[4].description;
        buttonTwo.href = gitRevo[4].html_url;
        headerThree.textContent = gitRevo[3].name.replace("-", " ");
        descriptionThree.textContent = gitRevo[3].description;
        buttonThree.href = gitRevo[3].html_url;
    })
    .catch((rej) => {
        console.log(rej);
    });