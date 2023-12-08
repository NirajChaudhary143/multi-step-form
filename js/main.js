// link btn active next btn
var linkNumber =1;
var preNumberLatest;
var nextlinkBtn = document.querySelector("#next");
var prelinkBtn = document.querySelector("#previous");
var errorName = document.querySelector("#errorName");
var errorPhone = document.querySelector("#errorPhone");
var errorAddress = document.querySelector("#errorAddress");
var errorPassword = document.querySelector("#errorPassword");
var errorGender = document.querySelector("#errorGender");
var errorEmail = document.querySelector("#errorEmail");
var listOfBtnLink = document.querySelectorAll(".link-btn");
const form = document.forms['info-form'];
var checkedGender,inputName, inputAddress, inputPhone, inputEmail;
var item1 = document.querySelector(".item1");
var item2 = document.querySelector(".item2");
var item3 = document.querySelector(".item3");
var item4 = document.querySelector(".item4");
console.log(form);

const NextActiveLink = (linkNumber) =>{
    listOfBtnLink.forEach(item=>{
        if(item.innerText == linkNumber){
            item.classList.add("link-btn-active");
        }
    });
    preNumberLatest=linkNumber;
    if(linkNumber==2){
        item2.style.display ="block";
        item1.style.display="none";
    }
    if(linkNumber==3){
        item3.style.display ="block";
        item2.style.display="none";
        nextlinkBtn.innerText="View Details"
        // nextlinkBtn.style.display="block";
    }
    if(linkNumber==4){
        item3.style.display="none";
        item4.innerHTML=`
                        <label>Name: ${inputName} </label><br>
                        <label>Gender: ${checkedGender} </label><br>
                        <label>Phone Number: ${inputPhone} </label><br>
                        <label>Address: ${inputAddress}</label><br>
                        <label>Email: ${inputEmail} </label><br>
        `;
        item4.style.display="block";
        document.querySelector("#submitBtn").style.display="block";
        nextlinkBtn.style.display="none";
        // prelinkBtn.style.display="none";


    }

}
const PrevActiveLink = (preNumberLatest) =>{
    let updatedNumber = preNumberLatest+1;
                listOfBtnLink.forEach(item=>{
                    if(item.innerText == updatedNumber){
                        item.classList.remove("link-btn-active");
                    }
                });
                
                
        if (preNumberLatest==3) {
            item4.style.display ="none";
            item3.style.display="block";
            nextlinkBtn.style.display="block";
            document.querySelector("#submitBtn").style.display="none";
        }

        if(preNumberLatest==2){
            item2.style.display ="block";
            item3.style.display="none";
        }
        if(preNumberLatest==1){
            item1.style.display ="block";
            item2.style.display="none";
            prelinkBtn.style.display="none";
            document.querySelector("#submitBtn").style.display="none";
            // linkNumber=preNumberLatest;
        }
}

const formValidation= function(linkNumber, callback){
    if(linkNumber==1){
        let nameRegx = /^[a-zA-Z\s]+$/;
        let GendercheckedValue;
        var fullName= document.querySelector('input[name="name"]').value;
        var gender = document.querySelectorAll('input[name="gender"]');
        inputName = fullName;
        let validName;
        gender.forEach(item=>{
            if (item.checked == true) {
                console.log(item.value);
                GendercheckedValue = true;
                errorGender.innerText="";
                checkedGender=item.value;
            }
            
        });
        if(GendercheckedValue!=true){
            errorGender.innerText="Please select your gender.";
            
        }
        if (fullName) {
            if (fullName.match(nameRegx)) {
                validName = true;
                errorName.innerText="";
            }
            else{
                errorName.innerText="Please enter valid name";
            }
        }
        else if(fullName===""){
            errorName.innerText="Please enter your name";
        }
        if(GendercheckedValue == true && validName == true){

            ++linkNumber;
            console.log("page number:",linkNumber);
            callback(linkNumber);
            prelinkBtn.style.display="block";
        }

    }
    if (linkNumber===2) {
        let phoneRegex = /^9[0-9]{9}$/;
        let addressRegex = /^[a-zA-z\s\,0-9]+$/;
        var phoneNumber = document.querySelector('input[name="phone"]').value;
        var address = document.querySelector('input[name="address"]').value;
        inputPhone = phoneNumber;
        inputAddress=address;
        let phoneValid;
        let addressValid;
        console.log(phoneNumber);
        if (phoneNumber) {
            if (phoneNumber.match(phoneRegex)) {
                errorPhone.innerText="";
                phoneValid=true;
            }
            else{
                errorPhone.innerText="Please enter a valid phone number.";
            }
        }
        
        if (address) {
            if (address.match(addressRegex)) {
                errorAddress.innerText="";
                addressValid=true;
            }
            else{
                errorAddress.innerText="Please enter a valid Address";
            }
        }
        // if(linkNumber===3){
        //     if(phoneNumber===""){
        //         errorPhone.innerText="Please enter your phone number.";
        //     }
        // }
        if(phoneValid === true && addressValid ===true){
            ++linkNumber;
            console.log("page number:",linkNumber);
            callback(linkNumber);
            // prelinkBtn.style.display="block";
        }
    }

    if (linkNumber==3) {
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])(?=.*[a-z]).{8,}$/;
        let password = document.querySelector('input[name="password"]').value;
        var email = document.querySelector('input[name="email"]').value;
        inputEmail=email;
        let validEmail,validPassword;

        if(password){
            if (password.match(passwordRegex)) {
                errorPassword.innerText="";
                validPassword=true;
            }
            else{
                errorPassword.innerText="Password must include 1 capital letter, 1 symbol, 1 number and lenght must be 8 or more."
            }
        }
        if (email) {
            if (email.match(emailRegex)) {
                errorEmail.innerText="";
                validEmail=true;
            }
            else{
                errorEmail.innerText="Please enter correct email."
            }
        }
        if(validPassword === true && validEmail ===true){
            ++linkNumber;
            console.log("page number:",linkNumber);
            callback(linkNumber);
            // prelinkBtn.style.display="block";
        }
    }

}

nextlinkBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(linkNumber<=4){
        formValidation(linkNumber, NextActiveLink);
    }
});

// link btn active pre btn

if(linkNumber == 1){
    prelinkBtn.style.display="none";
}
prelinkBtn.addEventListener('click',(e)=>{
    console.log("just clicked pre",preNumberLatest);
    e.preventDefault();
    if(preNumberLatest>1){
        if (preNumberLatest>=2) {   
                --preNumberLatest;
                console.log("page number: pre>=2",preNumberLatest);
                // prelinkBtn.style.display="block";
                // nextlinkBtn.style.display="block";
                PrevActiveLink(preNumberLatest);
            }
    }
    if(preNumberLatest == 1){
        console.log("page number: pre==1",preNumberLatest);
        e.preventDefault();
        prelinkBtn.style.display="none";
        PrevActiveLink(preNumberLatest);
    }
    
});