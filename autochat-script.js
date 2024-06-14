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
});