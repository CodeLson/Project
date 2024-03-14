document.addEventListener('DOMContentLoaded', function() {
    let btn = document.getElementById('btn');

    btn.addEventListener('click', function(){
        let player = document.getElementById('srch').value.trim().toLowerCase();
        if(player === ''){
            return false;
        }
        else{
            window.location.href = "player.html#" + player;
        }
    });

    
});