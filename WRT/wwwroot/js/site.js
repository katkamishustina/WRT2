// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function formatText(command) {
    document.execCommand(command, false, null);
}

function highlightText(color) {
    document.execCommand('backColor', false, color);
}

function makeTextBolder() {
    const selectedText = window.getSelection();
    if (selectedText.rangeCount > 0) {
        const range = selectedText.getRangeAt(0);
        const textBold = document.createElement('b');
        range.surroundContents(Text);
    }
}
// ------- Buttons for text editation in Create View -------------
const buttonContainers = document.querySelectorAll(".actions");

for (const buttonContainer of buttonContainers) {
    const buttons = buttonContainer.querySelectorAll("button");
    const pasteTarget = buttonContainer.getAttribute("data-for");

    for (const button of buttons) {
        const elementName = button.getAttribute("data-el");
        button.addEventListener("click", () =>
            insertText(`<${elementName}></${elementName}>`, pasteTarget),
        );
    }
}

// Inserts text at cursor, or replaces selected text
function insertText(newText, selector) {
    const textarea = document.querySelector(selector);
    textarea.focus();

    let pasted = true;
    try {
        if (!document.execCommand("insertText", false, newText)) {
            pasted = false;
        }
    } catch (e) {
        console.error("error caught:", e);
        pasted = false;
    }

    if (!pasted) {
        console.error("paste unsuccessful, execCommand not supported");
    }
}