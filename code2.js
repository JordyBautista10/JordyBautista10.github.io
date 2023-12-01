gdjs.GameCode = {};
gdjs.GameCode.GDwallObjects1= [];
gdjs.GameCode.GDwallObjects2= [];
gdjs.GameCode.GDwallObjects3= [];
gdjs.GameCode.GDPuntajeObjects1= [];
gdjs.GameCode.GDPuntajeObjects2= [];
gdjs.GameCode.GDPuntajeObjects3= [];
gdjs.GameCode.GDMonedaObjects1= [];
gdjs.GameCode.GDMonedaObjects2= [];
gdjs.GameCode.GDMonedaObjects3= [];
gdjs.GameCode.GDCorazonObjects1= [];
gdjs.GameCode.GDCorazonObjects2= [];
gdjs.GameCode.GDCorazonObjects3= [];
gdjs.GameCode.GDPoliceSationObjects1= [];
gdjs.GameCode.GDPoliceSationObjects2= [];
gdjs.GameCode.GDPoliceSationObjects3= [];
gdjs.GameCode.GDDrugmanObjects1= [];
gdjs.GameCode.GDDrugmanObjects2= [];
gdjs.GameCode.GDDrugmanObjects3= [];
gdjs.GameCode.GDPoliceOrangeObjects1= [];
gdjs.GameCode.GDPoliceOrangeObjects2= [];
gdjs.GameCode.GDPoliceOrangeObjects3= [];
gdjs.GameCode.GDPoliceRedObjects1= [];
gdjs.GameCode.GDPoliceRedObjects2= [];
gdjs.GameCode.GDPoliceRedObjects3= [];
gdjs.GameCode.GDPolicePinkObjects1= [];
gdjs.GameCode.GDPolicePinkObjects2= [];
gdjs.GameCode.GDPolicePinkObjects3= [];
gdjs.GameCode.GDPoliceCianObjects1= [];
gdjs.GameCode.GDPoliceCianObjects2= [];
gdjs.GameCode.GDPoliceCianObjects3= [];
gdjs.GameCode.GDmarijuanaObjects1= [];
gdjs.GameCode.GDmarijuanaObjects2= [];
gdjs.GameCode.GDmarijuanaObjects3= [];


gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects1Objects = Hashtable.newFrom({"PoliceOrange": gdjs.GameCode.GDPoliceOrangeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceRedObjects1Objects = Hashtable.newFrom({"PoliceRed": gdjs.GameCode.GDPoliceRedObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPolicePinkObjects1Objects = Hashtable.newFrom({"PolicePink": gdjs.GameCode.GDPolicePinkObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceCianObjects1Objects = Hashtable.newFrom({"PoliceCian": gdjs.GameCode.GDPoliceCianObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects1Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects1});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")) == 0;
if (isConditionTrue_0) {
gdjs.GameCode.GDDrugmanObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects1Objects, 616, 646, "");
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.GameCode.GDwallObjects1);
gdjs.GameCode.GDPoliceCianObjects1.length = 0;

gdjs.GameCode.GDPoliceOrangeObjects1.length = 0;

gdjs.GameCode.GDPolicePinkObjects1.length = 0;

gdjs.GameCode.GDPoliceRedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects1Objects, 595, 398, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceRedObjects1Objects, 600, 370, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPolicePinkObjects1Objects, 671, 360, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceCianObjects1Objects, 712, 388, "");
}{for(var i = 0, len = gdjs.GameCode.GDwallObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDwallObjects1[i].getBehavior("PathfindingObstacle").setImpassable(true);
}
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PolicePink"), gdjs.GameCode.GDPolicePinkObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPolicePinkObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPolicePinkObjects2[i].getY() <= (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPolicePinkObjects2[k] = gdjs.GameCode.GDPolicePinkObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPolicePinkObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPolicePinkObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPolicePinkObjects2[i].getX() <= (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPolicePinkObjects2[k] = gdjs.GameCode.GDPolicePinkObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPolicePinkObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPolicePinkObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("PolicePink"), gdjs.GameCode.GDPolicePinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPolicePinkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPolicePinkObjects1[i].getY() <= (( gdjs.GameCode.GDDrugmanObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects1[0].getPointY("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPolicePinkObjects1[k] = gdjs.GameCode.GDPolicePinkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPolicePinkObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPolicePinkObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPolicePinkObjects1[i].getX() >= (( gdjs.GameCode.GDDrugmanObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects1[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPolicePinkObjects1[k] = gdjs.GameCode.GDPolicePinkObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPolicePinkObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPolicePinkObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects1[i].getBehavior("Animation").resumeAnimation();
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyReleased(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(2);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects1[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects1[k] = gdjs.GameCode.GDDrugmanObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects1[i].getBehavior("Animation").setAnimationIndex(3);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects1[i].getBehavior("Animation").resumeAnimation();
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPolicePinkObjects2Objects = Hashtable.newFrom({"PolicePink": gdjs.GameCode.GDPolicePinkObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects2Objects = Hashtable.newFrom({"PoliceOrange": gdjs.GameCode.GDPoliceOrangeObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceCianObjects2Objects = Hashtable.newFrom({"PoliceCian": gdjs.GameCode.GDPoliceCianObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceRedObjects2Objects = Hashtable.newFrom({"PoliceRed": gdjs.GameCode.GDPoliceRedObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects = Hashtable.newFrom({"wall": gdjs.GameCode.GDwallObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceSationObjects2Objects = Hashtable.newFrom({"PoliceSation": gdjs.GameCode.GDPoliceSationObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceSationObjects2Objects = Hashtable.newFrom({"PoliceSation": gdjs.GameCode.GDPoliceSationObjects2});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDDrugmanObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects2Objects = Hashtable.newFrom({"PoliceOrange": gdjs.GameCode.GDPoliceOrangeObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.GameCode.GDDrugmanObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("PolicePink"), gdjs.GameCode.GDPolicePinkObjects2);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.GameCode.GDwallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPolicePinkObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPolicePinkObjects2 */
/* Reuse gdjs.GameCode.GDwallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.GameCode.GDwallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
/* Reuse gdjs.GameCode.GDwallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoliceOrange"), gdjs.GameCode.GDPoliceOrangeObjects2);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.GameCode.GDwallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceOrangeObjects2 */
/* Reuse gdjs.GameCode.GDwallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceOrangeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceOrangeObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoliceCian"), gdjs.GameCode.GDPoliceCianObjects2);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.GameCode.GDwallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceCianObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceCianObjects2 */
/* Reuse gdjs.GameCode.GDwallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceCianObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceCianObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoliceRed"), gdjs.GameCode.GDPoliceRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.GameCode.GDwallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceRedObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceRedObjects2 */
/* Reuse gdjs.GameCode.GDwallObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceRedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceRedObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDwallObjects2Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceCian"), gdjs.GameCode.GDPoliceCianObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceOrange"), gdjs.GameCode.GDPoliceOrangeObjects2);
gdjs.copyArray(runtimeScene.getObjects("PolicePink"), gdjs.GameCode.GDPolicePinkObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceRed"), gdjs.GameCode.GDPoliceRedObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointX("")), (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceOrangeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceOrangeObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointX("")), (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceCianObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceCianObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointX("")), (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointY("")));
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceRedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceRedObjects2[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointX("")), (( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceSation"), gdjs.GameCode.GDPoliceSationObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceSationObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17178964);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
/* Reuse gdjs.GameCode.GDPoliceSationObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].separateFromObjectsList(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceSationObjects2Objects, false);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].setPosition(616,646);
}
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17181180);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].setPosition(616,646);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Corazon"), gdjs.GameCode.GDCorazonObjects2);
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "95fe7f6a064b3e17dce2774ad92cee83f877d2d6dda1cd16d79b876ca572911c_Death.aac", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDCorazonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCorazonObjects2[i].SetValue((( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceOrange"), gdjs.GameCode.GDPoliceOrangeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17183924);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Corazon"), gdjs.GameCode.GDCorazonObjects2);
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Health").Hit(1, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].setPosition(616,646);
}
}{for(var i = 0, len = gdjs.GameCode.GDCorazonObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCorazonObjects2[i].SetValue((( gdjs.GameCode.GDDrugmanObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDDrugmanObjects2[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{



}


{



}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects1Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonedaObjects1Objects = Hashtable.newFrom({"Moneda": gdjs.GameCode.GDMonedaObjects1});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects1);
gdjs.copyArray(runtimeScene.getObjects("Moneda"), gdjs.GameCode.GDMonedaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMonedaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17193988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDMonedaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Puntaje"), gdjs.GameCode.GDPuntajeObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDPuntajeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPuntajeObjects1[i].getBehavior("Text").setText("Puntos : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.GameCode.GDMonedaObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDMonedaObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "c52f1dacc263a2a6dc94e712a2a148f909b73372fa8e0622cb237fdc6a72fd6c_Coins 8.aac", false, 100, 1);
}{gdjs.evtTools.network.sendAsyncRequest("https://drugman-backend.azurewebsites.net/user", gdjs.evtTools.firebaseTools.auth.userManagement.getEmail() + "/" + gdjs.evtTools.firebaseTools.auth.userManagement.getDisplayName() + "/" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmarijuanaObjects2Objects = Hashtable.newFrom({"marijuana": gdjs.GameCode.GDmarijuanaObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects2Objects = Hashtable.newFrom({"PoliceOrange": gdjs.GameCode.GDPoliceOrangeObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceRedObjects2Objects = Hashtable.newFrom({"PoliceRed": gdjs.GameCode.GDPoliceRedObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPolicePinkObjects2Objects = Hashtable.newFrom({"PolicePink": gdjs.GameCode.GDPolicePinkObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects = Hashtable.newFrom({"Drugman": gdjs.GameCode.GDDrugmanObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceCianObjects2Objects = Hashtable.newFrom({"PoliceCian": gdjs.GameCode.GDPoliceCianObjects2});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("marijuana"), gdjs.GameCode.GDmarijuanaObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmarijuanaObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17194284);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
/* Reuse gdjs.GameCode.GDmarijuanaObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].returnVariable(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].returnVariable(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)).setNumber(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Powered");
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(150);
}
}{for(var i = 0, len = gdjs.GameCode.GDmarijuanaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDmarijuanaObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.anyKeyReleased(runtimeScene));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(4);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(6);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDDrugmanObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").setAnimationIndex(7);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceOrange"), gdjs.GameCode.GDPoliceOrangeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceOrangeObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17203276);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceOrangeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceOrangeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceOrangeObjects2[i].setPosition(595,398);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceOrangeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceOrangeObjects2[i].activateBehavior("Pathfinding", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceOrangeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceOrangeObjects2[i].resetTimer("revivir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceRed"), gdjs.GameCode.GDPoliceRedObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceRedObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17204316);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceRedObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceRedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceRedObjects2[i].setPosition(600,370);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceRedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceRedObjects2[i].activateBehavior("Pathfinding", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceRedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceRedObjects2[i].resetTimer("revivir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PolicePink"), gdjs.GameCode.GDPolicePinkObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPolicePinkObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17205876);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPolicePinkObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].setPosition(671,360);
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].activateBehavior("Pathfinding", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].resetTimer("revivir");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
gdjs.copyArray(runtimeScene.getObjects("PoliceCian"), gdjs.GameCode.GDPoliceCianObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDDrugmanObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPoliceCianObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17207540);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceCianObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceCianObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceCianObjects2[i].setPosition(712,388);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceCianObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceCianObjects2[i].activateBehavior("Pathfinding", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPoliceCianObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceCianObjects2[i].resetTimer("revivir");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Powered") >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17209060);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);
{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].returnVariable(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Consecuencia");
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].returnVariable(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].getBehavior("TopDownMovement").setMaxSpeed(100);
}
}{for(var i = 0, len = gdjs.GameCode.GDDrugmanObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDDrugmanObjects2[i].returnVariable(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(2)).setNumber(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Drugman"), gdjs.GameCode.GDDrugmanObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDDrugmanObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDDrugmanObjects2[i].getVariableNumber(gdjs.GameCode.GDDrugmanObjects2[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDDrugmanObjects2[k] = gdjs.GameCode.GDDrugmanObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDDrugmanObjects2.length = k;
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoliceOrange"), gdjs.GameCode.GDPoliceOrangeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPoliceOrangeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPoliceOrangeObjects2[i].getTimerElapsedTimeInSecondsOrNaN("revivir") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPoliceOrangeObjects2[k] = gdjs.GameCode.GDPoliceOrangeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPoliceOrangeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceOrangeObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceOrangeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceOrangeObjects2[i].activateBehavior("Pathfinding", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoliceRed"), gdjs.GameCode.GDPoliceRedObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPoliceRedObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPoliceRedObjects2[i].getTimerElapsedTimeInSecondsOrNaN("revivir") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPoliceRedObjects2[k] = gdjs.GameCode.GDPoliceRedObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPoliceRedObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceRedObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceRedObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceRedObjects2[i].activateBehavior("Pathfinding", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PolicePink"), gdjs.GameCode.GDPolicePinkObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPolicePinkObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPolicePinkObjects2[i].getTimerElapsedTimeInSecondsOrNaN("revivir") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPolicePinkObjects2[k] = gdjs.GameCode.GDPolicePinkObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPolicePinkObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPolicePinkObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPolicePinkObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPolicePinkObjects2[i].activateBehavior("Pathfinding", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PoliceCian"), gdjs.GameCode.GDPoliceCianObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPoliceCianObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPoliceCianObjects1[i].getTimerElapsedTimeInSecondsOrNaN("revivir") >= 3 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPoliceCianObjects1[k] = gdjs.GameCode.GDPoliceCianObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPoliceCianObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPoliceCianObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPoliceCianObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPoliceCianObjects1[i].activateBehavior("Pathfinding", true);
}
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDwallObjects1.length = 0;
gdjs.GameCode.GDwallObjects2.length = 0;
gdjs.GameCode.GDwallObjects3.length = 0;
gdjs.GameCode.GDPuntajeObjects1.length = 0;
gdjs.GameCode.GDPuntajeObjects2.length = 0;
gdjs.GameCode.GDPuntajeObjects3.length = 0;
gdjs.GameCode.GDMonedaObjects1.length = 0;
gdjs.GameCode.GDMonedaObjects2.length = 0;
gdjs.GameCode.GDMonedaObjects3.length = 0;
gdjs.GameCode.GDCorazonObjects1.length = 0;
gdjs.GameCode.GDCorazonObjects2.length = 0;
gdjs.GameCode.GDCorazonObjects3.length = 0;
gdjs.GameCode.GDPoliceSationObjects1.length = 0;
gdjs.GameCode.GDPoliceSationObjects2.length = 0;
gdjs.GameCode.GDPoliceSationObjects3.length = 0;
gdjs.GameCode.GDDrugmanObjects1.length = 0;
gdjs.GameCode.GDDrugmanObjects2.length = 0;
gdjs.GameCode.GDDrugmanObjects3.length = 0;
gdjs.GameCode.GDPoliceOrangeObjects1.length = 0;
gdjs.GameCode.GDPoliceOrangeObjects2.length = 0;
gdjs.GameCode.GDPoliceOrangeObjects3.length = 0;
gdjs.GameCode.GDPoliceRedObjects1.length = 0;
gdjs.GameCode.GDPoliceRedObjects2.length = 0;
gdjs.GameCode.GDPoliceRedObjects3.length = 0;
gdjs.GameCode.GDPolicePinkObjects1.length = 0;
gdjs.GameCode.GDPolicePinkObjects2.length = 0;
gdjs.GameCode.GDPolicePinkObjects3.length = 0;
gdjs.GameCode.GDPoliceCianObjects1.length = 0;
gdjs.GameCode.GDPoliceCianObjects2.length = 0;
gdjs.GameCode.GDPoliceCianObjects3.length = 0;
gdjs.GameCode.GDmarijuanaObjects1.length = 0;
gdjs.GameCode.GDmarijuanaObjects2.length = 0;
gdjs.GameCode.GDmarijuanaObjects3.length = 0;

gdjs.GameCode.eventsList9(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
