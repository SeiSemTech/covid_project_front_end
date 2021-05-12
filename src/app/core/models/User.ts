import {Login} from "./Login";
import {Profile} from "./Profile";

export class User extends Login{
  name: string;
  lastname: string;
  document: number;
  id: string;
  creationDate: number;
  state: boolean;
  profile?: Profile[];
}
