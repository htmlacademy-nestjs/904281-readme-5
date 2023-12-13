import {MemoryRepository} from "@project/repository";
import { User } from "./user.entity";
import {Injectable} from "@nestjs/common";

@Injectable()
export class UsersRepository extends MemoryRepository<User> {
  public findByMail(mail: string): User | undefined {
    const entities = Array.from(this.entities.values())

    return entities.find(entity => entity.mail === mail)
  }
}
