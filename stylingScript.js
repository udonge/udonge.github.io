        JotForm.newDefaultTheme = true;
        JotForm.extendsNewTheme = false;
        JotForm.singleProduct = false;
        JotForm.newPaymentUIForNewCreatedForms = false;
        JotForm.newPaymentUI = true;
    
       JotForm.setConditions([{"action":[{"id":"action_1668387478135","visibility":"ShowMultiple","isError":false,"fields":["43","54","62"]}],"id":"1668387494575","index":"0","link":"Any","priority":"0","terms":[{"id":"term_1668387478135","field":"52","operator":"equals","value":"4","isError":false}],"type":"field"},{"action":[{"id":"action_1668387430258","visibility":"HideMultiple","isError":false,"fields":["43","54","62"]}],"id":"1668387447791","index":"1","link":"Any","priority":"1","terms":[{"id":"term_1668387430258","field":"52","operator":"equals","value":"1","isError":false}],"type":"field"},{"action":[{"id":"action_1668387225480","visibility":"Show","isError":false,"field":"43"}],"id":"1668387284171","index":"2","link":"Any","priority":"2","terms":[{"id":"term_1668387225480","field":"52","operator":"equals","value":"2","isError":false}],"type":"field"},{"action":[{"id":"action_0_1668387423280","visibility":"ShowMultiple","isError":false,"fields":["43","54"]}],"id":"1668387306886","index":"3","link":"Any","priority":"3","terms":[{"id":"term_0_1668387423280","field":"52","operator":"equals","value":"3","isError":false}],"type":"field"}]);
        JotForm.init(function(){
        /*INIT-START*/
          setTimeout(function() {
              $('input_34').hint('e.g., 23');
           }, 20);
          JotForm.setPhoneMaskingValidator( 'input_5_full', '(###) ###-####' );
          setTimeout(function() {
              $('input_6').hint('ex: email@yahoo.com');
           }, 20);
          setTimeout(function() {
              $('input_46').hint('e.g., 23');
           }, 20);
          JotForm.setPhoneMaskingValidator( 'input_47_full', '(###) ###-####' );
          setTimeout(function() {
              $('input_48').hint('ex: email@yahoo.com');
           }, 20);
          setTimeout(function() {
              $('input_57').hint('e.g., 23');
           }, 20);
          JotForm.setPhoneMaskingValidator( 'input_58_full', '(###) ###-####' );
          setTimeout(function() {
              $('input_59').hint('ex: email@yahoo.com');
           }, 20);
          setTimeout(function() {
              $('input_65').hint('e.g., 23');
           }, 20);
          JotForm.setPhoneMaskingValidator( 'input_66_full', '(###) ###-####' );
          setTimeout(function() {
              $('input_67').hint('ex: email@yahoo.com');
           }, 20);
        /*INIT-END*/
        });
    
       JotForm.prepareCalculationsOnTheFly([null,{"name":"clickTo","qid":"1","text":"Ticket Booking","type":"control_head"},{"name":"submit","qid":"2","text":"Submit","type":"control_button"},{"name":"form_fullname","qid":"3","text":"Full Name","type":"control_fullname"},{"name":"address4","qid":"4","text":"Address","type":"control_address"},{"name":"phoneNumber5","qid":"5","text":"Phone Number","type":"control_phone"},{"name":"email6","qid":"6","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"name":"clickTo7","qid":"7","text":"","type":"control_text"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"description":"","name":"origin","qid":"28","subLabel":"Please select where you will travel from.","text":"Origin","type":"control_dropdown"},{"description":"","name":"typeA29","qid":"29","subLabel":"Please select where you wish to go.","text":"Destination","type":"control_dropdown"},null,null,{"name":"divider32","qid":"32","text":"Divider","type":"control_divider"},{"description":"","name":"gender","qid":"33","text":"Gender","type":"control_radio"},{"description":"","name":"age","qid":"34","subLabel":"","text":"Age","type":"control_number"},{"name":"passenger1","qid":"35","text":"Passenger 1","type":"control_collapse"},null,{"name":"divider37","qid":"37","text":"Divider","type":"control_divider"},null,null,{"name":"travelDetails","qid":"40","text":"Travel Details","type":"control_collapse"},null,null,{"name":"passenger2","qid":"43","text":"Passenger 2","type":"control_collapse"},{"description":"","name":"fullName","qid":"44","text":"Full Name","type":"control_fullname"},{"description":"","name":"gender45","qid":"45","text":"Gender","type":"control_radio"},{"description":"","name":"age46","qid":"46","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"phoneNumber","qid":"47","text":"Phone Number","type":"control_phone"},{"description":"","name":"email","qid":"48","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"description":"","name":"address","qid":"49","text":"Address","type":"control_address"},null,null,{"description":"","name":"numberOf","qid":"52","subLabel":"Select number of passengers.","text":"Number of Passengers","type":"control_dropdown"},{"name":"divider","qid":"53","text":"Divider","type":"control_divider"},{"name":"passenger3","qid":"54","text":"Passenger 3","type":"control_collapse"},{"description":"","name":"fullName55","qid":"55","text":"Full Name","type":"control_fullname"},{"description":"","name":"gender56","qid":"56","text":"Gender","type":"control_radio"},{"description":"","name":"age57","qid":"57","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"phoneNumber58","qid":"58","text":"Phone Number","type":"control_phone"},{"description":"","name":"email59","qid":"59","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"description":"","name":"address60","qid":"60","text":"Address","type":"control_address"},{"name":"divider61","qid":"61","text":"Divider","type":"control_divider"},{"name":"passenger4","qid":"62","text":"Passenger 4","type":"control_collapse"},{"description":"","name":"fullName63","qid":"63","text":"Full Name","type":"control_fullname"},{"description":"","name":"gender64","qid":"64","text":"Gender","type":"control_radio"},{"description":"","name":"age65","qid":"65","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"phoneNumber66","qid":"66","text":"Phone Number","type":"control_phone"},{"description":"","name":"email67","qid":"67","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"description":"","name":"address68","qid":"68","text":"Address","type":"control_address"}]);
       setTimeout(function() {
    JotForm.paymentExtrasOnTheFly([null,{"name":"clickTo","qid":"1","text":"Ticket Booking","type":"control_head"},{"name":"submit","qid":"2","text":"Submit","type":"control_button"},{"name":"form_fullname","qid":"3","text":"Full Name","type":"control_fullname"},{"name":"address4","qid":"4","text":"Address","type":"control_address"},{"name":"phoneNumber5","qid":"5","text":"Phone Number","type":"control_phone"},{"name":"email6","qid":"6","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"name":"clickTo7","qid":"7","text":"","type":"control_text"},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"description":"","name":"origin","qid":"28","subLabel":"Please select where you will travel from.","text":"Origin","type":"control_dropdown"},{"description":"","name":"typeA29","qid":"29","subLabel":"Please select where you wish to go.","text":"Destination","type":"control_dropdown"},null,null,{"name":"divider32","qid":"32","text":"Divider","type":"control_divider"},{"description":"","name":"gender","qid":"33","text":"Gender","type":"control_radio"},{"description":"","name":"age","qid":"34","subLabel":"","text":"Age","type":"control_number"},{"name":"passenger1","qid":"35","text":"Passenger 1","type":"control_collapse"},null,{"name":"divider37","qid":"37","text":"Divider","type":"control_divider"},null,null,{"name":"travelDetails","qid":"40","text":"Travel Details","type":"control_collapse"},null,null,{"name":"passenger2","qid":"43","text":"Passenger 2","type":"control_collapse"},{"description":"","name":"fullName","qid":"44","text":"Full Name","type":"control_fullname"},{"description":"","name":"gender45","qid":"45","text":"Gender","type":"control_radio"},{"description":"","name":"age46","qid":"46","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"phoneNumber","qid":"47","text":"Phone Number","type":"control_phone"},{"description":"","name":"email","qid":"48","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"description":"","name":"address","qid":"49","text":"Address","type":"control_address"},null,null,{"description":"","name":"numberOf","qid":"52","subLabel":"Select number of passengers.","text":"Number of Passengers","type":"control_dropdown"},{"name":"divider","qid":"53","text":"Divider","type":"control_divider"},{"name":"passenger3","qid":"54","text":"Passenger 3","type":"control_collapse"},{"description":"","name":"fullName55","qid":"55","text":"Full Name","type":"control_fullname"},{"description":"","name":"gender56","qid":"56","text":"Gender","type":"control_radio"},{"description":"","name":"age57","qid":"57","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"phoneNumber58","qid":"58","text":"Phone Number","type":"control_phone"},{"description":"","name":"email59","qid":"59","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"description":"","name":"address60","qid":"60","text":"Address","type":"control_address"},{"name":"divider61","qid":"61","text":"Divider","type":"control_divider"},{"name":"passenger4","qid":"62","text":"Passenger 4","type":"control_collapse"},{"description":"","name":"fullName63","qid":"63","text":"Full Name","type":"control_fullname"},{"description":"","name":"gender64","qid":"64","text":"Gender","type":"control_radio"},{"description":"","name":"age65","qid":"65","subLabel":"","text":"Age","type":"control_number"},{"description":"","name":"phoneNumber66","qid":"66","text":"Phone Number","type":"control_phone"},{"description":"","name":"email67","qid":"67","subLabel":"example@example.com","text":"E-mail","type":"control_email"},{"description":"","name":"address68","qid":"68","text":"Address","type":"control_address"}]);}, 20); 