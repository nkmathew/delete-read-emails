/**
 * Delete Read Emails
 *
 * @date 19th December 2016
 * @author nkmathew
 *
 */

const Cc = Components.classes;
const Ci = Components.interfaces;

/* eslint no-var:0 */
var DeleteReadEmails = DeleteReadEmails || {};

/**
 * Poor man's debugger
 * Displays all the attributes of the object
 *
 * For when you don't feel like setting up the debugger in Firefox
 *
 */
DeleteReadEmails.inspect = function (object, own = true) {
  alert(`Found: ${Object.keys(object).length} Type: ${typeof object}`);
  for (let key in object) {
    if (own) {
      if (object.hasOwnProperty(key)) {
        alert(`${key} = ${object[key]}`);
      }
    } else {
      alert(`${key} = ${object[key]}`);
    }
  }
};

/**
 * Returns the number of read emails in the current folder
 */
DeleteReadEmails.countReadEmails = function() {
  let enumMessages = gFolderDisplay.displayedFolder.messages;
  let iterMsgHeaders = fixIterator(enumMessages, Ci.nsIMsgDBHdr);
  let readCount = 0;
  for (let msgHeader in iterMsgHeaders) {
    if (msgHeader.isRead) {
      readCount++;
    }
  }
  return readCount;
};

/**
 * Toolbar button callback function
 */
DeleteReadEmails.deleteReadEmails = function() {
  let treeView = gDBView.QueryInterface(Ci.nsITreeView);
  let count = treeView.rowCount;
  let messenger = Cc['@mozilla.org/messenger;1'].createInstance(Ci.nsIMessenger);
  for (let i = 0; i < count; i++) {
    let msgHeader = messenger.msgHdrFromURI(gDBView.getURIForViewIndex(i));
    if (msgHeader.isRead) {
      treeView.selection.rangedSelect(i, i, true);
    }
  }
  goDoCommand('cmd_delete');
};

/**
 * Reads preferences set in about:config
 */
DeleteReadEmails.getPreference = function(name) {
  let prefs = Cc['@mozilla.org/preferences-service;1']
    .getService(Components.interfaces.nsIPrefService);
  let branch = prefs.getBranch('extensions.delete-read-emails.');
  if (branch.getPrefType(name) === branch.PREF_BOOL) {
    return branch.getBoolPref(name);
  } else if (branch.getPrefType(name) === branch.PREF_STRING) {
    return branch.getCharPref(name);
  } else {
    return '';
  }
};

/**
 * Defines an event listener that monitors a change in the current folder's message
 * count and displays the number of read messages in the add-on's toolbar button
 *
 */
let FolderListener = {
  /**
   * https://dxr.mozilla.org/comm-central/source/mailnews/base/public/nsIFolderListener.idl#33
   * void OnItemIntPropertyChanged(in nsIMsgFolder aItem,
   *                               in nsIAtom aProperty,
   *                               in long long aOldValue,
   *                               in long long aNewValue);
   *
   */
  OnItemIntPropertyChanged: function() {
    // Calculate the number of read emails everytime a message is marked as read
    let stringBundle = document.getElementById('strings-delete-read-emails');
    let prefLabel = DeleteReadEmails.getPreference('buttonlabel').trim();
    let buttonLabel = stringBundle.getString('buttonLabel');
    let readEmails = DeleteReadEmails.countReadEmails();
    // Use custom button label if defined by the user
    if (prefLabel.length !== 0) {
      buttonLabel = prefLabel;
    }
    if (DeleteReadEmails.getPreference('showcount')) {
      buttonLabel = `${buttonLabel} (${readEmails})`;
    }
    document.getElementById('btn-delete-read-emails').label = buttonLabel;
  }
};

let mailSession = Cc['@mozilla.org/messenger/services/session;1']
  .getService(Ci.nsIMsgMailSession);

// Register the listener
mailSession.AddFolderListener(FolderListener, -1);
