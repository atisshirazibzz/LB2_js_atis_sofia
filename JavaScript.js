var buttonEnabledEmail = false;
var buttonEnabledPassword = false;

var buttonDiable = document.getElementById("submitButton");
//function that takes the Data from a Json to give out the Picture Dynamic
async function addPicture() {
    var gallary = document.getElementById("Inspiration")
    await fetch('./picture.json')
        .then(response => response.json())
        .then(data =>
            Object.entries(data).forEach(( [key ,value]) => {
                    var picture = document.createElement("img") ;
                    picture.setAttribute("src",`${value}`)
                    picture.setAttribute("class","inspo")
                    gallary.appendChild(picture)
                    //gallary.innerHTML = `<img src=${value} className="inspo" alt="inspo">`;
                }
            )
        )
}

