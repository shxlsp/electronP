
document.body.onload = function(){
    document.querySelector('button').onclick=function(){
        console.log(1111111)
    }
    const myNotification = new Notification('Title', {
        body: 'Notification from the Renderer process'
      })
      
      myNotification.onclick = () => {
        console.log('Notification clicked')
      }
}