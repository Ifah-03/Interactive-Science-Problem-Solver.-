function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oWKK7ykdBy":
        Script1();
        break;
      case "5cLYX3bsiSm":
        Script2();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var total = player.GetVar("total");
var persen = player.GetVar("persen"); 
total = player.GetVar("q1")+player.GetVar("q2")+player.GetVar("q3")+player.GetVar("q4")+player.GetVar("q5");
persen = total/75*100;
player.SetVar("total",total); 
player.SetVar("persen",persen);
}

function Script2()
{
  var player = GetPlayer();

var username= player.GetVar("username");
var total= player.GetVar("total");

fetch('https://script.google.com/macros/s/AKfycbycUvE3xmHcSt6pDpqva84Ro0VYDn69q5ssrhhg5IO8LMXORtRw7r6RNDZCiqNaDKLe/exec', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        nama: username,
        nilai: total,
    }),
}).then(response => {
    if (response.ok) {
        console.log('Data berhasil dikirim');
    } else {
        console.error('Gagal mengirim data');
    }
}).catch(error => console.error('Error:', error));
}

