function() {
    var filename='https://tympanus.net/codrops/adpacks/demoadpacks.css?' + new Date().getTime();
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", filename);
    document.getElementsByTagName("head")[0].appendChild(fileref);

    var demoad = document.createElement('div');
    demoad.id = 'cdawrap';
    demoad.innerHTML = '<span id="cda-remove" class="cda-remove" data-content="Continue to demo" aria-label="Close ad"></span>';
    document.getElementsByTagName('body')[0].appendChild(demoad);

    document.getElementById('cda-remove').addEventListener('click',function(e){
        demoad.style.display = 'none';
        e.preventDefault();
    });

    var bsa = document.createElement('script');
    bsa.type = 'text/javascript';
    bsa.async = true;
    bsa.id = '_carbonads_js';
    bsa.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=codrops';
    demoad.appendChild(bsa);

    var adChecked = false;
    var attempts = 5;
    var cntAttempts = 0;
    var adInterval;

    function checkAd() {
        if (adChecked || cntAttempts >= attempts) {
            clearInterval(adInterval);
            return;
        }

        cntAttempts++;

        var carbonImg = document.querySelector('.carbon-img');

        if (!carbonImg) return;

        var adImgHeight = carbonImg.offsetHeight;

        if (adImgHeight >= 30) {
            _gaq.push(['_trackEvent', 'Codrops Demo Ad', 'Carbon Ad VISIBLE','Carbon Ad']);

            adChecked = true;
        }
    }

    if(window._gaq) {
        _gaq.push(['_trackEvent', 'Codrops Demo Ad', 'Carbon ad included', '1']);

        adInterval = setInterval(checkAd, 3000);
    }


    /* Quantcast */
    var _qevents = _qevents || [];

    (function() {
        var elem = document.createElement('script');
        elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
        elem.async = true;
        elem.type = "text/javascript";
        var scpt = document.getElementsByTagName('script')[0];
        scpt.parentNode.insertBefore(elem, scpt);
    })();

    _qevents.push({
        qacct:"p-T68vVng2BC32-"
    });

})();