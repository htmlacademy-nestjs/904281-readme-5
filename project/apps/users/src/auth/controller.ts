import {Controller, Post, Body} from "@nestjs/common";
import {fillDto} from "@project/utils";
import {UserRdo} from "../user/rdo";
import { CreateUserDto, LoginUserDto } from "../user/dto";
import { AuthService } from "./service";

@Controller('/')
export class AuthController {

  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() dto: CreateUserDto){
    const user = await this.authService.register(dto)

    return fillDto(UserRdo, user.toPOJO())
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.verifyUser(dto)

    return fillDto(UserRdo, user.toPOJO())
  }
}
