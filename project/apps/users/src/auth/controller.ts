import {Controller, Post, Body} from "@nestjs/common";
import {fillDto} from "@project/utils";
import {UserRdo} from "../user/rdo";
import {CreateUserDto} from "../user/create-user.dto";
import { AuthService } from "./service";

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto){
    const user = await this.authService.register(dto)

    return fillDto(UserRdo, user.toPOJO())
  }
}
