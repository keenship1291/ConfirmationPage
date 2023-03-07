const confirmBtn = document.getElementById('confirm-btn');
const confirmationMsg = document.getElementById('confirmation-msg');

confirmBtn.addEventListener('click', () => {
  confirmationMsg.style.display = 'block';
  confirmationMsg.textContent = 'The email is now confirmed';
});
