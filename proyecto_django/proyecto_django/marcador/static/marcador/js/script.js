feather.replace();

// Codigo para el gráfico de tarta (PieChart)
function init_chart(completadas, pendientes) {
    const ctx = document.getElementById('tasksChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Completadas', 'Pendientes'],
            datasets: [{
                data: [completadas, pendientes],
                backgroundColor: ['#90f0c8', '#ff4d4d'],
                borderColor: 'transparent',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'white',
                        boxWidth: 20,
                        padding: 20,
                        font: {
                            size: 12,
                            family: "'Courier New', Courier, monospace"
                        }
                    }
                }
            }
        }
    });
}