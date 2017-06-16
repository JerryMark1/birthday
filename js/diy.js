$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],

    });
     var audio = $('#myaudio');
    var isPlaying = false;
    function playAudio() {
        var audio = $('#myaudio');
        if (audio.attr('src') == undefined) {
            audio.attr('src', audio.data('src'));
        }
        audio[0].play();
        isPlaying = true;
    }
    playAudio();
    document.addEventListener("WeixinJSBridgeReady", function () {
        WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
            network = e.err_msg.split(":")[1];  //结果在这里
        playAudio();
        });
    }, false);
});