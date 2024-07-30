function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
  });

function sendEmail(action, url) {
    console.log(`Sending email with action: ${action}`); // Debug log

    emailjs.send('service_s1h6nmn', 'template_9jmhf7n', {
        action: action
    }).then((response) => {
        console.log('Success:', response);
        window.location.href = url; // Navigate to the URL after sending the email
    }).catch((error) => {
        console.error('Error:', error);
        alert('Failed to send email. Please try again later.'); // Notify user of failure
    });
}
