const upperset="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset="abcdefgjihklmnopqrstuvwxyz";
const numberset="0123456789";
const symbolset="!@#$%^&*()_+?/|";

//Selectors
const passbox=document.getElementById('pass-box');
const totalchar=document.getElementById('total-char');
const upperInput=document.getElementById('upper-case');
const lowerInput=document.getElementById('lower-case');
const numbersInput=document.getElementById('numbers');
const symbolsInput=document.getElementById('symbols');

const getRandomData=(dataset)=>{
   return dataset[Math.floor(Math.random()*dataset.length)];

}

const generatePassword = (password="4") => {
    if(upperInput.checked){
        password=password+getRandomData(upperset);
        
    }

    if(lowerInput.checked){
        password+=getRandomData(lowerset);
        
    }

    if(numbersInput.checked){
        password+=getRandomData(numberset);
        
    }

    if(symbolsInput.checked){
        password+=getRandomData(symbolset);
        
    }
    
        if(password.length < totalchar.value){
        return generatePassword(password);
            }
        
    passbox.innerText=truncateString(password, totalchar.value);
}
generatePassword();

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePassword();
    } 
    )

    function truncateString(str,num){
        if(str.length>num){
            let substr=str.substring(0,num);
            return substr;
        }else{
            return str;
        }
    }
