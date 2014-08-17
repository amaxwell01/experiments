var myLinkText = 'http://www.postano.com/designpreview.php?sid=22774&local=true';

var getLinkAttributes = function(url) {
    var newLink = document.createElement('a');
    var linkObject;

    var splitSearchItems = function(search) {
        var searchItems = {};
        var i = 0;
        var searchArray;
        var tempSearchSplit;
        var tempKey;

        // Remove the '?' if there is one
        if (search.indexOf('?') !== -1) {
            search = search.split('?')[1];
        }

        // Split the search items into groups
        searchArray = search.split('&');

        // Split the searchArray into key value pairs
        for (i; i < searchArray.length; i++) {
            tempSearchSplit = searchArray[i].split('=');
            tempKey = tempSearchSplit[0];
            searchItems[tempKey] = tempSearchSplit[1];
        }

        return searchItems;
    };

    // set the url on the href
    newLink.setAttribute('href', url);

    linkObject = {
        hash: newLink.hash,
        hashItems: newLink.hash.split('&'),
        host: newLink.host,
        hostname: newLink.hostname,
        href: newLink.href,
        origin: newLink.origin,
        path: newLink.path,
        pathname: newLink.pathname,
        protocol: newLink.protocol,
        search: newLink.search,
        searchItems: splitSearchItems(newLink.search)
    };

    // Remove the link node
    newLink.remove();

    return linkObject;  
};

console.log(getLinkAttributes(myLinkText));