const light = "style/light.css"
const dark = "style/dark.css"
const resultado = document.getElementById("resultado");

function mudarTema() {
    const tema = document.getElementById("theme")
    const tema_icon = document.getElementById("tema_icon")

    // muda os atributos do style
    if(tema.getAttribute("href") === dark) {
        tema.setAttribute("href", light)
        tema_icon.setAttribute("class", "ri-moon-fill ri-2x")
    } else {
        tema.setAttribute("href", dark)
        tema_icon.setAttribute("class", "ri-sun-fill ri-2x")
    }
}

function calcular(valor) {
    // verifica se o valor inserido é valido
    // eval é responsável por realizar a conta
    const valorCalculado = eval(valor || null);

    if (isNaN(valorCalculado)) {
        resultado.value = "Impossível";
    } else {
        resultado.value = valorCalculado;
    }
}

function adicionarNum(valorInserido) {
    resultado.value += valorInserido;
}

// adiciona um eventListener para cada tecla pressionada
document.addEventListener("keydown", valorAdicionado);

function valorAdicionado(e) {
    e.preventDefault();

    if (e.key === "0") {
        resultado.value += "0";
    } else if (e.key === "1") {
        resultado.value += "1";
    }
    else if (e.key === "2") {
        resultado.value += "2";
    }
    else if (e.key === "3") {
        resultado.value += "3";
    }
    else if (e.key === "4") {
        resultado.value += "4";
    }
    else if (e.key === "5") {
        resultado.value += "5";
    }
    else if (e.key === "6") {
        resultado.value += "6";
    }
    else if (e.key === "7") {
        resultado.value += "7";
    }
    else if (e.key === "8") {
        resultado.value += "8";
    }
    else if (e.key === "9") {
        resultado.value += "9";
    }
    else if (e.key === "+") {
        resultado.value += "+";
    }
    else if (e.key === "-") {
        resultado.value += "-";
    }
    else if (e.key === "*") {
        resultado.value += "*";
    }
    else if (e.key === "/") {
        resultado.value += "/";
    }

    if (e.key === "Enter") {
        calcular(resultado.value)
    }

    // remover a última tecla inserida
    if (e.key === "Backspace") {
        const resultInput = resultado.value
        resultado.value = resultInput.substring(0, resultado.value.length - 1)}
}
