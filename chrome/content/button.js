/**
 * Delete Read Emails
 *
 * @date 19th December 2016
 * @author nkmathew
 *
 */

/**
 * Poor man's debugger
 * Displays all the attributes of the object
 *
 * For when you don't feel like setting up the debugger in Firefox
 *
 */
/* exported inspect */
function inspect(object, own = true) {
  alert('Found: ' + Object.keys(object).length + ' Type: ' + typeof object);
  for (let key in object) {
    if (own) {
      if (object.hasOwnProperty(key)) {
        alert(key + ' = ' + object[key]);
      }
    } else {
      alert(key + ' = ' + object[key]);
    }
  }
}

/**
 * Returns the number of read emails in the current folder
 */
/* exported deleteReadEmails */
function countReadEmails() {
  let enumMessages = gFolderDisplay.displayedFolder.messages;
  let iterMsgHeaders = fixIterator(enumMessages, Ci.nsIMsgDBHdr);
  let readCount = 0;
  for (let msgHeader in iterMsgHeaders) {
    if (msgHeader.isRead) {
      readCount++;
    }
  }
  return readCount;
}

/**
 * Toolbar button callback function
 */
/* exported deleteReadEmails */
function deleteReadEmails() {
  let treeView = gDBView.QueryInterface(Ci.nsITreeView);
  let count = treeView.rowCount;
  let messenger = Cc['@mozilla.org/messenger;1'].createInstance(Ci.nsIMessenger);
  for (let i = 0; i < count; i++) {
    let msgHeader = messenger.msgHdrFromURI(gDBView.getURIForViewIndex(i));
    if (msgHeader.isRead) {
      treeView.selection.rangedSelect(i, i, true);
    }
  }
  // goDoCommand('cmd_delete');
}
