# Notifications Service 2022 - Producer

- Project to test a microservice: Notifications Service.
- Created using with Upstash + kafka

---

- Projeto para testa um microserviço: Notifications Service.
- Criado usando com o Upstash + kafka

### Techs

- [NodeJS](https://nodejs.org/en/)
- [DotEnv](https://www.npmjs.com/package/dotenv)
- [KafkaJS](https://kafka.js.org/)

### Running
```
npm install

node upstash-kafka-producer.js
```

###  Contact
 - Author - [Brenno - BCL-ST](https://github.com/brennoclins)
 - Website - [BCL-ST](https://www.bcl-st.com.br/)

---

## EXTRAS 

#### Para usar "import" em um projeto nodejs apra o "package.json" e add ao final do rquivo: 
```json
"type": "module"
```

#### para usar variaveis de ambiente instale o dontenv
```bash
npm i dotenv
```

para usar:
```js
import { env } from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

const SERVER = env.UPSTASH_KAFKA_SERVER;
```