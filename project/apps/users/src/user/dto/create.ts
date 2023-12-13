import { User } from "../user.interface";

type UserDto = Pick<User, 'mail' | 'login' | 'password' | 'photo'>

export class CreateUserDto implements UserDto {
  mail: string
  login: string
  password: string
  photo: string
}
