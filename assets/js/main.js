document.addEventListener('DOMContentLoaded', () => {
  const gasCanvas = document.getElementById('gasChart');

  if (gasCanvas) {
    const labels = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'];
    const values = [0.12, 0.18, 0.24, 0.31, 0.28, 0.22];

    new Chart(gasCanvas, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Gas level',
          data: values,
          borderColor: '#1f6feb',
          backgroundColor: 'rgba(31, 111, 235, 0.15)',
          tension: 0.4,
          fill: true,
          pointRadius: 4,
          pointBackgroundColor: '#19b37d'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { beginAtZero: true, suggestedMax: 0.4 }
        }
      }
    });
  }

  const liveValues = {
    gas: '0.42 ppm',
    temp: '31°C',
    humidity: '58%',
    alert: 'Normal'
  };

  const gasValue = document.getElementById('gasValue');
  const tempValue = document.getElementById('tempValue');
  const humidityValue = document.getElementById('humidityValue');
  const alertValue = document.getElementById('alertValue');

  if (gasValue) gasValue.textContent = liveValues.gas;
  if (tempValue) tempValue.textContent = liveValues.temp;
  if (humidityValue) humidityValue.textContent = liveValues.humidity;
  if (alertValue) alertValue.textContent = liveValues.alert;
});
