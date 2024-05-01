function handleFormSubmit(event) {
    event.preventDefault()
   

 
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

   
    const isEmailValid = emailInput.value.trim() !== '' && emailInput.validity.valid
    console.log(isEmailValid);
    let isMessageValid = messageInput.value.trim() !== '';
    console.log({ isMessageValid });

    const isFormValid = isEmailValid && isMessageValid

    if(isFormValid) {
        
        const formData = new FormData(event.target)
        console.log(formData);
        fetch('https://formspree.io/f/xkndkobk', 
            {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }
        )
        .then( response => response.json())
        .then( data => {
            console.log(data);
            if(data.ok) {
                alert('Email successfully sent')
            }
        })

        console.log('code is running');
        const arr = ['hi', 'there', 'hey']
        console.log(arr);

        arr.forEach((item) => {
            console.log(item);
        })
        console.log(8 + 9);
    } else {
        // alert the user that the form is invalid
        if(isEmailValid !== true) {
            // display the email span
            const emailSpan = document.getElementById('email-span')
            console.log(emailSpan.classList);
            emailSpan.classList.remove('hidden')
            console.log(emailSpan.classList);
        }
        if(isMessageValid !== true) {
            // display the message span
            const messageSpan = document.getElementById('message-span')
            messageSpan.classList.remove('hidden')
        }
    }
}   
