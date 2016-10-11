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


resultsTable.html('' +
    '<tr>' +
    '<td colspan="6" rowspan="2" style="text-align: center;">' +
    'Nothing to see here :(, try doing a search.' +
    '</td>' +
    '</tr>');

$('#search').click(function () {
    var brand = $('#brandSelect').val();
    var from = $('#from').val();
    var to = $('#to').val();

    $.ajax({
        type: 'GET',
        url: 'http://45.55.79.166/api/v1/ads/results/'+brand+'/'+from+'/'+to,
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
                    '<td><button id="showModal" type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#adDetails" data-ad="'+result.id+'">Details</button></td>' +
                    '</tr>')
            });
        }
    });
});

$('#adDetails').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget);
    var adID = button.data('ad');

    $('#modalBrand').html('');
    $('#modalPackage').html('');
    $('#modalNewspaper').html('');
    $('#modalCost').html('');
    $('#modalObjective').html('');
    $('#modalDate').html('');

    $.ajax({
        type: 'GET',
        url: 'http://45.55.79.166/api/v1/ads/view/'+adID,
        success: function (data) {
            $.each(data, function(i, result) {
                $('#modalBrand').append(result.brand);
                $('#modalPackage').append(result.package);
                $('#modalNewspaper').append(result.newspaper.name);
                $('#modalCost').append(result.cost);
                $('#modalObjective').append(result.objective);
                $('#modalDate').append(result.ad_date);
            });
        }
    });
});
