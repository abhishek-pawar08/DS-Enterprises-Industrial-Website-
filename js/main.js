// STICKY NAVBAR SHADOW

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 0);

});

// CONTACT FORM

const contactForm = document.querySelector(".contact-form");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Inquiry Submitted Successfully!");

    });

}

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({
                behavior:"smooth"
            });

    });
    const inquiryForm = document.getElementById("inquiryForm");

if(inquiryForm){

    inquiryForm.addEventListener("submit", async(e)=>{

        e.preventDefault();

        const data = {

            name:document.getElementById("name").value,

            email:document.getElementById("email").value,

            phone:document.getElementById("phone").value,

            product:document.getElementById("product").value,

            quantity:document.getElementById("quantity").value,

            message:document.getElementById("message").value

        };

        try{

            const response = await fetch("http://localhost:5000/api/inquiry",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(data)

            });

            const result = await response.json();

            alert(result.message);

            inquiryForm.reset();

        }

        catch(error){

            alert("Something Went Wrong");

        }

    });

}

});
const scrollBtn =
document.getElementById("scrollTopBtn");

window.onscroll = function(){

    if(document.body.scrollTop > 200 ||
       document.documentElement.scrollTop > 200){

        scrollBtn.style.display = "block";

    }

    else{

        scrollBtn.style.display = "none";

    }

};

scrollBtn.addEventListener("click", ()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});