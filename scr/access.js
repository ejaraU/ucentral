document.addEventListener("DOMContentLoaded", () => {
    const accessBtn = document.getElementById("accessBtn");
    accessBtn.addEventListener("click", async () => {
      if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
          await ethereum.enable();
          const accounts = await web3.eth.getAccounts();
          if (accounts.length > 0) {
            window.location.href = "formulario.html"; // Redirigir a la página del formulario
          }
        } catch (error) {
          console.error("Acceso Denegado.", error);
        }
      } else {
        console.error("Instalar MetaMask!");
      }
    });
  });
  
