$(document).ready(function () {


    // Console Log document ready
    console.log('document is ready');


    
    //Show notification Pop-up
    $("#notification").click(function(){
        $(".pop-over").toggle();
    });
    
    
    
    
    // Trigger sweet alert message when clicked on trash icon
    $('.delete').click(function (e) {


        e.preventDefault();
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this product?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
        }, function () {
            swal("Deleted!", "Your product has been deleted.", "success");
        });


    })
    
    
    
    
    //Trigger sweet aler when clicked on submit product on page add.php
    
    $("#submit_product").click(function(e){
        
       e.preventDefault();
      swal("Good job!", "product was added succesfully!", "success")
        
    });
    
    


    // Makes the table searchable with the datatables plugin
    searchTable = $('.table').DataTable({
        paging: false,
        ordering: false
    });
    $('#search').keyup(function () {
        searchTable.search($(this).val()).draw();
    })
    
    



    
    //Charts
   
    var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["January", "February", "March", "May", "June", "July"],
        datasets: [{
            label: false,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor:'rgba(0,156,238,.43)',
            borderColor:'#60C1F7',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    






});