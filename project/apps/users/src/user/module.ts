import { Module } from "@nestjs/common";
import { UsersRepository } from './repository'

@Module({
  providers: [UsersRepository],
  exports: [UsersRepository]
})

export class UserModule {}
