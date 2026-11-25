const {app,BrowserWindow}=require('electron');const path=require('path');
function createWindow(){const w=new BrowserWindow({width:1280,height:820,autoHideMenuBar:true,title:'Pharmacy Billing',webPreferences:{contextIsolation:true,sandbox:true}});w.loadFile(path.join(__dirname,'app','index.html'))}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
