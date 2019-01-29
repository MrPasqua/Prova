var valuesarray = [];
var valuemax = 0;
var Values = 0;
var newarray = [];
var countryarray = [];
var myChart;
var ctx;
var countryvalues = [];
var test = [];
var data;


$(window).on('load', function () {
    $.getJSON("Data1.json", function (json) {


        data = json

        console.log(data)

        for (let index = 1; index < json.length; index++) {
            valuesarray.push(json[index].Value)
            countryarray.push(json[index].Country)



        }







        function sortNumber(a, b) {
            return b - a;
        }

        valuesarray.sort(sortNumber);
        valuesarray = valuesarray.join(",").split(',');










        document.getElementById("bottone").onclick = function() {myFunction()};
        function myFunction() {
            ctx = $('#myChart')
            myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    datasets: [{
                        data: valuesarray,
                        backgroundColor: [
                            '#002D59',
                            '#0A3866',
                            '#194D80',
                            '#2E6399',
                            '#477DB2',
                            '#6699CC',
                            '#8AB8E5',
                            '#B2D9FF',
                            '#CCE6FF',
                            '#E5F2FF'
                        ],
    
    
                    }],
                    labels: countryarray,
                }
    
    
    
            })
    
            myChart.update()
          }


   
    })
})
$(function () {
    $.getJSON("Data.json", function (json) {
        console.log(json); // this will show the info it in firebug console


        let t = Handlebars.compile('<option value="{{ Country }}">{{ Country }}</option>');

        json.forEach(function (el) {
            $("#select").append(t(el));
        })

        $("#select").change(function () {
            let paese = document.getElementById("select").value

            for (let i = 0; i < json.length; i++) {
                if (paese == json[i].Country) {
                    let perc = json[i].Value
                    document.getElementById("percentuale").innerHTML = perc + "%"

                }
            }
        })




    })
})


