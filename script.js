function setear() {
    localStorage.setItem('nombre', 'Chris');
    alert("Almacenado");
}

function getear() {
    let miNombre = localStorage.getItem('nombre');
    alert("Nombre Almacenado es " + miNombre);
}


function remover() {
    localStorage.removeItem('nombre');
    alert("removido");
}