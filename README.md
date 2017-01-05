[![Users][9]][8]
[![Rating][10]][12]
[![Stars][11]][8]

### Delete Read Emails

Thunderbird extension that deletes all the read emails in the currently selected
Thunderbird folder with a click of a button. Created because I seem to be the only
one who has a need for this functionality or I'm somehow doing this the wrong way.

### Development

- Tools:

    + Install [Extension Auto-Installer][3] add-on in Thunderbird
    + [7 Zip](http://www.7-zip.org/download.html) for packaging the XPI
    + Unix tools (wget, bash, ...) - [Cygwin][2] and [Msys2][4] does this for Windows
      users
    + Working Python installation

- Workflow:

    + Pull changes from repo
    + Add some feature
    + Start Thunderbird
    + Run `./xpi.sh` or just `xpi` depending on the platform you're on to build the
      `xpi` and install it in the currently running instance of Thunderbird which will
      restart immediately since most Thunderbird extensions are [XUL][1] based

### Installation

Official channel: [addons.mozilla.org][8]

The toolbar button usually doesn't appear on first run meaning you'll have to right
click on the mail toolbar, click customize and drag and drop the icon to the toolbar
as shown below:

![](http://image.prntscr.com/image/129cf6049466423b9a92e1bd363dae5b.png)

### Screenshots

+ Toolbar button

![](http://image.prntscr.com/image/a02fce8f0df54c9ba07e4a7bde86d436.png)

+ Add-ons Manager

![](http://image.prntscr.com/image/79e3b9332b23485f9c9918e63acc9db1.png)

+ Preference Window

![](http://image.prntscr.com/image/3ae8ebd02f724ccb958293fd18747e01.png)

### Credits

The [Thunderbird API][6] is really poorly documented forcing you to rely on grepping
through [Thunderbird's source code][5] and some well implemented Thunderbird
extensions for working examples to build from. It can be one gruelling experience.

I found myself going through the source for these two extensions way too much and as
such I have to give due credit. I learnt a lot from them:

  + https://github.com/nmaier/mintrayr
  + https://github.com/RealRaven2000/QuickFolders

Icon by [Seanau][7]

---

[1]: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL
[2]: https://www.cygwin.com/
[3]: https://addons.mozilla.org/en-us/firefox/add-on/autoinstaller/
[4]: http://msys2.github.io/
[5]: https://dxr.mozilla.org/comm-central/source/
[6]: https://developer.mozilla.org/en-US/docs/Mozilla/Thunderbird/Thunderbird_API_documentation
[7]: http://www.iconarchive.com/show/email-icons-by-seanau/Delete-icon.html
[8]: https://addons.mozilla.org/en-US/firefox/addon/delete-read-emails/
[9]: https://img.shields.io/amo/users/delete-read-emails.svg
[10]: https://img.shields.io/amo/rating/delete-read-emails.svg
[11]: https://img.shields.io/amo/stars/delete-read-emails.svg
[12]: https://addons.mozilla.org/en-US/firefox/addon/delete-read-emails/reviews/
