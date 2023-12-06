// link btn active next btn
var linkNumber =1;
var nextlinkBtn = document.querySelector("#next");
var prelinkBtn = document.querySelector("#previous");
var listOfBtnLink = document.querySelectorAll(".link-btn");
var item1 = document.querySelector(".item1");
var item2 = document.querySelector(".item2");
var item3 = document.querySelector(".item3");

const NextActiveLink = () =>{
    listOfBtnLink.forEach(item=>{
        if(item.innerText == linkNumber){
            item.classList.add("link-btn-active");
        }
    });
    if(linkNumber==2){
        item2.style.display ="block";
        item1.style.display="none";
    }
    if(linkNumber==3){
        item3.style.display ="block";
        item2.style.display="none";
    }

}
const PrevActiveLink = () =>{
    let updatedNumber = linkNumber+1;
                listOfBtnLink.forEach(item=>{
                    if(item.innerText == updatedNumber){
                        item.classList.remove("link-btn-active");
                    }
                });

        if(linkNumber==2){
            item2.style.display ="block";
            item3.style.display="none";
        }
        if(linkNumber==1){
            item1.style.display ="block";
            item2.style.display="none";
        }
}

nextlinkBtn.addEventListener('click',(e)=>{
    ++linkNumber;
    if(linkNumber<3){
        console.log("page number:",linkNumber);
        
        
        prelinkBtn.style.display="block";
        NextActiveLink();
    }
    else{
        console.log("page number:",linkNumber);
        item2.style.display ="none";
        item3.style.display ="block";
        document.querySelector("#submitBtn").style.display="block";
        nextlinkBtn.style.display="none";
        NextActiveLink();
    }
});

// link btn active pre btn

if(linkNumber == 1){
    prelinkBtn.style.display="none";
}
prelinkBtn.addEventListener('click',(e)=>{
    if(linkNumber>1){
            --linkNumber;
            if (linkNumber>=2) {   
                console.log("page number:",linkNumber);
                prelinkBtn.style.display="block";
                nextlinkBtn.style.display="block";
                document.querySelector("#submitBtn").style.display="none";
                PrevActiveLink();
            }
    }
    if(linkNumber == 1){
        console.log("page number:",linkNumber);
        e.preventDefault();
        prelinkBtn.style.display="none";
        PrevActiveLink();
    }
    
});