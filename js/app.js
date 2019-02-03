// sanityCheck = console.log("YAAAAS")

//GET PERSON OBJECT NAME//
function getName4() {
  let name4 = JSON.parse(this.responseText);
  //    console.log(name4);
  //    console.log(getName4)
  document.getElementById("person4Name").innerHTML = name4["name"];
  //    console.log(name4["name"]);
}
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", getName4);
oReq.open("GET", "https://swapi.co/api/people/4/");
oReq.send();

//GET PERSON OBJECT HOMEWORLD(NAME//
function getHomeWorld4() {
  let home4 = JSON.parse(this.responseText);
  //   console.log(getHomeWorld4)
  //   console.log(home4)
  document.getElementById("person4HomeWorld").innerHTML = home4["name"];
}
var oReq2 = new XMLHttpRequest();
oReq2.addEventListener("load", getHomeWorld4);
oReq2.open("GET", "https://swapi.co/api/planets/1/");
oReq2.send();

//GET PERSON OBJECT NAME//
function getName14() {
  let name14 = JSON.parse(this.responseText);
  //    console.log(name14);
  //    console.log(getName14)
  document.getElementById("person14Name").innerHTML = name14["name"];
}
var oReq3 = new XMLHttpRequest();
oReq3.addEventListener("load", getName14);
oReq3.open("GET", "https://swapi.co/api/people/14/");
oReq3.send();

//GET PERSON SPECIES//
function getSpecies() {
  let species = JSON.parse(this.responseText);
  //    console.log(species)
  document.getElementById("person14Species").innerHTML = species["name"];
  //    console.log(getSpecies);
}
var oreq4 = new XMLHttpRequest();
oreq4.addEventListener("load", getSpecies);
oreq4.open("GET", "https://swapi.co/api/species/1/");
oreq4.send();

//GET LIST OF ALL FILMS//
// const request = (url, callback) => {
//     const oReq3A = new XMLHttpRequest();
//     oReq3A.addEventListener("load", function (data) {
//         const resData = JSON.parse(data.target.responseText);
//         callback(resData);
//     });
//     oReq3A.open("GET", url);
//     oReq3A.send();
// };

// request("https://swapi.co/api/people/14/", function (data) {
//     console.log("data", data);

// });
