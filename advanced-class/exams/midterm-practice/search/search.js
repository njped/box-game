function search(text, searchTerm) {
    let re = RegExp('[^ ]*' + searchTerm + '[^ ]*', 'gi');
    let matches  = text.match(re);
    return matches || [];
}
