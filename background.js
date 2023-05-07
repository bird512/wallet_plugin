chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
        code: 'alert("你好，这是一个简单的Chrome插件！");'
    });
});
