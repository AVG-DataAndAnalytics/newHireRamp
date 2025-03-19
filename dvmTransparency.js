

//DVM Header -- name //
const dvmName = document.getElementById('docName')

fetch('dvmData.json')
.then(function(response) {
    return response.json();
})
.then(function (data) {
    doctorName(data);
})

function doctorName(data) {
    for (let i=0; i< data.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = data[i].name;
        dvmName.appendChild(div);
    }
}


//DVM Header -- tenure//
const tenurePeriod = document.getElementById('tenure')

fetch('dvmData.json')
.then(function(response) {
    return response.json();
})
.then(function (data) {
    tenure(data);
})

function tenure(data) {
    for (let i=0; i< data.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = data[i].locationid;
        tenurePeriod.appendChild(div);
    }
}


//DVM Header -- career phase//
const careerPhase = document.getElementById('careerPhase')

fetch('dvmData.json')
.then(function(response) {
    return response.json();
})
.then(function (data) {
    career(data);
})

function career(data) {
    for (let i=0; i< data.length; i++) {
        let div = document.createElement('div');
        div.innerHTML = data[i].explevel;
        careerPhase.appendChild(div);
    }
}


//Clinic Logo//
fetch('masterDVMData.json')
  .then(response => response.json())  // Parse JSON
  .then(data => {
    // Create an image element
    const img = document.createElement('img');
    
    // Set the image attributes from the JSON data
    img.src = data.png_file;

    // Append the image to the container
    const container = document.getElementById('logo');
    container.appendChild(img);
})


// graph1 = revenue per day //
const revenuePerDay = document.getElementById('graph1')

fetch('data.json')
.then(function(response) {
    if(response.ok == true){
        return response.json();
    }
})
.then(function(data) {
    createGraph1(data, 'line');
})

function createGraph1(data, type) {
    new Chart(revenuePerDay, {
        type: type,
        data: {
            labels: data.map(row => row.month),
            datasets: [{
                label: 'Actual Revenue Per Day',
                data: data.map(row => row.revenueperday),
                borderColor: 'rgb(62,177,200)',
                backgroundColor: 'rgb(62,177,200)',
                borderWidth: 2,
                pointStyle: true,
                pointRadius: 0
            }, {
                label: 'Anticipated Revenue Per Day',
                data: data.map(row => row.est_rpd),
                borderColor: 'rgb(225,6,0)',
                backgroundColor: 'rgb(225,6,0)',
                borderWidth: 2,
                pointStyle: true,
                pointRadius: 0
            }]
        }, 
        options: {
            reponsive: true,
            plugins: { 
                tooltip: {
                    enabled: false
                },
                legend: {
                    labels: {
                        usePointStyle: true,
                        font: {
                            size: 10
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            }
            
        }
    });
}



// graph2 = visits per day // 
const visitPerDay = document.getElementById('graph2')

fetch('data.json')
.then(function(response) {
    if(response.ok == true){
        return response.json();
    }
})
.then(function(data) {
    createGraph2(data, 'line');
})

function createGraph2(data, type) {
    new Chart(visitPerDay, {
        type: type,
        data: {
            labels: data.map(row => row.month),
            datasets: [{
                label: 'Actual Visits Per Day',
                data: data.map(row => row.visitsperday),
                borderColor: 'rgb(62,177,200)',
                backgroundColor: 'rgb(62,177,200)',
                borderWidth: 2,
                pointStyle: true,
                pointRadius: 0
            }, {
                label: 'Anticipated Visits Per Day',
                data: data.map(row => row.est_vpd),
                borderColor: 'rgb(225,6,0)',
                backgroundColor: 'rgb(225,6,0)',
                borderWidth: 2,
                pointStyle: true,
                pointRadius: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    labels: {
                        usePointStyle: true,
                        font: {
                            size: 10
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            }
        }
    })
}



// graph3 = revenue per visit // 
const revenuePerVisit = document.getElementById('graph3')

fetch('data.json')
.then(function(response) {
    if(response.ok == true){
        return response.json();
    }
})
.then(function(data) {
    createGraph3(data, 'line');
})

function createGraph3(data, type) {
    new Chart(revenuePerVisit, {
        type: type,
        data: {
            labels: data.map(row => row.month),
            datasets: [{
                label: 'Actual Revenue Per Visit',
                data: data.map(row => row.revenuepervisit),
                borderColor: 'rgb(62,177,200)',
                backgroundColor: 'rgb(62,177,200)',
                borderWidth: 2, 
                pointStyle: true,
                pointRadius: 0
            }, {
                label: 'Anticipated Revenue Per Visit',
                data: data.map(row => row.est_rpv),
                borderColor: 'rgb(225,6,0)',
                backgroundColor: 'rgb(225,6,0)',
                borderWidth: 2,
                pointStyle: true,
                pointRadius: 0
            }]
        }, 
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    enabled: false
                },
                legend: {
                    labels: {
                        usePointStyle: true,
                        font: {
                            size: 10
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                }
            }
        }
    })
}