document.getElementById("contact-options").onchange = function(){
    if (this.value == "email"){
        document.getElementById("email").style.display = "block";
        document.getElementById("phone").style.display = "none";
    }
    else if(this.value == "phone"){
        document.getElementById("phone").style.display = "block";
        document.getElementById("email").style.display = "none";
    }
};
