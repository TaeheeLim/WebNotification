window.onload = function(){
    if(window.Notification){
        Notification.requestPermission;
    }
}

function calculate(){
    setTimeout(function(){
        notify();
    }, 3000);
}

function notify(){
    if(Notification.permission !== 'granted'){
        console.log(Notification.permission);
        alert(Notification.permission);
    } else {
        var notification = new Notification('Notification title',{
            icon: './commonX9MRRN0G.jpg',
            body: '강준이'
        });

        notification.onclick = function(){
            window.open('http://google.com')
        };
    }
}



//http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png