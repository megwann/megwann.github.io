$("#getClients").click(function() {
  //will not work locally with Chrome (use Safari, FF)
  $.getJSON("jsonDatabase/clients.json", function(data) {

    var table = "<table class='table table-striped table-hover'>" +
      "<tr><th>Name</th><th>Company</th><th>Email</th><th>Phone</th><th>Balance</th></tr>";

    $.each(data, function(index, item) {
      table += "<tr>"+
      "<td>" + item.name + "</td>" +
        "<td>" + item.company + "</td>" +
        "<td>" + item.email + "</td>" +
        "<td>" + item.phone + "</td>" +
        "<td>" + item.balance + "</td>"+
        "</tr>";
    });

    table += "</table>";
    $("#data").append(table);

  });//getJSON
});//click

//to look at a JSON file clearly copy teh contents of clients.json into http://www.jsoneditoronline.org/