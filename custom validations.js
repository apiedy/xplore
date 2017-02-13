$(document).ready(function(){
	$("input#p1").blur(function(){
		this.setCustomValidity(this.validity.patternMismatch ? this.title : '');
		document.forms["signup"]["pass1"].pattern=this.value;
	});
	$("input#p2").blur(function(){
		this.setCustomValidity(this.validity.patternMismatch? this.title:'');
	});
});
