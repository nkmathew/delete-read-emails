### Delete Read Emails

Thunderbird extension that deletes all the read emails in the currently selected
Thunderbird folder with a click of a button. Created because I seem to be the only
one who has a need for this functionality or I'm somehow doing this the wrong way.

How does everyone else delete the 30+ read emails over and over without selecting
and hitting delete every time?

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

Until I can get the add-on to be approved for **AMO** you'll have to install it
manually by building the **XPI** and drag-dropping it in the Add-ons Manager

The toolbar button usually doesn't appear on first run meaning you'll have to right
click on the mail toolbar, click customize and drag and drop the icon to the toolbar
as shown below:

![](http://image.prntscr.com/image/58a758aabcb34789b1a3c1a1cf2b6a5c.png)

### Sreenshots

+ Toolbar button
![](http://image.prntscr.com/image/5dc0a8d28b0040c5bda0584ca83d3409.png)

+ Add-ons Manager
![](http://image.prntscr.com/image/1041eeb759e94367b2d0dab830f7003e.png)

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
