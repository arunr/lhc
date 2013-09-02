
$(document).ready(function(){
<!--####Email-->
	$('#email').change(function(e) { 
			var emailVAL = $('#email').val();
			var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
			if(emailVAL.match(emailExp))
			{
				document.getElementById('SignUpSubmit').disabled=true;
					
					$.ajax({  
					type: "POST",  
					url: "user/validateSignup",  
					data: "email="+ emailVAL,  
					success: function(msg){  
				   
				   $("#EmailStatus").ajaxComplete(function(event, request, settings){ 
				   
						if(msg.indexOf("Available") != -1) 
							{ 
								$("#EmailStatus").html('<font color="green">&#10004;</font>');
								document.getElementById('SignUpSubmit').disabled=false;
							}
						else 
							{
							 document.getElementById('SignUpSubmit').disabled=true;
							 $(this).html(msg);
							}
				   });
						} 
				  }); 
			}
			else
			{
				$("#EmailStatus").html('<font color="red">&#10007; Invalid Email ID!</font>');
				document.getElementById('SignUpSubmit').disabled=true;
			}
	});	
});