var myPieChart;

let computeAutoLoan = () => {
    var amount = document.getElementById('amount').value;
    if(amount <= 0) {
        document.getElementById('payment').innerHTML = "";
    } else {
        document.getElementById('loan_less_zero').innerHTML = "";
        var interest_rate = document.getElementById('interest_rate').value;
        var months = document.getElementById('months').value;
        var interest = (amount * (interest_rate * .01)) / months;
        var payment = ((amount / months) + interest).toFixed(2);

        var term = months;
        var apr = interest_rate;
        var amt = amount;
        var mPmt;

        apr /= 1200;
        
        mPmt = calculatePayment();

        var carInsurance = 125;
        var maintenance = 98;

        pieAutoMonthly = mPmt;

        mPmt += carInsurance + maintenance;

        outputmPmpt = mPmt;
        outputmPmpt = Math.round(outputmPmpt);
        outputmPmpt = outputmPmpt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById("payment").innerHTML = '<span style="font-size:40px;">$' + outputmPmpt + '</span>';
        document.getElementById("insurance").innerHTML = '$' + carInsurance;
        document.getElementById("maintenance").innerHTML = '$' + maintenance;
        document.getElementById("payment2").innerHTML = '$' + Math.round(pieAutoMonthly);
        
        function calculatePayment()
        {
            var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
            return payment;
        }

        var interestTotal = mPmt * months;
        interestTotal = Math.round(interestTotal);
        interestTotalOutput = interestTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        diffAmtInterest = interestTotal - amt;

        // document.getElementById("total_interest_payment").innerHTML = "$" + interestTotalOutput;

        if(myPieChart){
            myPieChart.destroy();
        }

        var ctxP = document.getElementById("pieChartAuto").getContext('2d');
        myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Car Principal and Interest", "Car Insurance", "Maintenance"],
                datasets: [{
                data: [Math.round(pieAutoMonthly), carInsurance, maintenance],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            }
        });

        

    }
}

window.addEventListener('load', function() {
    computeAutoLoan();
});
  
$(document).ready(function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("amount");
    output.value = slider.value;

    slider.oninput = function() {
        output.value = this.value;
        computeAutoLoan();
    }
  });

