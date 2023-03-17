// complete the given function

function palindrome(str){
var updatestr=str.replace(" ","");
	updatestr=updatestr.toUpperCase();
	var i=0;
	while (i<(updatestr.length/2)) {
		if(updatestr.charAt(i)!=updatestr.charAt(updatestr.length-1-i))
		{
			return false;
		}
	}
	return true;
	
	
}
module.exports = palindrome
