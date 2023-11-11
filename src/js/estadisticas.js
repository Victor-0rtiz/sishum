 // Datos de ejemplo: años
 const years = ["2022", "2023", "2024", "2025", "2026"];

 // Datos de ejemplo: cantidad de estudiantes y cantidad de docentes
 const studentsCount = [150, 180, 210, 190, 220];
 const teachersCount = [30, 35, 40, 38, 42];

 // Configuración del gráfico de barras multi-axis
 const ctx = document.getElementById("multiAxisBarChart").getContext("2d");
 const multiAxisBarChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: years,
        datasets: [
            {
                label: "Cantidad de Estudiantes",
                data: studentsCount,
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                yAxisID: "y1", // Asignar al primer eje
            },
            {
                label: "Cantidad de Docentes",
                data: teachersCount,
                backgroundColor: "rgba(255, 99, 132, 0.6)",
                borderColor: "rgba(255, 99, 132, 1)",
                yAxisID: "y2", // Asignar al segundo eje
            },
        ],
    },
    options: {
        scales: {
            y1: {
                id: "y1",
                beginAtZero: true,
                position: "left", // Posición del eje izquierdo
            },
            y2: {
                id: "y2",
                beginAtZero: true,
                position: "right", // Posición del eje derecho
            },
        },
    },
});
