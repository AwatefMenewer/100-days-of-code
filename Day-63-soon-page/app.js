
const valueOfInput = () => {
    let input = document.getElementById('input-email').value
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let text = document.getElementById('text-value')




    if (input.match(pattern)) {
        text = ' '
        document.getElementById('input-email')
    }
    else {

        text = 'Please provide a valid email'
        document.getElementById('input-email')
        document.getElementById("icon-error").innerHTML = "<img src=\"./images/icon-error.svg\">";
        document.getElementById("input-email").style.outline = "1px solid hsl(0, 93%, 68%)";


    }


    document.getElementById('text-value').innerHTML = text





}