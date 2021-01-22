
$(document).ready(function () {
    $('.custom-file-input').on('change',function(){
        //get the file name
        var fileName = $(this).val();
        //replace the "Choose a file" label
        $(this).next('.custom-file-label').html(fileName.slice(fileName.lastIndexOf("\\") + 1));
    })

    $('#registerProBtn').on('click', (e) => {
        e.preventDefault();
    })

    $('#name').focus();

    const $cvFile = $('#cvFile');
    const $cvFileLabel = $('#cvFileLabel');
    const $scoreSheetFile = $('#scoreSheetFile');
    const $scoreSheetFileLabel = $('#scoreSheetFileLabel');

    $cvFile.on("mouseenter", function () {
        $cvFileLabel.addClass("fileLabelHover");
    }).on("mouseleave", function () {
        $cvFileLabel.removeClass("fileLabelHover");
    });

    $scoreSheetFile.on("mouseenter", function () {
        $scoreSheetFileLabel.addClass("fileLabelHover");
    }).on("mouseleave", function () {
        $scoreSheetFileLabel.removeClass("fileLabelHover");
    });
})