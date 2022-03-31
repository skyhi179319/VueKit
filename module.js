function returnDevTools() {
    console.log("Vue devtools equals " + Vue.config.devtools);
}
function returnProductionTip(){
    console.log("Vue productionTip equals " + Vue.config.productionTip);
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
    }
}