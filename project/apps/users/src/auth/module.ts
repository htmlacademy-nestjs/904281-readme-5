import { Module } from "@nestjs/common";
import { AuthController } from "./controller";
import { AuthService } from "./service";
import {UserModule} from "../user/module";

@Module({
  imports: [UserModule],
  providers: [AuthService],
  controllers: [AuthController]
})

export class AuthModule {}
