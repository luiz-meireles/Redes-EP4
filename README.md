
## Descrição
Esse repositório contém códigos que simulam a exploração da vulnerabilidade **[CVE-2021-32640](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-32640)** encontrada na biblioteca **[https://github.com/websockets/ws](https://github.com/websockets/ws)**. Isso faz parte de um trabalho da disciplina MAC0352 - Redes de Computadores e Sistemas Distribuídos com o objetivo de estudar algumas vulnerabilidades em aplicações que usam as camadas de redes, em colaboração com [Ygor Tavela](https://github.com/ygortavela).
## Requisitos
- NodeJs
## Execução

- Servidor
	`> node server.js`
- Cliente
	`> node client.js`

## Vulnerabilidade e correção

- Local
		`node_modules/ws/lib/websocket-server.js` (linha 303)
- Vulnerabilidade
		`protocol.trim().split(/  *, */)`
- Correção
		`protocol.split(',').map(trim)`