gdjs.LoginCode = {};
gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1= [];
gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects2= [];
gdjs.LoginCode.GDFondo_9595de_9595inicioObjects1= [];
gdjs.LoginCode.GDFondo_9595de_9595inicioObjects2= [];
gdjs.LoginCode.GDNewTiledSpriteObjects1= [];
gdjs.LoginCode.GDNewTiledSpriteObjects2= [];


gdjs.LoginCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Fondo_de_inicio"), gdjs.LoginCode.GDFondo_9595de_9595inicioObjects1);
{for(var i = 0, len = gdjs.LoginCode.GDFondo_9595de_9595inicioObjects1.length ;i < len;++i) {
    gdjs.LoginCode.GDFondo_9595de_9595inicioObjects1[i].setXOffset(gdjs.LoginCode.GDFondo_9595de_9595inicioObjects1[i].getXOffset() + (130 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackSquareDecoratedButton"), gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1.length;i<l;++i) {
    if ( gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1[k] = gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1[i];
        ++k;
    }
}
gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.auth.signInWithProvider("google", gdjs.VariablesContainer.badVariable);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.firebaseTools.auth.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SelectCaracter", false);
}}

}


};

gdjs.LoginCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects1.length = 0;
gdjs.LoginCode.GDBlackSquareDecoratedButtonObjects2.length = 0;
gdjs.LoginCode.GDFondo_9595de_9595inicioObjects1.length = 0;
gdjs.LoginCode.GDFondo_9595de_9595inicioObjects2.length = 0;
gdjs.LoginCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.LoginCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.LoginCode.eventsList0(runtimeScene);

return;

}

gdjs['LoginCode'] = gdjs.LoginCode;
