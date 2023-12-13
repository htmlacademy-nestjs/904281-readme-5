import {compare, genSalt, hash} from 'bcrypt'
import { randomUUID } from 'node:crypto'
import { User as UserEntity } from "./user.interface";
import { CreateUserDto } from "./dto";
import { SALT_ROUNDS } from "./constants";

type UserIdType = UserEntity['id']

export class User implements UserEntity {
  public id: string
  public mail: string
  public login: string
  public password: string
  public registerDate: number
  public photo: string
  public following: UserIdType[]
  public subscribers: UserIdType[]

  constructor(data: CreateUserDto) {
    this.populate(data)
  }

  public populate(data: CreateUserDto) {
    this.mail = data.mail
    this.login = data.login
    this.password = data.password
    this.photo = data.photo
    this.following = []
    this.subscribers = []
  }

  public toPOJO() {
    return {
      id: this.id,
      mail: this.mail,
      login: this.login,
      password: this.password,
      registerDate: this.registerDate,
      photo: this.photo,
      following: this.following,
      subscribers: this.subscribers
    }
  }

  public async comparePassword(password: string) {
    return compare(password, this.password)
  }

  private async getPasswordHash(password: string) {
    const salt = await genSalt(SALT_ROUNDS)

    return await hash(password, salt)
  }

  public async init() {
    const passwordHash = await this.getPasswordHash(this.password)
    const id = randomUUID()
    const registerDate = Date.now()

    this.password = passwordHash
    this.id = id
    this.registerDate = registerDate

    return this
  }
}
