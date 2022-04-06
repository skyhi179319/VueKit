function returnDevTools() {
    console.log("Vue devtools equals " + Vue.config.devtools);
}
function returnProductionTip(){
    console.log("Vue productionTip equals " + Vue.config.productionTip);
}
export let settings = {
    consoleElements: true,
    checkStatus: function (){
        if(navigator.onLine){
            return true;
        }
        else{
            return false;
        }
    },
    loadFonts: function (){
        if(this.checkStatus() === true){
            var offline = document.getElementById("kit-Fonts");
            offline.remove();
        }
        else{
            console.log("Can't load Google Fonts");
            console.log("added offline script");
            var online = document.getElementById("kit-GoogleFonts");
            online.remove();
        }
    },

}
export let vue = {
    // Vue functions
    devtools: true,
    productionTip: false,
    returnVue: function (){
        console.clear();
        returnDevTools();
        returnProductionTip();
    }
}
export let comp = {
    // ALert functions
    deleteAlert: function (){
        animations.disappear("deleteAlert")
    },
    addAlertClick: function(id){
        var element = document.getElementById(id);
        element.onclick = function() {
           comp.deleteAlert();
        }
    },
    // Filter functions
    filter: function(Input,Parent){
        // Declare variables
        var input, filter, parent, child, a, i, txtValue;
        input = document.getElementById(Input);
        filter = input.value.toUpperCase();
        parent = document.getElementById(Parent);
        child = parent.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < child.length; i++) {
            a = child[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                child[i].style.display = "";
            } else {
                child[i].style.display = "none";
            }
        }
    },
    addFilter: function (input,parent){
        var element = document.getElementById(input);
        element.onkeyup = function() {
            comp.filter(input,parent);
        }
    },
    ele: {
        getTitleElement: function (){
            if(settings.consoleElements === true){
                console.log(title.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getFooterElement: function (){
            if(settings.consoleElements === true){
                console.log(footer.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getTextareaElement: function (){
            if(settings.consoleElements === true){
                console.log(textarea.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getInputElement: function (){
            if(settings.consoleElements === true){
                console.log(input.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getCheckboxElement: function (){
            if(settings.consoleElements === true){
                console.log(checkbox.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getAudioElement: function (){
            if(settings.consoleElements === true){
                console.log(audio.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getVideoElement: function (){
            if(settings.consoleElements === true){
                console.log(video.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getYoutubeElement: function (){
            if(settings.consoleElements === true){
                console.log(youtubeVideo.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getAlertElement: function(){
            if(settings.consoleElements === true){
                console.log(alert.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getCardElement: function (){
            if(settings.consoleElements === true){
                console.log(card.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getFilterElement: function (){
            if(settings.consoleElements === true){
                console.log(filter.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getFilterModuleElement: function (){
            if(settings.consoleElements === true){
                console.log(filter_module.$el.firstChild.firstChild);
            }
            else{

            }
        },
        getSpinnerElement: function (){
            if(settings.consoleElements === true){
                console.log(spinner.$el.firstChild.firstChild);
            }
            else{

            }
        },
    }
}
export let animations = {
    disappear: function (element) {
        var ele = document.getElementById(element);

        function Disappear() {
            ele.classList.add("kit-animation-disappear")
        }

        Disappear();

        function RemoveBox() {
            ele.remove();
        }

        setTimeout(RemoveBox, 4000)
    },
    appear: function (element){
        var ele = document.getElementById(element);
        function Appear(){
            ele.classList.add("kit-animation-appear");
        }
        Appear();
    },
    spinner: {
        addAnimation: function(){
            var ele = document.getElementById('addSpinnerAnimation');
            ele.classList.add("kit-spinner-animation")
        },
        destroy: function(){
            var ele = document.getElementById("addSpinnerAnimation");
            ele.remove();
        },
        timedDestroy: function(ms){
            setTimeout(this.destroy,ms);
        }
    }
}