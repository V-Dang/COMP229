//can also rename as public.scripts.app.js

//Immediately Invoked Function Expression (IIFE)
(function(){
    function Start()
    {
        console.log("App Started...");
    }

    window.addEventListener("load", Start);
})();