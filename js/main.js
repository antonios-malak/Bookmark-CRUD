var inputName = document.getElementById("inputName")
var urlAdress =document.getElementById("urlAdress")
var tbody = document.getElementById("tbody")

var booksArray=[]
if (localStorage.getItem("booksArray") !=null){
    booksArray = JSON.parse(localStorage.getItem("booksArray"))
    display()
}


function addBooks (){ 
    var book = {
    name : inputName.value ,
    url :  urlAdress.value ,
    }
    var nameRegex = /^[A-za-z0-9]{0,30}$/g
    var urlRegex = /^(https:\/\/)?(www.)?\w+.([a-z]{1,9})$/g
    if(nameRegex.test(book.name) && urlRegex.test(book.url)){
    booksArray.push(book);
    localStorage.setItem("booksArray" , JSON.stringify(booksArray))
    clear()
    display ()
    }else{
        window.alert(`Site Name or Url is not valid, Please follow the rules below :
                        Site name must contain at least 3 characters
                        Site URL must be a valid one`)
   }   
}



function display (){
    var content = ""
    for (i=0 ; i <booksArray.length ; i ++){
        content += 
        `<tr>
        <td>${i+1}</td>
        <td>${booksArray[i].name}</td>
        <td><a target="_blank" href="${booksArray[i].url}"><button type="button" class="btn btn-success"><i class="fa-regular fa-eye me-1"></i>Visit</button></a></td>
        <td><button type="button" class="btn btn-danger" onclick = removeItem(${i})><i class="fa-regular fa-trash-can me-1"></i>Delete</button></td>
        </tr>`
        };
    tbody.innerHTML = content ;       
};

function clear (){
    inputName.value = ""
    urlAdress.value = ""
}

function removeItem (i){    
    booksArray.splice(i , 1);
    localStorage.setItem("booksArray" , JSON.stringify(booksArray));
    display();
}