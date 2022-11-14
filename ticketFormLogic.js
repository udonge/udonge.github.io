
// Form ID: 223167131992861
const formID= "223167131992861";

function formSubmission() {
    let x = document.forms[formID]["input_52"].value;
    console.log(x);
    switch(x) {
        case "1": {
            if(validateName(formID, "first_3")) {
                alert("Valid");
            } else {
                alert("Invalid.");
            }
            break;
        }
        case "2": {
            if(validateName(formID, "first_3") && validateName(formID,"first_44")) {
                alert("Valid");
            } else {
                alert("Invalid.");
            }
            break;            
        }
        case "3": {
            if(validateName(formID, "first_3") && validateName(formID,"first_44") && validateName(formID,"first_55")) {
                alert("Valid");
            } else {
                alert("Invalid.");
            }                 
        }
        case "4": {
            if(validateName(formID, "first_3") && validateName(formID,"first_44") && validateName(formID,"first_55") && validateName(formID,"first_63")) {
                alert("Valid");
            } else {
                alert("Invalid.");
            }
            break;               
        }
        default:
            console.log("Huh.");
            return false;

    } //Case End.

    

   
    } // End formSubmission()


function validateName(form, field) {
    let x = document.forms[form][field].value;
    console.log(x.length);
    if (x.length >= 5) {
        return true;
    } else {
        return false;
    }
} // End validateName()

function validateDestination() {

}// End validateDestination()

function validateRadioGender() {

}// End validateRadioGender()

