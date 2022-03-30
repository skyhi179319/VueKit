export var devtools = true;
export var productionTip = false;
export function returnDevTools() {
    console.log("Vue devtools equals " + Vue.config.devtools);
}
export function returnProductionTip(){
    console.log("Vue productionTip equals " + VUe.config.productionTip);
}