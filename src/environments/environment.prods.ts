export const environment = {
  production: true,

  PORTAL_API: 'http://10.20.100.61:8030/api',
  //PORTAL_API: 'https://localhost:44382/api',

  FERIADOS_API: 'https://api.calendario.com.br/?json=true&token=dmZpbmF0aUBlcnNvZnQuY29tLmJyJmhhc2g9ODg4MjE5MDE&ano='
};

//Comandos para publicar o SSR
//npm run build:ssr -- Gerar o Pacote
//npm run serve:ssr -- Rodar o site na porta 4000