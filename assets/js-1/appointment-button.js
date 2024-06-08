mainAppointmentButton = document.getElementById('main-appointment-button-id')
function mouseoverAppointmentButton(){
  mainAppointmentButton.style.transition="0.5s";
  mainAppointmentButton.style.backgroundColor="#ffc107";
  mainAppointmentButton.style.color="#1d2434";
}
function mouseoutAppointmentButton(){
  mainAppointmentButton.style.transition="0.5s";
  mainAppointmentButton.style.backgroundColor="#1d2434";
  mainAppointmentButton.style.color="#ffffff";
}
mainAppointmentButton.addEventListener('mouseover',mouseoverAppointmentButton);
mainAppointmentButton.addEventListener('mouseout',mouseoutAppointmentButton);
