function highlight() {
    //Write your code here
const bolword=document.getElementByTagName("strong");
	for(let i=0 ; i<bolword.length ; i++)
		{
			bolword[i].style.color="green";
		}

}


function return_normal() {
    //Write your code here
	const bolword=document.getElementByTagName("strong");
	for(let i=0 ; i<bolword.length ; i++)
		{
			bolword[i].style.color="black";
		}
    
}
