mainAppointmentButton = document.getElementById('main-appointment-button-id')
function mouseoverAppointmentButton(){
  mainAppointmentButton.style.transition="0.5s";
  mainAppointmentButton.style.backgroundColor="#af964d";
}
function mouseoutAppointmentButton(){
  mainAppointmentButton.style.transition="0.5s";
  mainAppointmentButton.style.backgroundColor="#af964da6";
}
mainAppointmentButton.addEventListener('mouseover',mouseoverAppointmentButton);
mainAppointmentButton.addEventListener('mouseout',mouseoutAppointmentButton);
