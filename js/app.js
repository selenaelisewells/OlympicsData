new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
        labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
        datasets: [{
                label: "Canada's Records",
                data: ['9', '12', '24', '13', '20', '17', '23', '24', '7', '22', '1', '3', '5', '14', '9', '53', '65', '99', '159', '179', '188', '150'],
                fill: false,
                borderColor: ['#DD1C1A']
            },
            {
                label: "USA's Records",
                data: ['15', '23', '68', '18', '23', '40', '34', '36', '11', '14', '33', '19', '55', '10', '18', '35', '48', '62', '154', '125', '212', '110'],
                fill: false,
                borderColor: ['#01BAEF']
            },
            {
                label: "Finland's Records",
                data: ['54', '19', '5', '15', '12', '29', '34', '41', '48', '33', '30', '48', '44', '78', '76', '29', '85', '123', '40', '87', '90', '58'],
                fill: false,
                borderColor: ['navy']
            },
            {
                label: "Germany's Records",
                data: ['0', '7', '23', '9', '0', '0', '0', '0', '0', '16', '33', '71', '98', '134', '129', '154', '168', '184', '231', '207', '131', '72'],
                fill: false,
                borderColor: ['gold']
            },
            {
                label: "Norways's Records",
                data: ['65', '54', '29', '56', '17', '37', '13', '28', '44', '59', '52', '28', '27', '35', '24', '133', '164', '184', '184', '95', '150', '125'],
                fill: false,
                borderColor: ['#fc719e']
            },
            {
                label: "Russia's Records",
                data: ['', '', '', '', '', '', '', '81', '96', '117', '96', '120', '164', '153', '128', '185', '123', '142', '89', '92', '47', '132'],
                fill: false,
                borderColor: ['green']
            },




        ]
    }

});

var goldData = ['9', '12', '14', '0', '18', '16', '0', '3', '4', '2', '0', '1', '0', '8', '0', '11', '7', '26', '113', '75', '142', '103'];
var silverData = ['0', '0', '2', '13', '0', '0', '2', '20', '2', '2', '1', '1', '4', '2', '3', '35', '47', '53', '10', '78', '27', '39'];
var bronzeData = ['0', '0', '8', '0', '2', '1', '21', '1', '1', '18', '0', '1', '1', '4', '6', '7', '11', '20', '36', '23', '19', '8'];

new Chart(document.getElementById('stackedBarChart'), {
    type: 'bar',
    data: {
        labels: ['1924', '1928', '1932', '1936', '1948', '1952', '1956', '1960', '1964', '1968', '1972', '1976', '1980', '1984', '1988', '1992', '1994', '1998', '2002', '2006', '2010', '2014'],
        datasets: [{
                label: 'Bronze',
                data: bronzeData,
                backgroundColor: silverData.map(function() {
                    return '#f46036';
                })
            },
            {
                label: 'Silver',
                data: silverData,
                backgroundColor: silverData.map(function() {
                    return 'silver';
                })
            },
            {
                label: 'Gold',
                data: goldData,
                backgroundColor: goldData.map(function() {
                    return 'gold';
                })
            },


        ]
    },
    options: {
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]

        }
    }
})

new Chart(document.getElementById('pieChart'), {
        type: 'pie',
        data: {
            labels: ['Ice Hockey', 'Skating', 'Skiing', 'Bobsleigh', 'Curling', 'Biathlon'],
            datasets: [{
                data: [549, 401, 52, 30, 52, 9],
                backgroundColor: ['#e03426', '#f64971', '#eb73b3', '#a26dc2', '#4f7cba', '#2cb5c0']
            }]
        },
        options: {
            title: {
                display: true,
                text: "Canada's 1,093 Medal Total Divided by Sport"
            }
        }
    }),

    new Chart(document.getElementById('barChart'), {
        type: 'bar',
        data: {
            labels: ['CAN', 'CZE', 'EUN', 'FIN', 'FRG', 'GBR', 'GER', 'RUS', 'SUI', 'SWE', 'TCH', 'URS', 'USA'],
            datasets: [{
                data: [549, 66, 40, 323, 18, 24, 10, 83, 52, 288, 202, 336, 391],
                backgroundColor: ['#e03426', '#eb364a', '#f64971', '#fc719e', '#eb73b3', '#ce69be', '#a26dc2', '#7873c0', '#4f7cba', '#1ba3c6', '#2cb5c0', '#30bcad', '#21b087']
            }]

        },
        options: {
            legend: {
                display: false
            }
        }
    })