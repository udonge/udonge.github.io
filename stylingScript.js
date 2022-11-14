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