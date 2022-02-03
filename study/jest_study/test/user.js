class UserService {
  constructor(userClient) {
    this.userClient = userClient;
    this.isLoginedIn = false;
  }

  login(id, pw) {
    if (!this.isLoginedIn) {
      return this.userClient
        .login(id, pw)
        .then((data) => (this.isLoginedIn = true));
    }
  }
}
module.exports = UserService;
