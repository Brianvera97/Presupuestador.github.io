const PRESUPUESTAR = document.getElementById('presupuestar');
const GS = document.getElementById('gs');
const ERROR = document.getElementById('error');
PRESUPUESTAR.addEventListener('click', () => {
    const MATERIAL = parseInt(document.getElementById('material').value);
    const COMBUS = parseInt(document.getElementById('combus').value);
    const MANODEOBRA = parseInt(document.getElementById('ManoDeObra').value);
    const VIATICO = parseInt(document.getElementById('viatico').value);
    const OTROS = parseInt(document.getElementById('otros').value);
    const DIFICULTAD = parseFloat(document.getElementById('dificultad').value);

    validarForm(MATERIAL, COMBUS, VIATICO, OTROS)

    if (MATERIAL >= 0 && COMBUS >= 0 && MANODEOBRA >= 0 && VIATICO >= 0 && OTROS >= 0 && DIFICULTAD >= 0) {

        let suma = (MATERIAL + MANODEOBRA + COMBUS + VIATICO + OTROS)
        let dificultad = suma * DIFICULTAD
        let resultado = (dificultad + suma)
        let presupuesto = resultado * 0.6
        let presupuestoFinal = resultado + presupuesto
        let presupuestoFormateado = presupuestoFinal.toLocaleString('es-ES', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        console.log(presupuestoFormateado);
        GS.innerHTML = `Presupuesto: ${presupuestoFormateado} Gs`
        GS.style.display = 'block';
        ERROR.style.display = 'none'
    }
    else {
        ERROR.style.display = 'block'
        GS.style.display = 'none'
    }

})
function validarForm(MATERIAL, COMBUS,VIATICO, MANODEOBRA, OTROS, DIFICULTAD, ) {
    console.log(VIATICO);
    let esValido = true

    //Material
    if (isNaN(MATERIAL)) {
        esValido = false
        document.getElementById('materialError').textContent = '* completa este campo'
        document.getElementById('material').classList.add('inputError')

    }
    else {
        document.getElementById('materialError').textContent = ''
        document.getElementById('material').classList.remove('inputError')
    }
    //Combus
    if (isNaN(COMBUS)) {
        esValido = false
        document.getElementById('combusError').textContent = '* completa este campo'
        document.getElementById('combus').classList.add('inputError')
    }
    else {
        document.getElementById('combusError').textContent = ''
        document.getElementById('combus').classList.remove('inputError')
    }

    if (!esValido) {
        event.preventDefault()
    }

}