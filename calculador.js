const boton = document.querySelector('.btn');

    boton.addEventListener('click' , function(){

        const input = document.getElementById('disponible').value;
        const monto1 = document.getElementById('monto1').value;
        const monto2 = document.getElementById('monto2').value;
        const monto3 = document.getElementById('monto3').value;
        const monto4 = document.getElementById('monto4').value;
        const monto5 = document.getElementById('monto5').value;

        res = (input-monto1);
        res1 = (res-monto2);
        res2 = (res1-monto3);
        res3 = (res2-monto4);
        total = (res3-monto5);

            document.getElementById('resultado').innerHTML = `
            <b>Luego de pagar las facturas te quedan: 
            <i style="color:green">${total}</i>$</b>
            `;
});
