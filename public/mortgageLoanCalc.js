var myPieChart;

let computeMortgageLoan = () => {
    var amount = document.getElementById('amount').value;
    if(amount <= 0) {
        document.getElementById('loan_less_zero').innerHTML = "Please enter a number greater than 0 ";
        document.getElementById('payment').innerHTML = "";
    } else {
        document.getElementById('loan_less_zero').innerHTML = "";
        var interest_rate = document.getElementById('interest_rate').value;
        var months = document.getElementById('months').value;
        var down_payment = document.getElementById('down_payment').value;
        var flag = 0;
        if(down_payment/amount >= .2) {
            flag = 1;
        }

        amount -= down_payment;
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


        var propTax = amount * .000675;
        var pmi = 0;
        const homeOwnersInsurance = 233;

        if(flag == 0) {
            var pmi = .0004167 * amount;
        }

        // console.log(pmi);
        // console.log(propTax);
        // console.log(homeOwnersInsurance);

        const totalMonthlyMortgage = Math.round(pmi + propTax + homeOwnersInsurance + calculatePayment());

        document.getElementById("payment").innerHTML = '$' + Math.round(totalMonthlyMortgage) + '</span>';
        
        function calculatePayment()
        {
            var payment = amt*(apr * Math.pow((1 + apr), term))/(Math.pow((1 + apr), term) - 1);
            return payment;
        }

        var totalPaid = (mPmt * (years * 12));
        var totalPaidInterest = (mPmt * (years * 12) - amount);
        totalPaid = totalPaid.toFixed(2);
        totalPaid = totalPaid.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        totalPaidInterest = totalPaidInterest.toFixed(2);
        totalPaidInterest = totalPaidInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        amount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById("principal_and_interest").innerHTML = '$' + Math.round(mPmt).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById("total_interest_payment").innerHTML = '$' + Math.round(pmi);
        document.getElementById("total_payment").innerHTML = '$' + Math.round(propTax);
        document.getElementById("home_owners_insurance").innerHTML = '$' + homeOwnersInsurance;

        if(myPieChart){
            myPieChart.destroy();
        }

        var ctxP = document.getElementById("pieChart").getContext('2d');
        myPieChart = new Chart(ctxP, {
            type: 'pie',
            data: {
                labels: ["Principal and Interest", "PMI", "Property Tax", "Homeowners Insurance"],
                datasets: [{
                data: [Math.round(mPmt), Math.round(pmi), propTax, homeOwnersInsurance],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5"]
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
computeMortgageLoan();
});



$(document).ready(function() {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("amount");
    output.value = slider.value;

    slider.oninput = function() {
        output.value = this.value;
        computeMortgageLoan();
    }

    var slider1 = document.getElementById("myRange1");
    var output1 = document.getElementById("down_payment");
    output1.value = slider1.value;

    slider1.oninput = function() {
        output1.value = this.value;
        computeMortgageLoan();
    }

  });

