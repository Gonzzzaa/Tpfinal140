function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var consulta = document.getElementById('consulta').value;

    var formularioData = 'Nombre: ' + nombre + '\nApellido: ' + apellido + '\nEmail: ' + email + '\nTeléfono: ' + telefono + '\nConsulta: ' + consulta + '\n';

    var blob = new Blob([formularioData], { type: 'text/plain' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'contacto.txt';
    link.click();
}

