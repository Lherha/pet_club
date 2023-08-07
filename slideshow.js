// console.log('This is a Pet Page');

// var footer =
// document.getElementsByClassName
// ("tips_question");

// console.log(footer);

// //contact page 

// var contacts = 
// document.getElementsByClassName
// ('contacts');

// console.log(contacts);

/* Slideshow */


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}
















// const form = document.getElementById('myForm');
// form.addEventListener('submit', validate)
// function validate(e) {
//   e.preventDefault();
      
//   if( nameBox.value == "" || nameBox.value == null) {
//      alert("Please provide your name!");
//   }
//   if( eMailBox.value == "" || eMailBox.value == null) {
//      alert("Please provide your Email!");
//   }
//   if( phoneBox.value == "" || phoneBox.value == null) {
//     alert("Please provide your Phone Number in the format #####.");
//  }
//   if( textBox.value == "" || textBox.value == null) {
//      alert("Please leave a note!");
    
//   } else {
//     alert('congratulations!!')
//    }

//   return( true );

// }







// const myForm = document.getElementById('myForm');
// const nameBox = document.getElementById('nameBox');
// const eMailBox = document.getElementById('emailBox');
// const phoneBox = document.getElementById('phoneBox');
// const textBox = document.getElementById('textBox');

// myForm.addEventListener('submit', e => {
//   e.preventDefault();

//   validateInputs();
// });

// const validateInputs = () => {
//   const nameBoxValue = nameBox.value.trim();
//   const emailBoxValue = emailBox.value.trim();
//   const phoneBoxValue = phoneBox.value.trim();
//   const textBoxValue = textBox.value.trim();



// };





// const validationForm = document.getElementById('myForm');
// let nameBox = document.getElementById('nameBox')

// validationForm.addEventListener('submit', unValidationForm);

// function unValidationForm(e) {
//   e.preventDefault();

//   if (nameBox==null || nameBox==""){  
//     alert("Name can't be blank");  
//     return false;  
//     }
// };




 // if(nameBox.value == "" || nameBox.value == null) {
  //   alert("Please provide your name!");
  //   // return false;
  // } else {
  //   alert('congratulations!!')
  // }