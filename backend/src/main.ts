import * as express from 'express';
import * as bodyParser from 'body-parser';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';
import * as cors from 'cors';

async function start() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  //Rota estática para pegar os arquivos, a partir do /files/ é mapeado todos os arquivos.
  app.use('/files', express.static(resolve(__dirname, '..', 'files')));

  await app.listen(3333);
}

start();
