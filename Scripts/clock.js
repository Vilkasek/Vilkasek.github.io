let div = document.getElementById("clock");

function clock()
{
    let date = new Date();

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = add_zero(h);
    m = add_zero(m);
    s = add_zero(s);

    div.innerHTML = h + " : " + m + " : " + s;

    setTimeout(clock, 1000)
}

function add_zero(x)
{
    if(x < 10){ x = "0" + x};
    return x;
}
