/**
 * Created by Leon on 10/11/2016.
 */

var brandSelect = $('#brandSelect');

$.ajax({
   type: 'GET',
    url: 'http://localhost:8000/api/v1/ads/brands/all/',
    success: function (data) {
        $.each(data, function (i, brand) {
            brandSelect.append('<option value='+brand.id+'>'+brand.name+'</option>');
        });
    }
});
