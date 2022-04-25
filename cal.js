let result = document.getElementById("txt");

const display = (value) => {
    result.value += value;
}

const clear = () => {
    result.value = '';
}

const calculate = () => {
    let equal = eval(result.value);
    result.value = equal;
}