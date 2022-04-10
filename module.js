function returnDevTools() {
    console.log("Vue devtools equals " + Vue.config.devtools);
}
function returnProductionTip(){
    console.log("Vue productionTip equals " + Vue.config.productionTip);
}
export let func = {
    checkStatus: function (){
        if(navigator.onLine){
            return true;
        }
        else{
            return false;
        }
    },
    printStatus: function (){
        if(this.checkStatus() === true){
            console.log("online");
        }
        else{
            console.log("offline");
        }
    },
    json: {
        get: function(url,callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                var status = xhr.status;
                if (status === 200) {
                    callback(null, xhr.response);
                } else {
                    callback(status, xhr.response);
                }
            };
            xhr.send();
        },
        error: function (err){
            console.log('Something went wrong: ' + err);
        },
        load: class{
            constructor(url) {
                this.url = url;
            }
            layer(id,object){
                func.json.get(this.url,function(err, data) {
                    if (err !== null) {
                        func.json.error(err);
                    } else {
                        var ele = document.getElementById(id);
                        ele.innerText = data[object];
                        console.log(data[object]);
                    }
                });
            }
            layer1(id,object1,object2){
                func.json.get(this.url,function(err, data) {
                    if (err !== null) {
                        func.json.error(err);
                    } else {
                        var ele = document.getElementById(id);
                        ele.innerText = data[object1][object2];
                        console.log(data[object1][object2]);
                    }
                });
            }
            layer2(id,object1,object2,object3){
                func.json.get(this.url,function(err, data) {
                    if (err !== null) {
                        func.json.error(err);
                    } else {
                        var ele = document.getElementById(id);
                        ele.innerText = data[object1][object2][object3];
                        console.log(data[object1][object2][object3]);
                    }
                });
            }
            layer3(id,object1,object2,object3,object4){
                func.json.get(this.url,function(err, data) {
                    if (err !== null) {
                        func.json.error(err);
                    } else {
                        var ele = document.getElementById(id);
                        ele.innerText = data[object1][object2][object3][object4];
                        console.log(data[object1][object2][object3][object4]);
                    }
                });
            }
        }
    },
}
export let settings = {
    consoleElements: true,
    loadFonts: function (){
        if(func.checkStatus() === true){
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