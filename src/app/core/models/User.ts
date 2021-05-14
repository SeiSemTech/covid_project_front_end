import {Login} from "./Login";
import {Rol} from "./Rol";

export class User extends Login{
  id: string;
  name: string;
  lastname: string;
  document: number;
  creationDate: number;
  state: boolean;
  roles?: Rol[];
}
