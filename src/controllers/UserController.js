import users from "../../seed/users.js";

export default class UserController {
  getUsers() {
    return users;
  }
}
