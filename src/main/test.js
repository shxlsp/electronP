const { Notification } = require('electron');

//系统通知
function showNotification (){
  const notification = {
    title: 'Basic Notification',
    body: 'Notification from the Main process'
  }
  new Notification(notification).show()
}

// app.whenReady().then(createWindow).then(showNotification)
const Obj = {
    showNotification
}
export default Obj