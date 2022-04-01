var form = document.getElementById("myForm");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

async function cotizar() {
  let salon = document.getElementById("salonSelection").value;
  console.log(salon);

  let invitados = document.getElementById("invitadosTotal").value;
  console.log(invitados);
  let banquete = document.getElementById("Banquete").value;
  console.log(banquete);

  if (salon === "Sasago" && banquete === "No") {
    await fetch(
      `https://sheet.best/api/sheets/6327d5a9-4a23-4aa3-b625-f1f188ad9643/cptotalSasago/${invitados}`
    )
      .then((response) => response.json())
      .then((data) => {
        let total = data[0].noBanqueteSasago;
        console.log(total);
        // alert(
        //   `${salon} con ${invitados} invitados tiene un costo total de ${total}`
        // );
        document.getElementById(
          "total"
        ).innerHTML = `${salon} con ${invitados} invitados $${total}`;
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (salon === "Sasago" && banquete === "Si") {
    await fetch(
      `https://sheet.best/api/sheets/6327d5a9-4a23-4aa3-b625-f1f188ad9643/cptotalSasago/${invitados}`
    )
      .then((response) => response.json())
      .then((data) => {
        let total = data[0].banqueteSasago;
        console.log(total);
        // alert(
        //   `${salon} con ${invitados} invitados con banquete incluido tiene un costo total de ${total}`
        // );
        document.getElementById(
          "total"
        ).innerHTML = `${salon} con ${invitados} invitados Banquete incluido $${total}`;
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (salon === "Huerto" && banquete === "Si") {
    await fetch(
      `https://sheet.best/api/sheets/6327d5a9-4a23-4aa3-b625-f1f188ad9643/cptotalSasago/${invitados}`
    )
      .then((response) => response.json())
      .then((data) => {
        let total = data[0].banqueteHuerto;
        console.log(total);
        // alert(
        //   `${salon} con ${invitados} invitados tiene un costo total de ${total}`
        // );
        document.getElementById(
          "total"
        ).innerHTML = `${salon} con ${invitados} invitados $${total}`;
      })
      .catch((error) => {
        console.error(error);
      });
  } else if (salon === "Huerto" && banquete === "No") {
    await fetch(
      `https://sheet.best/api/sheets/6327d5a9-4a23-4aa3-b625-f1f188ad9643/cptotalSasago/${invitados}`
    )
      .then((response) => response.json())
      .then((data) => {
        let total = data[0].noBanqueteHuerto;
        console.log(total);
        // alert(
        //   `${salon} con ${invitados} invitados con banquete incluido tiene un costo total de ${total}`
        // );
        document.getElementById(
          "total"
        ).innerHTML = `${salon} con ${invitados} invitados Banquete incluido $${total}`;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return false;
}

document.getElementById("btnSubmit").addEventListener("click", cotizar);
