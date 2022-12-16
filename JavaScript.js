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

//Checks if the email is Valid with the RegExp
function emailChanged(){
    var errorMessage = document.getElementById("errorMessage")
    var email = document.getElementById("email");
    var emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if (emailRegex.test(email.value)){
        errorMessage.innerHTML= "Valid";
        buttonEnabledEmail = true
        checkValid();
    }
    else {
        errorMessage.innerHTML= "This is Not An email";
        buttonEnabledEmail = false
        checkValid();
    }
}

function passwordChanged() {

    var strength = document.getElementById('strengthBorder');
    //Looks for The Strength of a password
    // length >10 plus Capitalletter plus number + special character
    var strongRegex = new RegExp("^(?=.{10,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    //Length >= 8 plus Capital letter or number or special character
    var mediumRegex = new RegExp("^(?=.{8})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    //Length is >= 8
    var enoughRegex = new RegExp("(?=.{8,}).*", "g");
    var pwd = document.getElementById("password");
    //Checks with the RegExp if the value is equal to the input
    if (pwd.value.length == 0) {
        strength.innerHTML = '<div id="textinside"  class="strength">Password: No Password</div>';
        buttonEnabledPassword = false;
        checkValid();
    } else if (false === enoughRegex.test(pwd.value)) {
        strength.innerHTML = '<div id="textinside"  class="strength">Password: More Character!</div>';
        buttonEnabledPassword = false;
        checkValid();
    } else if (strongRegex.test(pwd.value)) {
        //Adds a new div for the Strength level
        strength.innerHTML = '<div id="textinside" class="strengthStrong">Password: Strong!</div>';
        buttonEnabledPassword = true;
        checkValid();
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<div id="textinside"  class="strengthMedium">Password: Medium!</div>';
        buttonEnabledPassword = true;
        checkValid();
    } else {
        strength.innerHTML = '<div id="textinside"  class="strengthWeak">Password: Weak!</div>';
        buttonEnabledPassword = true;
        checkValid();
    }



    //Checks the two Variables if they are true if they are True the button is Enabled
    function checkValid(){
    if (buttonEnabledPassword === true && buttonEnabledEmail === true){
        console.log("true")
        buttonDiable.removeAttribute("disabled")
    }
    else{
        buttonDiable.disabled = "true";
    }
    }
