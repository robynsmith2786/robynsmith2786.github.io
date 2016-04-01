$(document).ready(function() {

    $("#getBreeds").on("click", function() {
       
        var url = "http://robynsmith2786.github.io/finalProject/jsonDatabase/dogs.json";

        $.getJSON(url, function(data) {
            console.log(data);
            var html= '';
            $.each(data, function(index, item) {
                html += '<div class="row"><div class="col-xs-12"><h1>'+ item.breed +'</h1><img src="'+ item.image +'">              <p>'+item.description+'</p></div></div>';
            })

            
            $("#breedData").append(html);
            //alert(data);
            //console.dir(data);

          }) //getJSON

      }) //click

  }) //ready