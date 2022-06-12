import { DomainModels } from "./base/domain-models";

export class User extends DomainModels {
  username?: string;
  password?: string;
  email?: string;
  token?: string;
}
