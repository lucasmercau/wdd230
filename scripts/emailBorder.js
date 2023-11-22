const emailBorder = document.getElementById('email');
const myForm = document.getElementById('myForm');
document.getElementById('email').addEventListener('input', function () {
    let emailInput = this.value.trim();
    let emailError = document.getElementById('email-error');
          
    // Check if the email ends with "@byui.edu"
    if (emailInput.endsWith('@byui.edu')) {
        emailBorder.style.borderLeft = "green solid 6px";
        emailError.textContent = ''; // No error message
        document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        myForm.method = "get";
        myForm.action = "record.html";
        this.submit();
        });
    } else {
        emailBorder.style.borderLeft = "red solid 6px";
    
        myForm.method = "";
        myForm.action = "";
        myForm.addEventListener("submit", function (event) {
            // Prevent the default form submission behavior (page reload)
            event.preventDefault();
        });
    
        emailError.textContent = 'Email must end with @byui.edu';
        
    }
});