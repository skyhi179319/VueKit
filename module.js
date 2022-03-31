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
        var parent = document.getElementById("deleteAlert");
        parent.remove();
    },
    addOnClick: function(id){
        var element = document.getElementById(id);
        element.onclick = function() {
           comp.deleteAlert();
        }
    }
}