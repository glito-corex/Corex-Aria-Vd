//index.html load for remove content in root page
//
        //-------------------------------------------------------------
        //Code By Corex Institut (Benjamin Burban) --
        //WebSite - link -> \ https://corexinstitut.netlify.app
        //-------------------------------------------------------------
        //Go home AI Corex Institut
        //WebSite - link -> \ https://corexinstitut.netlify.app/corexai
        //-------------------------------------------------------------
//
//set function (attendreBody)
function rmv() {
    if (document.body) {
        //set entry point to the content
        const corexembedremovecontentUI = document.querySelectorAll("#adCtn, #menuBarEl, #perchance-error-indicator, #minimalModeMenuBtn, #perchanceConsoleEl, #mainModelTextEditorCtn, #mainOutputTemplateEditorCtn");         
        const gutterverticalcorexariawrappembed = document.querySelector('#main .gutter.gutter-vertical');

        //use entry point for remove content
        corexembedremovecontentUI.forEach(el => el.remove());

        if (gutterverticalcorexariawrappembed) {
            gutterverticalcorexariawrappembed.remove();
        }

        //set mutationObserver 
        const observer = new MutationObserver(function () {
            //set entry point to the content
            const corexembedremovecontentUI = document.querySelectorAll("#adCtn, #menuBarEl, #perchance-error-indicator, #minimalModeMenuBtn, #perchanceConsoleEl, #mainModelTextEditorCtn, #mainOutputTemplateEditorCtn");
            const gutterverticalcorexariawrappembed = document.querySelector('#main .gutter.gutter-vertical');

            //use entry point for remove content
            corexembedremovecontentUI.forEach(el => el.remove());

            if (gutterverticalcorexariawrappembed) {
                gutterverticalcorexariawrappembed.remove();
            }
        });

        //set the observe
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return;
    }
    //Set the loop
    setTimeout(rmv, 10);
}

//call function (attendreBody)
rmv();