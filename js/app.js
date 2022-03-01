function sendMail(params,event){

	var name = document.querySelector('.number1')
	var email = document.querySelector('.number2')
	var message = document.querySelector('.contact-msg')
	function ValidateEmail(validated_email){
			var emails = document.querySelector('.number2')
			var validated_email = emails.value
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(validated_email.match(mailformat)){
					return true;
				}else
					{
						alert("You have entered an invalid email address!");
						return false;
					}		
		}
	var tempParams = {
		to_name: name.value,
		from_name:email.value,
		message:message.value
	}
	if(tempParams.message && ValidateEmail(tempParams.from_name)) {
		emailjs.send('service_chh46ml','template_4i6kvru',tempParams)
		.then(function(res){
		if(res.status){
			alert('We have Gotten Your Email And Will Get Back To You Shortly')
		}
	})
	
	name.value = ''
	email.value = ''
	message.value = ''
	}

	console.log('logging testnet');

}


