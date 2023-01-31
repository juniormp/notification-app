import User from "../src/model/User.js";

const users = [
  new User(
    1,
    "Mauricio Junior",
    "junior9771@gmail.com",
    "+551198989898",
    ["Sports"],
    ["Push Notification"]
  ),
  new User(
    2,
    "Bob",
    "bob@gmail.com",
    "+5511973737373",
    ["Movies"],
    ["SMS", "Push Notification"]
  ),
  new User(
    3,
    "User 3",
    "user3@example.com",
    "+5511984844848",
    ["Finance"],
    ["Email", "Push Notification"]
  ),
];

export default users;
