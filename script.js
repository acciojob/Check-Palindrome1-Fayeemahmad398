// complete the given function

function palindrome(str){
str=str.replace(" ","");
	str=str.toUpperCase();
	var i=0;
	while (i<(str.length/2)) {
		if(str.charAt(i)!=str.charAt(str.length-1-i))
		{
			return false;
		}
	}
	return true;
	
	
}
module.exports = palindrome
