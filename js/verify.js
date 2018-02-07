var next = $('.next');
/*el botón estara desactivado hasta que se introduzca un numero de 3 digitos */
$("#next").keypress(function () {
    if ((this.value).length === 2) {
        next.removeClass('disabled');
    } else if ((this.value).length !== 3) {
        next.addClass('disabled');
    }
});

/*función para crear código random*/
function makeid() {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

/*boton resend*/
var resend = $('.resend');
resend.on("click", function (event) {
    event.preventDefault();
    makeCode();
    alert('Tu código: ' + 'LAB-' + code);
    /*window.location.href = 'verify.html';*/
});

var code ;
function makeCode() {
  code= makeid();
  localStorage.saving = code;
}
