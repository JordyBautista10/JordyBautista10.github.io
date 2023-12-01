gdjs.SelectCaracterCode = {};
gdjs.SelectCaracterCode.GDGreyButtonObjects1= [];
gdjs.SelectCaracterCode.GDGreyButtonObjects2= [];
gdjs.SelectCaracterCode.GDGreyButtonObjects3= [];
gdjs.SelectCaracterCode.GDTextSelectCaracterObjects1= [];
gdjs.SelectCaracterCode.GDTextSelectCaracterObjects2= [];
gdjs.SelectCaracterCode.GDTextSelectCaracterObjects3= [];
gdjs.SelectCaracterCode.GDSelectorObjects1= [];
gdjs.SelectCaracterCode.GDSelectorObjects2= [];
gdjs.SelectCaracterCode.GDSelectorObjects3= [];
gdjs.SelectCaracterCode.GDDrugmanObjects1= [];
gdjs.SelectCaracterCode.GDDrugmanObjects2= [];
gdjs.SelectCaracterCode.GDDrugmanObjects3= [];


gdjs.SelectCaracterCode.mapOfGDgdjs_9546SelectCaracterCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.SelectCaracterCode.GDDrugmanObjects2});
gdjs.SelectCaracterCode.mapOfGDgdjs_9546SelectCaracterCode_9546GDGreyButtonObjects1Objects = Hashtable.newFrom({"GreyButton": gdjs.SelectCaracterCode.GDGreyButtonObjects1});
gdjs.SelectCaracterCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Selector"), gdjs.SelectCaracterCode.GDSelectorObjects2);
{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}{for(var i = 0, len = gdjs.SelectCaracterCode.GDSelectorObjects2.length ;i < len;++i) {
    gdjs.SelectCaracterCode.GDSelectorObjects2[i].setZOrder(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17135788);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("Score").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.SelectCaracterCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCaracterCode.mapOfGDgdjs_9546SelectCaracterCode_9546GDDrugmanObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17136620);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("Score").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButton"), gdjs.SelectCaracterCode.GDGreyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCaracterCode.mapOfGDgdjs_9546SelectCaracterCode_9546GDGreyButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17137596);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Game");
}}

}


};gdjs.SelectCaracterCode.eventsList1 = function(runtimeScene) {

{


gdjs.SelectCaracterCode.eventsList0(runtimeScene);
}


};

gdjs.SelectCaracterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectCaracterCode.GDGreyButtonObjects1.length = 0;
gdjs.SelectCaracterCode.GDGreyButtonObjects2.length = 0;
gdjs.SelectCaracterCode.GDGreyButtonObjects3.length = 0;
gdjs.SelectCaracterCode.GDTextSelectCaracterObjects1.length = 0;
gdjs.SelectCaracterCode.GDTextSelectCaracterObjects2.length = 0;
gdjs.SelectCaracterCode.GDTextSelectCaracterObjects3.length = 0;
gdjs.SelectCaracterCode.GDSelectorObjects1.length = 0;
gdjs.SelectCaracterCode.GDSelectorObjects2.length = 0;
gdjs.SelectCaracterCode.GDSelectorObjects3.length = 0;
gdjs.SelectCaracterCode.GDDrugmanObjects1.length = 0;
gdjs.SelectCaracterCode.GDDrugmanObjects2.length = 0;
gdjs.SelectCaracterCode.GDDrugmanObjects3.length = 0;

gdjs.SelectCaracterCode.eventsList1(runtimeScene);

return;

}

gdjs['SelectCaracterCode'] = gdjs.SelectCaracterCode;
