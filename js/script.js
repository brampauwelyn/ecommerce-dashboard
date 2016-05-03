$(document).ready(function () {


    // Console Log document ready
    console.log('document is ready');


    
    
    
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




    // Makes the table searchable with the datatables plugin
    searchTable = $('#tabel').DataTable({
        paging: false,
        ordering: false
    });
    $('#search').keyup(function () {
        searchTable.search($(this).val()).draw();
    })








});