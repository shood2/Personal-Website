var birth = new Date(1998, 4, 11);
var illinois = new Date(2016, 8, 14);
var curDay = new Date();

var Europe = 86400000*10.5;
var Asia = 6*7*86400000;

var NAmerica = curDay - birth - Europe - Asia;
var age = curDay - birth;
Europe = Europe/age * 100;
Asia = Asia/age * 100;
NAmerica = NAmerica/age * 100;
illinois= (curDay - illinois)/age * 100;
NAmerica = NAmerica - illinois;

var ctx = document.getElementById('myChart').getContext('2d');
var donutChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [NAmerica, illinois, Asia,Europe],
      backgroundColor: [
        'rgba(0, 0, 255, 0.1)',
        'rgba(255, 0, 0, 0.1)',
        'rgba(0, 255, 0, 0.1)'
      ]
    }],

    labels: [
      'Maine',
      'Illinois',
      'China',
      'Ireland'
    ]
  },
  options: {}
});
