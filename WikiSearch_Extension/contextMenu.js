var contextMenuItem = {
    "id": "wikisearch",
    "title": "Search on Wikipedia",
    "contexts": ["selection"]
}

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener(function(info){
    chrome.tabs.create({url: "https://en.wikipedia.org/wiki/" + info.selectionText})
})