import {Login} from "./Login";

export class User extends Login{
  name: string;
  lastname: string;
  username: string;
  password: string;
  id: string;
  creationDate: number;
  state: boolean;
}
