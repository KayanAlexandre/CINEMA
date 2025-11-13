const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio padrão

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Verificação simples (você pode mudar para o que quiser)
  if (username === "admin" && password === "1234") {
    alert("Login realizado com sucesso!");
    window.location.href = "index.html"; // Redireciona para a página principal
  } else {
    alert("Usuário ou senha incorretos!");
  }
});

function toggleCadastroForm() {
  const loginForm = document.getElementById("loginForm");
  const cadastroForm = document.getElementById("cadastroForm");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    cadastroForm.style.display = "none";
  } else {
    loginForm.style.display = "none";
    cadastroForm.style.display = "block";
  }
}
