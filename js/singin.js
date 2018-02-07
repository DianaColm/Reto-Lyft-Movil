/*plugin de banderas*/
$(document).ready(function () {
    $('#phone').intlTelInput();
});

/*se declara el valor del boton next */
var next = $('.next');
/*el botón estara desactivado hasta que se introduzca un numero de 10 digitos */
$("#phone").keypress(function () {
    if ((this.value).length === 9) {
        next.removeClass('disabled');
    } else if ((this.value).length !== 10) {
        next.addClass('disabled');
    }
});

/*función para crear código random*/
function makeid() {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 3; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

/*Se genera código y se muestra en un alert*/
next.on("click", function (event) {
    event.preventDefault();
    makeCode();
    alert('Tu código: ' + 'LAB-' + code);
    window.location.href = 'verify.html';
});

var code ;
function makeCode() {
  code= makeid();
  localStorage.saving = code;
}
