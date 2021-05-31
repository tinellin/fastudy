import * as fs from 'fs';
import { resolve } from 'path';
export const GLOBAL_PATH_DYNAMIC = '';
export let address = [];
type TUrl = { content: string; type: string };
type TTmp = { tmp: [{ path: '' }] };
let url: TUrl;

export const saveFiles = (req, file, cb, path) => {
  url = path;
  cb(null, resolve(__dirname, '..', '..', 'files', path.content, path.type));
};

export const createFileName = (req, file, cb) => {
  const name = treatName(file);
  const random = Date.now() + Math.round(Math.random() * 100);
  let finalName = `${random}-${name}`;

  cb(null, finalName);

  if (file.originalname !== 'blob') {
    address.push({
      type: file.fieldname,
      //http://localhost:3333
      path: `http://localhost:3333/files/${url.content}/${url.type}/${finalName}`,
    });
  }
};

export const treatName = file => {
  const name = file.originalname.replace(/[^0-9a-zA-Z.]/g, '');
  const nameTreated = name.toLowerCase().trim();

  return nameTreated;
};

export const readTmpFile = (data: TTmp) => {
  //Lê o arquivo json temporário, a partir do end, então, converte para um json e retorna.
  const tmp = fs.readFileSync(data.tmp[0].path);
  const parsed = JSON.parse(tmp.toString());
  return parsed;
};

export const removeTmpFile = (data: TTmp) => {
  return fs.unlinkSync(data.tmp[0].path);
};
