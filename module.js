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
}
export let JSON = {
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
    put: class{
        constructor(url) {
            this.url = url;
        }
        layer(id,object){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var ele = document.getElementById(id);
                    ele.innerText = data[object];
                    console.log(data[object]);
                }
            });
        }
        layer1(id,object1,object2){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var ele = document.getElementById(id);
                    ele.innerText = data[object1][object2];
                    console.log(data[object1][object2]);
                }
            });
        }
        layer2(id,object1,object2,object3){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var ele = document.getElementById(id);
                    ele.innerText = data[object1][object2][object3];
                    console.log(data[object1][object2][object3]);
                }
            });
        }
        layer3(id,object1,object2,object3,object4){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var ele = document.getElementById(id);
                    ele.innerText = data[object1][object2][object3][object4];
                    console.log(data[object1][object2][object3][object4]);
                }
            });
        }
        getURL(){
            return this.url;
        }
        getData(){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    console.log(data);
                }
            })
        }
    },
    create: class{
        constructor(url) {
            this.url = url;
        }
        layer(id,type,object){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var div = document.getElementById(id);
                    var ele = document.createElement(type);
                    ele.innerText = data[object];
                    div.appendChild(ele);
                    console.log(data[object]);
                }
            });
        }
        layer1(id,type,object1,object2){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var div = document.getElementById(id);
                    var ele = document.createElement(type);
                    ele.innerText = data[object1][object2];
                    div.appendChild(ele);
                    console.log(data[object1][object2]);
                }
            });
        }
        layer2(id,type,object1,object2,object3){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var div = document.getElementById(id);
                    var ele = document.createElement(type);
                    ele.innerText = data[object1][object2][object3];
                    div.appendChild(ele);
                    console.log(data[object1][object2][object3]);
                }
            });
        }
        layer3(id,type,object1,object2,object3,object4){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    var div = document.getElementById(id);
                    var ele = document.createElement(type);
                    ele.innerText = data[object1][object2][object3][object4];
                    div.appendChild(ele);
                    console.log(data[object1][object2][object3][object4]);
                }
            });
        }
        getURL(){
            return this.url;
        }
        getData(){
            JSON.get(this.url,function(err, data) {
                if (err !== null) {
                    JSON.error(err);
                } else {
                    console.log(data);
                }
            })
        }
    }
}
export let sys = {
    math: {
        multiply: function (x,y) {
            return x*y;
        },
        add: function (x,y) {
            return x+y;
        },
        divide: function (x,y) {
            if(y === 0 || typeof y !== "number"){

            }
            else{
                return x/y;
            }
        },
        subtract: function (x,y){
            return x-y;
        },
        pi: function () {
            return Math.PI;
        },
        absolute: function (x) {
            return Math.abs(x);
        },
        random: function (max) {
            return Math.floor(Math.random() * max);
        },
        randomXY: function (min,max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (this.subtract(max,min)) + min);
        },
        round: function (x) {
            Math.round(x);
        }
    },
    dateTime: {
        getTime: function () {
            const d = new Date();
            var time = d.toLocaleTimeString();
            return time;
        },
        getDate: function () {
            const d = new Date();
            var date = d.toLocaleDateString();
            return date;
        },
        getTimeDate: function () {
            return this.getDate() + " " + this.getTime();
        }
    }
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