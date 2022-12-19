import { Kafka } from 'kafkajs';
import { randomUUID } from "crypto";
import { env } from 'process';
import * as dotenv from 'dotenv';
dotenv.config();

const SERVER = env.UPSTASH_KAFKA_SERVER;
const USERNAME = env.UPSTASH_KAFKA_REST_USERNAME;
const PASSWORD =  env.UPSTASH_KAFKA_REST_PASSWORD;

async function bootstrap() {
  if(SERVER === undefined) {
    throw new Error('Server uptash note found!');
  }

  if(USERNAME === undefined || PASSWORD === undefined) {
    throw new Error('Authentication sever error!');
  }

  const kafka = new Kafka({
    clientId: 'kafka-producer-test',
    brokers: [SERVER],
    sasl: {
      mechanism: "scram-sha-256",
      username:
        USERNAME,
      password:
        PASSWORD,
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'BCL-LAB esta ao vivo!',
          category: 'live',
          recipientId: randomUUID(),
        })
      }
    ]
  });

  await producer.disconnect();
}

bootstrap();
console.log('UPSTASH KAFKA PRODUCER - OK');