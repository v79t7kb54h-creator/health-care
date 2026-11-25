# Pharmacy Billing desktop app

The app itself is app/index.html. This folder wraps it in Electron.

## Build on your own computer
1. Install Node.js (nodejs.org).
2. In this folder run: `npm install`
3. Test it: `npm start`
4. Build the installer: `npm run dist`
   - On Windows this creates dist/*.exe
   - On a Mac this creates dist/*.dmg
   (Each installer must be built on its own system.)

## Build both without owning both computers
Put this folder in a GitHub repository, open the Actions tab, run "Build desktop apps". Download the .exe and .dmg from the finished run.

## Notes
- The installers are unsigned. Windows may show SmartScreen ("More info", then "Run anyway"); on a Mac, right-click the app and choose Open the first time.
- Data is saved on that computer. Use Settings > Backup regularly. Google Drive sync does not work in the desktop app.
