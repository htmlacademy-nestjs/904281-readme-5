import { Entity } from "@project/types";

type IdType = Entity["id"]

export interface User extends Entity {
  mail: string
  login: string
  password: string
  photo: string
  registerDate: number
  following: IdType[]
  subscribers: IdType[]
}
