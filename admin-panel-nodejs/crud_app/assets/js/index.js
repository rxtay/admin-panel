//add_user is the "id" attribute of the form
$("#add_user").submit(function(event){
    alert("Data inserted succesfully!")
})

$("#update_user").submit(function(event){
    event.preventDefault();

    //var unindexed_array = $(this))
    var unindexed_array = $("#update_user").serializeArray()
    var data = {}

    $.map(unindexed_array, function(n, i) {
        data[n['name']] = n['value']
    })

    var request = {
        //Make request to server and get response from server
        "url": `http://localhost:3000/api/users/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data updated successfully")
    })
})

if (window.location.pathname =="/") {
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        //Get the current user id from _show.ejs
        var id = $(this).attr("data-id")

        var request = {
            //Make request to server and get response from server
            "url": `http://localhost:3000/api/users/${id}`,
            "method": "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully")
                location.reload()
            })
        }
    

    })
}
