$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?results=20', dataType: 'json', success: function (user) {
            console.log(user.results[0]);
            var results= user.results
            for (var i = 0; i < results.length; i++) {
                $("#user").append("<tr>" +
                    "<td>" + user.results[i].name.title + " " + user.results[i].name.first + " " + user.results[i].name.last + "</td>" +
                    "<td>" + user.results[i].registered.age + "</td>" +
                    "<td>" + user.results[i].email + "</td>" +
                    "<td>" + user.results[i].location.street.number + " " + user.results[i].location.street.name + " " + user.results[i].location.city + " " + user.results[i].location.state + " " + user.results[i].location.postcode + "</td>" +
                    "</tr>"
                );

            }
        }
    });
})
