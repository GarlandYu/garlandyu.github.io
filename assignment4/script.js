document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const backgroundSelect = document.getElementById('background-select');
    const welcomeMessage = document.getElementById('welcome-message');
  

    const storedName = localStorage.getItem('name');
    if (storedName) {
      welcomeMessage.textContent = `Hi, ${storedName}, glad to see you back!`;
    }
  
    nameInput.addEventListener('blur', () => {
      const enteredName = nameInput.value.trim();
      if (enteredName) {
        localStorage.setItem('name', enteredName);
        welcomeMessage.textContent = `Hi, ${enteredName}, glad to see you back!`;
      }
    });
  
    backgroundSelect.addEventListener('change', () => {
      const selectedBackground = backgroundSelect.value;
      if (selectedBackground === 'lightblue') {
        document.body.style.backgroundImage = "url('hw4/lightblue.jpg')";
        document.body.style.backgroundSize = "cover";
      } else if (selectedBackground === 'lightgold') {
        document.body.style.backgroundImage = "url('hw4/lightgold.jpg')";
        document.body.style.backgroundSize = "cover";
      } else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
      }
    });
  });
  