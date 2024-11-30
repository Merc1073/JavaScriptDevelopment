let username;

document.getElementById("MySubmit").onclick = function()
{
    username = document.getElementById("MyText").value;
    document.getElementById("MyName").textContent = `Your name is: ${username}`
}

