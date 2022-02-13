
   
const form = document.querySelector('#contactForm');


  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  function submitForm(e){
    e.preventDefault();


    db.collection('messages').add({
        name: form.name.value,
        email: form.email.value,
        help: form.help.value,
        subject: form.subject.value
    });
    form.name.value = '';
    form.email.value = '';
    form.help.value = '';
    form.subject.value = '';

    alert("Form has been submitted")
    window.location.href = "./index.html";

  }
  

  

  