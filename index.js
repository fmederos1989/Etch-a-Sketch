const container = document.querySelector('.container');
container.style.display = 'flex';
container.style.flexDirection = 'column'; 
// container.style.gap = '2px';


const selectSize = document.createElement ('button');
selectSize.textContent = 'Seleccionar tamaño';

const selectColor = document.createElement ('input');
selectColor.setAttribute('type', 'color');
selectColor.setAttribute('id', 'color');
selectColor.setAttribute('name', 'color');

const resetColores = document.createElement ('button');
resetColores.textContent = 'Dejar en Blanco';

const resetGrilla = document.createElement ('button');
resetGrilla.textContent = 'Reset Grilla';


const borrar = document.createElement ('button');
borrar.textContent = 'Borrar';

const title = document.createElement ('h1');
title.textContent = 'Etch-a-Sketch';

const body = document.querySelector('body');

const buttonsContainer = document.createElement ('div');
buttonsContainer.style.display = 'flex';
buttonsContainer.style.justifyContent ='center';
buttonsContainer.style.alignItems = 'center';
buttonsContainer.style.width = '960px';
buttonsContainer.style.marginBottom = '10px';
buttonsContainer.style.gap = '30px';

body.appendChild(title);
body.insertBefore(title, container);
body.appendChild(buttonsContainer);
body.insertBefore(buttonsContainer, container);
buttonsContainer.appendChild(selectSize);
buttonsContainer.appendChild(selectColor);
buttonsContainer.appendChild(borrar);
buttonsContainer.appendChild(resetGrilla);
buttonsContainer.appendChild(resetColores);


function agregarFilas(cantidad){
    for (let i = 0; i < cantidad; i++) {
        filas = document.createElement ('div');
        filas.style.height = '100%';
        filas.style.display = 'flex';
        filas.classList.add('fila');
        container.appendChild(filas);
        for (let j = 0 ; j < cantidad; j++) {
            columnas = document.createElement ('div');
            columnas.style.width = '100%';
            columnas.classList.add ('punto');
            columnas.style.border = '1px solid lightgray';
            filas.appendChild(columnas);
        }
        eliminarElementos = document.querySelectorAll('.fila')
        borrarFilas = document.querySelectorAll('.fila');
    }}
    
    const agregarListeners = () => {
        container.childNodes.forEach ((elemento) => {
            elemento.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = colorSeleccionado;
            });
        });
    };
    
    const borrarColores = () => {
        container.childNodes.forEach ((elemento) => {
            elemento.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = '#FFFFFF';
            });
        });
    };

    resetGrilla.addEventListener('click', () => {
        borrarFilas.forEach(elemento => {
            container.removeChild(elemento)
        });
        selectSize.disabled = false;
    });

    
    
    selectSize.addEventListener('click', () => {
        const tamaño = prompt('Ingrese el tamaño de la grilla');
        if (tamaño) {
            agregarFilas(tamaño);
            agregarListeners();
        }
        selectSize.disabled = true;
    })
    
    let colorSeleccionado;
    selectColor.addEventListener('input', () => {
        colorSeleccionado = selectColor.value;
        agregarListeners();
    })

    
    resetColores.addEventListener('click', () => {    
        var eliminarElementos = document.querySelectorAll('.punto');
        eliminarElementos.forEach(elemento => {
            elemento.style.backgroundColor = '#FFFFFF';
            console.log(eliminarElementos);
    });
});


borrar.addEventListener('click', () => {
    borrarColores();
});

