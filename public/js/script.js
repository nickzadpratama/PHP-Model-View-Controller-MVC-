$(function() {

	$('.tombolTambahData').on('click', function() {
		$('#formModalLabel').html('Tambah Data Mahasiswa');
		$('.modal-footer button[type=submit]').html('Tambah Data');
		    $('#nama').val('');
    		$('#nim').val('');
    		$('#email').val('');
    		$('#jurusan').val('');
    		$('#id').val('');
	});

    $('.tampilModalUbah').on('click', function() {

        $('#formModalLabel').html('Ubah Data Mahasiswa');
        $('.modal-footer button[type=submit]').html('Ubah Data');
        // mengganti tambah menjadi ubah
		$('.modal-body form').attr('action', "http://localhost:8080/phpmvc/public/mahasiswa/ubah");

        const id = $(this).data('id');

        $.ajax({
        	url: 'http://localhost:8080/phpmvc/public/mahasiswa/getubah',
			// id kiri 'nama', id kanan 'isi'
        	data: {id : id},
        	method: 'post',
        	dataType: 'json',
        	success: function(data) {
        		$('#nama').val(data.nama);
        		$('#nim').val(data.nim);
        		$('#email').val(data.email);
        		$('#jurusan').val(data.jurusan);
        		$('#id').val(data.id);
        	}
        });
    });
});