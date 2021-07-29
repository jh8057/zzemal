// callback Hell example
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "ellie" && password === "dream") ||
          (id === "rlawogus" && password === "rlawogus") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
  //async
  async getUserWithRole(id, password) {
    const user = await this.loginUser(id, password);
    const role = await this.getRoles(user);
    return role;
  }
}

const loginContain = document.querySelector(".login");
const idContain = loginContain.querySelector(".id");
const pwContain = loginContain.querySelector(".pw");
const loginbtn = loginContain.querySelector("button");

const userstorage = new UserStorage();

function handlelogin(event) {
  event.preventDefault();
  const id = idContain.value;
  const password = pwContain.value;
  //   이곳을 변경하세요.
  //  -----------------------
  userstorage
    .getUserWithRole(id, password)
    .catch(console.log)
    .then(
      (result) => result && alert(`${result.name} has ${result.role} access`)
    )
    .catch(console.log);
  //  -----------------------
  idContain.value = "";
  pwContain.value = "";
}

function init() {
  loginbtn.addEventListener("click", handlelogin);
}

init();
