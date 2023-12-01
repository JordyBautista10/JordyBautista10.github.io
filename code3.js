gdjs.FinishCode = {};
gdjs.FinishCode.GDNewTiledSpriteObjects1= [];
gdjs.FinishCode.GDNewTiledSpriteObjects2= [];
gdjs.FinishCode.GDFondoObjects1= [];
gdjs.FinishCode.GDFondoObjects2= [];
gdjs.FinishCode.GDTitleObjects1= [];
gdjs.FinishCode.GDTitleObjects2= [];
gdjs.FinishCode.GDResetObjects1= [];
gdjs.FinishCode.GDResetObjects2= [];
gdjs.FinishCode.GDBlackDecoratedButtonObjects1= [];
gdjs.FinishCode.GDBlackDecoratedButtonObjects2= [];


gdjs.FinishCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fondo"), gdjs.FinishCode.GDFondoObjects1);
{for(var i = 0, len = gdjs.FinishCode.GDFondoObjects1.length ;i < len;++i) {
    gdjs.FinishCode.GDFondoObjects1[i].setXOffset(gdjs.FinishCode.GDFondoObjects1[i].getXOffset() + (130 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FinishCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinishCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.FinishCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.FinishCode.GDFondoObjects1.length = 0;
gdjs.FinishCode.GDFondoObjects2.length = 0;
gdjs.FinishCode.GDTitleObjects1.length = 0;
gdjs.FinishCode.GDTitleObjects2.length = 0;
gdjs.FinishCode.GDResetObjects1.length = 0;
gdjs.FinishCode.GDResetObjects2.length = 0;
gdjs.FinishCode.GDBlackDecoratedButtonObjects1.length = 0;
gdjs.FinishCode.GDBlackDecoratedButtonObjects2.length = 0;

gdjs.FinishCode.eventsList0(runtimeScene);

return;

}

gdjs['FinishCode'] = gdjs.FinishCode;
