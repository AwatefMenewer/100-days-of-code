const valueOfInput = () => {
    let input = document.getElementById('input-value').value
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let text

    if (input.match(pattern)) {
        text = 'a vailed eamill address  '
        document.getElementById('input-value').style.borderColor = " hsl(209, 33%, 12%)";
        document.getElementById('input-value').style.color = " hsl(209, 33%, 12%)";



    }
    else {

        text = 'Please provide  a vailed eamill address'
        document.getElementById('input-value').style.borderColor = "hsl(354, 100%, 66%)";
    }


    document.getElementById('text-value').innerHTML = text

}
