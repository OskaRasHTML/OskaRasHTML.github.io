document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
});
const scrollToTopBtn = document.getElementById('scroll-to-top');
window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
  } else {
      scrollToTopBtn.style.display = "none";
  }
};
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('time-display').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();
document.getElementById('submitForm').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[0-9]{7,15}$/;
    const addressValid = address.trim().length > 5;

    if (!emailPattern.test(email)) {
        alert('Klaida: Neteisingas el. pašto formatas.');
        return;
    }

    if (!phonePattern.test(phone)) {
        alert('Klaida: Neteisingas telefono numerio formatas.');
        return;
    }

    if (!addressValid) {
        alert('Klaida: Adresas per trumpas.');
        return;
    }
    
    const formData = {
        vardas: document.getElementById('name').value,
        pavardė: document.getElementById('surname').value,
        elPaštas: email,
        telefonas: phone,
        adresas: address,
        klausimai: [
            parseInt(document.getElementById('question1').value, 10),
            parseInt(document.getElementById('question2').value, 10),
            parseInt(document.getElementById('question3').value, 10),
            parseInt(document.getElementById('question4').value, 10),
            parseInt(document.getElementById('question5').value, 10)
        ]
    };
    console.log(formData);
    const average = formData.klausimai.reduce((a, b) => a + b, 0) / formData.klausimai.length;
    let averageColor;
    if (average < 4) {
        averageColor = 'red';
    } else if (average < 7) {
        averageColor = 'orange';
    } else {
        averageColor = 'green';
    }
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        <p><strong>Vardas:</strong> ${formData.vardas}</p>
        <p><strong>Pavardė:</strong> ${formData.pavardė}</p>
        <p><strong>El. paštas:</strong> ${formData.elPaštas}</p>
        <p><strong>Telefonas:</strong> ${formData.telefonas}</p>
        <p><strong>Adresas:</strong> ${formData.adresas}</p>
        <p style="color: ${averageColor};"><strong>Klausimų vidurkis:</strong> ${average.toFixed(2)}</p>
    `;
});
