let div = document.getElementById("clock");

function clock()
{
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    div.innerHTML = h + " : " + m + " : " + s;
}

function add_zero(x)
{
    if(x < 10)
    {
        div.innerHTML = "0" + x;
    }
}
