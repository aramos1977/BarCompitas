const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }

    window.addEventListener("scroll", function() {
      var header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);
    })

    document.getElementById("subscribeForm").onsubmit = function (event) {
      event.preventDefault();
      const email = document.getElementById("emailInput").value;
      // Aquí puedes agregar la lógica para enviar el correo utilizando una API o el método que prefieras.
      // Por ejemplo, si tienes un servidor que maneja el envío de correos, podrías hacer una petición POST con fetch o axios.
      // Puedes usar la consola para mostrar un mensaje de éxito, ya que no podemos enviar correos directamente desde el navegador.
      console.log(`Correo enviado a: ${email}`);
      document.getElementById("subscribeForm").reset();
      document.getElementById("successMessage").style.display = "block";
      setTimeout(function () {
        document.getElementById("successMessage").style.display = "none";
      }, 3000); // Después de 3 segundos, ocultamos el mensaje de éxito.
    };