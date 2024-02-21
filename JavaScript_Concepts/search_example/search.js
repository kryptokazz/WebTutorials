// script.js
function searchAndHighlight() {
    let searchText = document.getElementById('searchInput').value.toLowerCase();
    let contentDiv = document.getElementById('content');
    let content = contentDiv.innerHTML;

    // Remove previous highlighting by replacing all occurrences of <span class="highlight">...</span> with the inner text
    content = content.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');

    let index = content.toLowerCase().indexOf(searchText);
    while (index !== -1) {
        let highlightedText = '<span class="highlight">' + content.substr(index, searchText.length) + '</span>';
        content = content.substring(0, index) + highlightedText + content.substring(index + searchText.length);
        index = content.toLowerCase().indexOf(searchText, index + highlightedText.length);
    }
    contentDiv.innerHTML = content;
}

