// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Text format
function formatText(command) {
    document.execCommand(command, false, null);
}

function highlightText(color) {
    document.execCommand('backColor', false, color);
}

function fromDivToInput() {
    var textdata = document.getElementById("divInput");
    document.getElementById("hiddenInput").value = textdata.innerHTML;
    console.log(textdata);
}