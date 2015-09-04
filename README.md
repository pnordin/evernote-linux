# evernote-linux
Unofficial desktop wrapper for the Evernote web app

I was not particularly satisfied with existing Evernote clients for Linux. Most of them are good, but they still lack some of Evernote's features. The Evernote web app is full featured, but it is just not the same as having a dedicated desktop application. This is my simple solution, which uses node webkit to create a desktop wrapper for the web app.

## Installation
Currently, I do not have a link to download the binaries and I do not want to place them under version control. I have included a build script (build-linux.sh), but it requires node webkit to work (google how to install it). Additionally, you will need to adjust the variable NW_ROOT_DIR in build-linux.sh if you installed node webkit to a different location than /opt/node-webkit. After you build it, you can place the output files somewhere like /usr/local/bin/evernote-linux/ and then *ln -s /usr/local/bin/evernote-linux/evernote /usr/local/bin/evernote* Lastly, you may want to create a desktop entry. 


## Using the Application
Once you have gotten past the pain in the a** installation I described above, you can start the application normally (via menu, launcher, etc.). Clicking the tray icon will toggle (show/hide) the window. Everything else should be self-explanatory or falls under "how to use the Evernote web app", which is beyond the scope of these instructions.

## Limitations
Any limitations or bugs that apply to node webkit apply to this application, too. I personally have had some issues with node webkit on older Nvidia cards. Additionally, Evernote may change their web app in such a way that breaks this application. In any case, please feel free to report any issues you encounter.
