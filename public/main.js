
$(document).ready(function() {
    $('.cdn_remove').removeClass('waves-effect');
    $('.cdn_remove').removeClass('waves-light');
  });

$('input.number').keyup(function(event) {
  // skip for arrow keys
  if(event.which >= 37 && event.which <= 40) return;

  // format number
  $(this).val(function(index, value) {
    return value
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    ;
  });
});