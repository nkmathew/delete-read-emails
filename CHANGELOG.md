### v0.2.1 - December 29, 2016

+ Fixes:

  - Add-on fails general tests due to invalid maximum version number
  - `<prefwindow>` must have an id according to AMO security tests
  - AMO recommends the [add-on type][3] be specified in install manifest


### v0.2.0 - December 29, 2016

+ Features:

  - Add French and Spanish localization
  - Can now display a live read email count in the toolbar button
  - User is able to define the name of the toolbar button and hide/show the read
    email count next to the button name
  - User is able to bold the toolbar button label for visibility through the
    preference window in the Add-ons Manager

+ Fixes:

  - Removed message count alert shown when button is clicked
  - The icon is no longer cropped. Redowloaded the original icon from
    [Icon Archive][2] and removed the previously cropped and resized ones.
  - The toolbar button now looks like the other native buttons and even responds to
    alternative Thunderbird themes like [TT Deep Dark][1]
  - Toolbar button icon doesn't resize in some Thunderbird themes

### v0.1.0 - December 21, 2016

+ Features:

  - Can select and delete the read emails in the currently selected folder

---

[1]: https://addons.mozilla.org/en-us/thunderbird/addon/tt-deepdark/
[2]: http://www.iconarchive.com/show/email-icons-by-seanau/Delete-icon.html
[3]: https://developer.mozilla.org/en-US/Add-ons/Install_Manifests#type
