//Create defining variables and global before writing jQuery and Javascript.
var newContact;
var list=[];
var Contact = {
	firstName : "",
	lastName : "",
	phoneNumber : "",
	street : "",
	city : "",
	state : ""
};

$(document).ready(function(){

	$("#btn-submit").click(function(e){
		e.preventDefault();
		createContact();
		displayContactList();	
	
	});

	$('ul').on('click', 'li', function(event) {
  		contactDetail($(this)[0].id);
	});
});

function createContact(){
	newContact = Object.create(Contact);
	newContact.firstName = $("#firstName").val();
	newContact.lastName = $("#lastName").val();
	newContact.phoneNumber = $("#phoneNumber").val();
	newContact.street = $("#street").val();
	newContact.city = $("#city").val();
	newContact.state = $("#state").val();
	list.push(newContact);
}

function displayContactList(){
	$(".contact-list ul").append('<a><li id="' + (list.length-1) +'">'+newContact.firstName + ' ' +newContact.lastName+'<br></li></a>');
	
	// clear form
	$("#firstName").val("");
	$("#lastName").val("");
	$("#phoneNumber").val("");
	$("#street").val("");
	$("#city").val("");
	$("#state").val("");
}

function contactDetail(index){

	// clear content
	$(".firstname").text("");
	$(".lastname").text("");
	$(".phone-number").text("");
	$(".address").text("");


	$(".firstname").append("Fist Name: "+list[index].firstName);
	$(".lastname").append("Last Name: "+list[index].lastName);
	$(".phone-number").append("Phone Number: "+list[index].phoneNumber);
	$(".address").append("<p>Address</p>");


	if((list[index].street != "") && (list[index].city != "")){
		$(".address").append("<li>"+list[index].street+", "+list[index].city+"</li>");
	}else if((list[index].street != "") && (list[index].state != "")){
		$(".address").append("<li>"+list[index].street+", "+list[index].state+"</li>");
	}else if((list[index].city != "") && (list[index].state != "")){
		$(".address").append("<li>"+list[index].city+", "+list[index].state+"</li>");
	}else if((list[index].street != "") && (list[index].city != "") && (list[index].state != "")){
		$(".address").append("<li>"+list[index].street+", "+list[index].city+", "+list[index].state+"</li>")
	}else{
		if(list[index].street != ""){
			$(".address").append("<li>"+list[index].street+"</li>");
		}else if(list[index].city != ""){
			$(".address").append("<li>"+list[index].city+"</li>");
		}else if(list[index].state != ""){
			$(".address").append("<li>"+list[index].state+"</li>");
		}
	}

};