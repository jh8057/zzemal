{
  type SuccessState = {
    result: "success";
  };
  type NetwrokErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };
  type ResultState = SuccessState | NetwrokErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: "fail",
        reason: "offline",
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}
    login() {
      return this.client.tryConnect();
      // Login logic
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      let result = this.userService.login();
      console.log(result.result);
      if (result.result === "fail") {
        console.log(result.reason);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  // service.login();

  app.run();
}
