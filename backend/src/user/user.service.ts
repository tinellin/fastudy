import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './../db/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { address } from 'src/multer/multerUtils';

export interface ILocation {
  id?: number;
  state: string;
  city: string;
  country: string;
}

let months = [
  { key: 1, month: 'JANEIRO' },
  { key: 2, month: 'FEVEREIRO' },
  { key: 3, month: 'MARÇO' },
  { key: 4, month: 'ABRIL' },
  { key: 5, month: 'MAIO' },
  { key: 6, month: 'JUNHO' },
  { key: 7, month: 'JULHO' },
  { key: 8, month: 'AGOSTO' },
  { key: 9, month: 'SETEMBRO' },
  { key: 10, month: 'OUTUBRO' },
  { key: 11, month: 'NOVEMBRO' },
  { key: 12, month: 'DEZEMBRO' },
];

@Injectable()
export class UserService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
  ) {}

  async getUser(email: string): Promise<User> {
    const user = await this.userRepo.findOne({
      where: { email: email.toLowerCase().trim() },
    });

    return user;
  }

  async createUser(payload: User): Promise<User> {
    const user = await this.getUser(payload.email);

    if (!user) {
      const user = this.userRepo.create({
        userType: payload.userType,
        username: payload.username,
        email: payload.email.toLowerCase().trim(),
        password: bcrypt.hashSync(payload.password, 12),
        state: ' ',
        city: '',
        country: '',
        userImg: `https://ui-avatars.com/api/?name=${payload.username}`,
      });

      await this.userRepo.save(user);

      throw new HttpException('Usuário criado!', HttpStatus.OK);
    }

    throw new HttpException(
      'O email inserido já está cadastrado!',
      HttpStatus.CONFLICT,
    );
  }

  async changeUserImg(data): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: data.id } });
    if (user) {
      return this.userRepo.save({
        id: user.id,
        userImg: address[0].path,
      });
    }
  }

  async verifyPassword({ psw, id }): Promise<Boolean> {
    const user = await this.userRepo.find({ where: { id } });
    const password = user.map(data => {
      return data.password;
    });

    const compared = bcrypt.compareSync(psw, password.toString());
    return compared;
  }

  async sendLocation(data: ILocation): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: data.id } });

    if (user) {
      return this.userRepo.save({
        id: user.id,
        state: data.state,
        city: data.city,
        country: data.country,
      });
    }
  }

  async getLocation(user): Promise<ILocation> {
    const { state, city, country } = await this.userRepo.findOne({
      where: { id: user.id },
    });
    return { state, city, country };
  }

  async getCreatedAt(user): Promise<string> {
    const data = await this.userRepo.findOne({ where: { id: user.id } });
    const createdAt = data.createdAt;
    let fMonth: string;
    const month = data.createdAt.getMonth();

    months.map(item => {
      if (item.key === month + 2) {
        fMonth = item.month;
      }
    });
    const date = fMonth + ', ' + createdAt.getFullYear();
    return date;
  }

  async updatePassword(data): Promise<User> {
    const user = await this.userRepo.findOne({ where: { id: data.id } });
    if (user) {
      return this.userRepo.save({
        id: user.id,
        password: bcrypt.hashSync(data.psw, 12),
      });
    }
  }
}
