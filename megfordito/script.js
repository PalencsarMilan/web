const megfordit = () => {
    let beviteli = document.getElementById('be').value;
    let forditott = beviteli.split('').reverse().join('');
    document.getElementById('ki').innerText = forditott;
  }
