// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

// Check if newsletter is checked
const checkbox = document.getElementById('newsletterSignup');
const emailAddress = document.getElementById('emailShow');
checkbox.addEventListener('change', e => {
  const clicked = e.target;
  clicked.checked ? emailAddress.style.display = 'block' : emailAddress.style.display = 'none';
});