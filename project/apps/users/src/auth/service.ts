import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common";
import {CreateUserDto, LoginUserDto} from "../user/dto";
import { UsersRepository } from "../user/repository";
import {User} from "../user/user.entity";

@Injectable()
export class AuthService {
  constructor(private readonly usersRepository: UsersRepository) {}

  public async register(dto: CreateUserDto ) {
    const { mail } = dto
    const existUser = this.usersRepository.findByMail(mail)

    if (existUser) {
      throw new ConflictException('User with this email exists')
    }

    const user = await new User(dto).init()

    return this.usersRepository.save(user)
  }

  public async verifyUser(dto: LoginUserDto) {
    const { mail, password } = dto
    const user = this.usersRepository.findByMail(mail)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const isValidPassword = await user.comparePassword(password)

    if (!isValidPassword) {
      throw  new UnauthorizedException('User password is wrong')
    }

    return user
  }
}
