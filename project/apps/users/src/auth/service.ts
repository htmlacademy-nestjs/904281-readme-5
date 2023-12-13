import {ConflictException, Injectable} from "@nestjs/common";
import {CreateUserDto} from "../user/create-user.dto";
import { UsersRepository } from "../user/repository";
import {User} from "../user/user.entity";

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async register(dto: CreateUserDto ) {
    const { mail } = dto

    const isUserExist = this.usersRepository.findByMail(mail)

    if (isUserExist) {
      throw new ConflictException('User with this email exists')
    }

    const user = await new User(dto).init()

    return this.usersRepository.save(user)
  }
}
