# TacoBot

TacoBot es un Bot creado para la platica Bots & Asistentes Virtuales, las nuevas Apps.

##### Requerimientos para la parte del API
  - npm install -g json-server
  - Tacos.json

```sh
$ npm install -g json-server
$ cd mocks
$ json-server --watch tacos.json --static .\assets\
\{^_^}/ hi!

Loading tacos.json
  Done

  Resources
  http://localhost:3000/places

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...
```

# Para la parte del Bot
```sh
$ git clone git@github.com:ProgramoxComida/TacoBot.git
$ cd TacoBot
$ npm install
$ npm start
```

Es necesario haber creado tu Bot en botframework para poder obtener las llaves de desarrollo:
  - MICROSOFT_APP_NAME
  - MICROSOFT_APP_ID
  - MICROSOFT_APP_PASSWORD