mainAppointmentButton = document.getElementById('main-appointment-button-id')
function mouseoverAppointmentButton(){
  mainAppointmentButton.style.transition="0.5s";
  mainAppointmentButton.style.backgroundColor="#ffc107";
  mainAppointmentButton.style.color="#000000";
}
function mouseoutAppointmentButton(){
  mainAppointmentButton.style.transition="0.5s";
  mainAppointmentButton.style.backgroundColor="#000000";
  mainAppointmentButton.style.color="#ffffff";
}
mainAppointmentButton.addEventListener('mouseover',mouseoverAppointmentButton);
mainAppointmentButton.addEventListener('mouseout',mouseoutAppointmentButton);
