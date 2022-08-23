document.getElementById('result').style.display = "none";

const inputTexto = document.getElementById('input');


function cript(){
    let input = document.getElementById('input').value;
    input = input.replace(/e/g, 'enter');
    input = input.replace(/i/g, 'imes');
    input = input.replace(/a/g, 'ai');
    input = input.replace(/o/g, 'ober');
    input = input.replace(/u/g, 'ufat');
    showOutput(input, 1);
}

function decript(){
    let input = document.getElementById('input').value;
    input = input.replace(/enter/g,'e' );
    input = input.replace(/imes/g ,'i');
    input = input.replace(/ai/g  ,'a');
    input = input.replace(/ober/g ,'o' );
    input = input.replace(/ufat/g ,'u' );
    showOutput(input, 0);
}

function showOutput(input, i) {
document.getElementById('default').style.display = "none";
document.getElementById('result').style.display = "block";
document.getElementById('texttransformed').style.display ="block";
if (i === 1) {
    document.getElementById("outTitle").innerHTML = "Texto encriptado:";
    document.getElementById('texttransformed').innerHTML = input;
    document.getElementsByClassName("copy").style.display= "inline";

} else {
    document.getElementById("outTitle").innerHTML = "Texto decriptado:";
    document.getElementById('texttransformed').innerHTML = input;
    document.getElementsByClassName("copy").style.display= "inline";

    }
}

function copy(){
        var copiar = document.getElementById("texttransformed");
        copiar.select();
        document.execCommand("copy");
        alert("O texto é: " + copiar.value);
}




