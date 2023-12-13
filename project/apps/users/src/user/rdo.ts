import { Expose } from 'class-transformer'

export class UserRdo {
  @Expose()
  public id: string

  @Expose()
  public mail: string

  @Expose()
  public photo: string

  @Expose()
  public login: string

  @Expose()
  public registerDate: number

  @Expose()
  public following: string[]

  @Expose()
  public subscribers: string[]

  @Expose()
  public password: string[]
}
