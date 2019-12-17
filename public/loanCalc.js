var myPieChart;

let computeLoan = () => {
    var amount = document.getElementById('amount').value;
    if(amount <= 0) {
        document.getElementById('loan_less_zero').innerHTML = "Please enter a number greater than 0 ";
        document.getElementById('payment').innerHTML = "";
    } else {
        document.getElementById('loan_less_zero').innerHTML = "";
        var interest_rate = document.getElementById('interest_rate').value;
        var months = document.getElementById('months').value;
        var years = months;
        months = months * 12;
        var interest = (amount * (interest_rate * .01)) / months;
        var payment = ((amount / months) + interest).toFixed(2);

        interest_rate_month = (interest_rate * .01)/12;

        var term = years;
        var apr = interest_rate;
        var amt = amount;
        var mPmt;

        apr /= 1200;
        term *= 12;
        mPmt = calculatePayment();

        outputmPmpt = mPmt;
        outputmPmpt = Math.round(outputmPmpt);
        outputmPmpt = outputmPmpt.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById("payment").innerHTML = '$' + outputmPmpt + '</span>';
        
        function calculatePayment()
        {
            var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
            return payment;
        }

        var totalPaid = (mPmt * (years * 12));
        var totalPaidInterest = (mPmt * (years * 12) - amount);

        const pieAmt = amt;
        const pieInterest = totalPaidInterest;

        totalPaid = Math.round(totalPaid);
        totalPaid = totalPaid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalPaidInterest = Math.round(totalPaidInterest);
        totalPaidInterest = totalPaidInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById("total_interest_payment").innerHTML = '$' + totalPaidInterest;

        document.getElementById("tru_cost").innerHTML = "True cost of a <span style='color:red;font-size:20px;'>" + amount + "</span> loan:";
        

        document.getElementById("total_payment").innerHTML = '$' + totalPaid;
        
        var ctxP = document.getElementById("pieChart").getContext('2d');

        if(myPieChart){
            myPieChart.destroy();
        }

        myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Interest", "Principal"],
                datasets: [{
                data: [Math.round(pieInterest),pieAmt],
                backgroundColor: ["#F7464A", "#46BFBD"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1"]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false     
            }
        });
        
    }
}

window.addEventListener('load', function() {
    computeLoan();
});

$(document).ready(function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("amount");
    output.value = slider.value;

    slider.oninput = function() {
        output.value = this.value;
        computeLoan();
    }
  });
