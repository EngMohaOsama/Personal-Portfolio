let myRequest = new XMLHttpRequest();


myRequest.open("get", "https://api.github.com/users/EngMohaOsama/repos", true);
myRequest.send();

myRequest.onreadystatechange = function () {
    // console.log(myRequest.readyState);
    // console.log(myRequest.status);
    if (this.readyState === 4 && this.status === 200) {
        let gitRevo = JSON.parse(this.responseText);
        console.log(gitRevo);
    }
};