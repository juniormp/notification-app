class User {
  constructor(id, name, email, phoneNumber, subscribed, channels) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.subscribed = subscribed;
    this.channels = channels;
  }
}

export default User;
