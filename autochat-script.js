$(document).ready(function() {
    // Initially hide both areas
    $('#bubbleTextArea').hide();
    $('#bubbleIconArea').hide();

    // Handle the change event of the dropdown
    $('#bubbleType').change(function() {
        var selectedValue = $(this).val();
        if (selectedValue == 'text') {
            $('#bubbleTextArea').show();
            $('#bubbleIconArea').hide();
        } else if (selectedValue == 'icon') {
            $('#bubbleTextArea').hide();
            $('#bubbleIconArea').show();
        } else if (selectedValue == 'text_icon') {
            $('#bubbleTextArea').show();
            $('#bubbleIconArea').show();
        }
    });


    // Default image source
    var defaultImageSrc = 'img/avatar.png';

    // Handle file input change event
    $('#icon-file').change(function(event) {
        var input = event.target;

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
                $('.upload-image').attr('src', e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    });

    // Handle remove button click event
    $('.remove-button').click(function() {
        $('#icon-file').val('');
        $('.upload-image').attr('src', defaultImageSrc);
    });

});


