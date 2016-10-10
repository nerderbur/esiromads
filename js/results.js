/**
 * Created by Leon on 10/10/2016.
 */

// var results = [
//     {
//         "id": 1,
//         "brand": {
//             "id": 2,
//             "name": "DevWright",
//             "description": "Website developement company.",
//             "website": "http://devwright.com",
//             "created_on": "2016-10-07T20:01:52Z"
//         },
//         "package": "Full Page",
//         "newspaper": {
//             "id": 1,
//             "name": "Observer",
//             "created_on": "2016-10-07T20:21:52Z"
//         },
//         "cost": 22000,
//         "objective": "Brand Awareness",
//         "ad_date": "2016-10-01",
//         "created_on": "2016-10-07T20:21:52Z"
//     }
// ];

var resultsTable = $('#tresults');


resultsTable.html('<h3>Please perform a search to see results</h3>');

$.ajax({
    type: 'GET',
    url: 'http://localhost:8000/api/v1/ads/viewall/',
    success: function (data) {
        resultsTable.html('');
        $.each(data, function(i, result) {
            resultsTable.append('' +
                '<tr>' +
                '<td>'+result.brand.name+'</td>' +
                '<td>'+result.package+'</td>' +
                '<td>'+result.newspaper.name+'</td>' +
                '<td>'+result.cost+'</td>' +
                '<td>'+result.ad_date+'</td>' +
                '</tr>')
        });
    }
});

