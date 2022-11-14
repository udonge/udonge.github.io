
// Form ID: 223167131992861
const formID= "223167131992861";

function formSubmission() {

    if(document.forms[formID]["input_28"].value.length==0) {
        alert("Select Origin");
        return false;
    }

    if(document.forms[formID]["input_29"].value.length==0) {
        alert("Select Destination");
        return false;
    }

    if(document.forms[formID]["input_69_1"].checked) {
        if(document.forms[formID]["lite_mode_71"].value.length==0) {
            alert("Checking for Return Date");
            return false;
        } else {
            console.log("Return Date Found");
        }

    }

    if(nameChecker()) {
        console.log("Name(s) valid.");
    } else {
        alert("First name minimum character length: 5.");
    }


    

   
} // End formSubmission()

function nameChecker() {
    let x = document.forms[formID]["input_52"].value;
    switch(x) {
        case "1": {
            if(validateName(formID, "first_3")) {
                alert("Valid");
            } else {
                alert("Invalid.");
                return false;
            }
            break;
        }
        case "2": {
            if(validateName(formID, "first_3") && validateName(formID,"first_44")) {
                alert("Valid");
            } else {
                alert("Invalid.");
                return false;
            }
            break;            
        }
        case "3": {
            if(validateName(formID, "first_3") && validateName(formID,"first_44") && validateName(formID,"first_55")) {
                alert("Valid");
            } else {
                alert("Invalid.");
                return false;
            }
            break;                 
        }
        case "4": {
            if(validateName(formID, "first_3") && validateName(formID,"first_44") && validateName(formID,"first_55") && validateName(formID,"first_63")) {
                alert("Valid");
            } else {
                alert("Invalid.");
                return false;
            }
            break;               
        }
        default:
            console.log("Huh.");
            break;
    } //Case End.
    return true;    
} //End nameChecker()

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

