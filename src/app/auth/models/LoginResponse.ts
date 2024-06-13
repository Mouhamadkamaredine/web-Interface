import {User} from "../../shared/models/user";

export interface LoginResponse extends User {

  refreshToken: string | null;
  accessToken: string | null;

}
