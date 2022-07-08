class Resolve {
    constructor(num1, num2, opSum, opRes, opMul, opDiv){
        this.num1 = num1;
        this.num2 = num2;
        this.opSum = opSum;
        this.opRes = opRes;
        this.opMul = opMul;
        this.opDiv = opDiv;
    }
}

/*
con la ayuda de checked => const checkbox = document.getElementById('checkS').checked
se verifica en la validación con true que se haya dado click en el checkbox
*/
class UI{
    sumar(num1, num2){
        const checkbox = document.getElementById('checkS').checked
        if(checkbox === true){
            document.getElementById('sum').value = `${parseInt(num1) + parseInt(num2)}`
        }
    }

    restar(num1, num2){
        const checkbox = document.getElementById('checkR').checked
        if(checkbox === true){
            document.getElementById('res').value = `${parseInt(num1) - parseInt(num2)}`
        }
    }

    multiplicar(num1, num2){
        const checkbox = document.getElementById('checkM').checked
        if(checkbox === true){
            document.getElementById('mul').value = `${parseInt(num1) * parseInt(num2)}`
        }
    }

    dividir(num1, num2){
        const checkbox = document.getElementById('checkD').checked
        if(checkbox === true){
            document.getElementById('div').value = `${parseInt(num1) / parseInt(num2)}`
        }
    }

    alert(mensage, codeCss){
        const div = document.createElement('div');
        div.className = `alert alert-${codeCss}`
        let container = document.querySelector('.container');
        let antes = document.querySelector('#antes');
        div.innerHTML = `
                <strong>${mensage}</strong>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
        `

        //inserta el elemento planteado antes de acuerdo al elemento planteado en el segundo argumento
        //primer argumento es el elemento a introducirce
        //segundo argumento es el elemento del cual se debe partir para poner antes de el el elemento que se quiere crear
        container.insertBefore(div, antes)

        setTimeout(() => {
           document.querySelector('.alert').remove(); 
        }, 10000);
    }

    resolve(resolve){
        let div = document.createElement('div');

        div.innerHTML = `
        <div>
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Número 1 </strong> : ${resolve.num1}<br>
                <strong>Número 2 </strong> : ${resolve.num2}<br>
                <strong>Suma de número 1 y número 2</strong> : ${resolve.opSum}<br>
                <strong>Resta de número 1 y número 2</strong> : ${resolve.opRes}<br>
                <strong>Multiplicación de número 1 y número 2</strong> : ${resolve.opMul}<br>
                <strong>División de número 1 y número 2</strong> : ${resolve.opDiv}<br>
                <a href="#" class="btn btn-danger btn-block" name="delete">Borrar</a>
            </div>
        </div>
    </div>
        `
    const resultados = document.querySelector('#resultados');
    resultados.appendChild(div);
    }

    eliminarResolve(elemento){
        if(elemento.name === "delete"){
            elemento.parentElement.parentElement.parentElement.parentElement.remove();
        }
    }

    eliminarAlert(){
        document.querySelector('.alert').remove();
    }
}

document.getElementById('form-resolve').addEventListener('submit' , (e)=>{
    e.preventDefault();

    //capturamos los valores que se van a ingresar en num1 y num2
    const num1 = document.getElementById('numero1').value
    const num2 = document.getElementById('numero2').value

    //capturamos los valores que van a ser utilizados ahora por la instancia de la clase Resolve

    const opSum = document.getElementById('sum').value;
    const opRes = document.getElementById('res').value;
    const opMul = document.getElementById('mul').value;
    const opDiv = document.getElementById('div').value;

    //Instanciamos un objeto de la clase UI
    const ui = new UI();

    //Instanciamos ahora los objetos de clase Resolve
    const resolve = new Resolve(num1, num2, opSum, opRes, opMul, opDiv);

    //validar que los campos num1 y num2 esten llenados
    if(num1.length === 0 || num2.length === 0){
        ui.alert('No se puede aceptar números vacios','warning')
    }else{
        ui.alert('Operación exitosa', 'success')
        ui.sumar(num1, num2)
        ui.restar(num1, num2)
        ui.multiplicar(num1, num2)
        ui.dividir(num1, num2)
        ui.resolve(resolve);
    }
})

//con este proceso vamos a eliminar la parte de los resultados 
document.getElementById('resultados').addEventListener('click', (e) => {
    const elemento = e.target;
    
    const ui = new UI();
    ui.eliminarResolve(elemento);
    ui.alert('Borrado exitosamente','danger');
})

//con este proceso vamos a eliminar la notificación de la parte superior
document.querySelector('.container').addEventListener('click', (e) =>{
    const ui = new UI();
    ui.eliminarAlert()
})

