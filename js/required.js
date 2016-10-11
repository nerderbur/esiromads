/**
 * Created by Leon on 10/11/2016.
 */

var brandSelect = $('#brandSelect');

$.ajax({
   type: 'GET',
    url: 'http://45.55.79.166/api/v1/ads/brands/all/',
    success: function (data) {
        $.each(data, function (i, brand) {
            brandSelect.append('<option value='+brand.id+'>'+brand.name+'</option>');
        });
    }
});
