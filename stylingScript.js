   JotForm.newDefaultTheme = true;
   JotForm.extendsNewTheme = false;
	JotForm.singleProduct = false;
	JotForm.newPaymentUIForNewCreatedForms = false;
	JotForm.newPaymentUI = true;

   JotForm.setConditions([{"action":[{"id":"action_1668407249191","visibility":"Show","isError":false,"field":"35"}],"id":"1668407257592","index":"0","link":"Any","priority":"0","terms":[{"id":"term_1668407249191","field":"52","operator":"equals","value":"1","isError":false}],"type":"field"},{"action":[{"id":"action_1668407104726","field":"70","visibility":"Require","isError":false}],"id":"1668407114096","index":"1","link":"Any","priority":"1","terms":[{"id":"term_1668407104726","field":"69","operator":"equals","value":"Round Trip","isError":false}],"type":"require"},{"action":[{"id":"action_1668407089904","visibility":"Show","isError":false,"field":"70"}],"id":"1668407101008","index":"2","link":"Any","priority":"2","terms":[{"id":"term_1668407089904","field":"69","operator":"equals","value":"Round Trip","isError":false}],"type":"field"},{"action":[{"id":"action_1668401373228","visibility":"RequireMultiple","fields":["44","45","46","47","48","55","56","57","58","59","63","64","65","66","67"],"isError":false}],"id":"1668401403601","index":"3","link":"Any","priority":"3","terms":[{"id":"term_1668401373228","field":"52","operator":"equals","value":"4","isError":false}],"type":"require"},{"action":[{"id":"action_1668401354690","visibility":"RequireMultiple","fields":["44","45","46","47","48","55","56","57","58","59"],"isError":false}],"id":"1668401369218","index":"4","link":"Any","priority":"4","terms":[{"id":"term_1668401354690","field":"52","operator":"equals","value":"3","isError":false}],"type":"require"},{"action":[{"id":"action_0_1668407020349","visibility":"RequireMultiple","fields":["44","45","46","47","48"],"isError":false}],"id":"1668401288078","index":"5","link":"Any","priority":"5","terms":[{"id":"term_0_1668407020349","field":"52","operator":"equals","value":"2","isError":false}],"type":"require"},{"action":[{"id":"action_1668401325998","visibility":"ShowMultiple","isError":false,"fields":["35","43","54","62"]}],"id":"1668401345111","index":"6","link":"Any","priority":"6","terms":[{"id":"term_1668401325998","field":"52","operator":"equals","value":"4","isError":false}],"type":"field"},{"action":[{"id":"action_0_1668407007601","visibility":"ShowMultiple","isError":false,"fields":["35","43","54"]}],"id":"1668401322753","index":"7","link":"Any","priority":"7","terms":[{"id":"term_0_1668407007601","field":"52","operator":"equals","value":"3","isError":false}],"type":"field"},{"action":[{"id":"action_0_1668407043443","visibility":"ShowMultiple","isError":false,"fields":["35","43"]}],"id":"1668401256389","index":"8","link":"Any","priority":"8","terms":[{"id":"term_0_1668407043443","field":"52","operator":"equals","value":"2","isError":false}],"type":"field"}]);	JotForm.clearFieldOnHide="disable";

	JotForm.init(function(){
	/*INIT-START*/

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 JotForm.calendarDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarOther = {"today":"Today"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("71", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":false,"custom":false,"ranges":false,"start":"","end":""}); }, 0); });
 } 
 JotForm.onTranslationsFetch(function() { JotForm.setCalendar("71", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":false,"custom":false,"ranges":false,"start":"","end":""}); });

 JotForm.calendarMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
 JotForm.calendarDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
 JotForm.calendarOther = {"today":"Today"};
 var languageOptions = document.querySelectorAll('#langList li'); 
 for(var langIndex = 0; langIndex < languageOptions.length; langIndex++) { 
   languageOptions[langIndex].on('click', function(e) { setTimeout(function(){ JotForm.setCalendar("70", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":false,"custom":false,"ranges":false,"start":"","end":""}); }, 0); });
 } 
 JotForm.onTranslationsFetch(function() { JotForm.setCalendar("70", false, {"days":{"monday":true,"tuesday":true,"wednesday":true,"thursday":true,"friday":true,"saturday":true,"sunday":true},"future":true,"past":false,"custom":false,"ranges":false,"start":"","end":""}); });
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