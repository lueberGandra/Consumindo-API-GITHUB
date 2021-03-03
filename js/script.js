const searchBtn = document.querySelector(".searchBtn");
const textInput = document.querySelector(".textInput");
const card = document.querySelector(".card");
let linkGit;
searchBtn.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${textInput.value}`)
    .then((response) => response.json())
    .then((linkGit) => {
      if (textInput.value === "" || linkGit.message === "Not Found") {
        document.querySelector(".erro").innerHTML =
          "Usuário inválido, digite novamente!";
      } else {
        document.querySelector(".erro").innerHTML = "";
        document.querySelector(".profile-img").src = linkGit.avatar_url;
        document.querySelector(".name").innerHTML = linkGit.login;
        document.querySelector(".bio").innerHTML = linkGit.bio;
        document.querySelector(
          ".cadastro"
        ).innerHTML = `Cadastro: ${linkGit.created_at}`;
        document.querySelector(
          ".update"
        ).innerHTML = `Última atualização: ${linkGit.updated_at}`;
        document.querySelector(".linkProfile").href = linkGit.html_url;
        card.style.visibility = "visible";
      }
    });
});
