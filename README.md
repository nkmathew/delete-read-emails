### Delete Read Emails

Thunderbird extension that deletes all the read emails in the currently selected
Thunderbird folder with a click of a button. Created because I seem to be the only
one who has a need for this functionality or I'm somehow doing this the wrong way.

How does everyone else delete the 30+ read emails over and over without selecting
and hitting delete everytime?

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

### Sreenshots

![](http://image.prntscr.com/image/1041eeb759e94367b2d0dab830f7003e.png)

---

[1]: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL
[2]: https://www.cygwin.com/
[3]: https://addons.mozilla.org/en-us/firefox/add-on/autoinstaller/
[4]: http://msys2.github.io/
