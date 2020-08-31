;(function(window){
    window.common = new Object();
    // IE8
    window.common.getStyle = function(ele, prop){
        if("getComputedStyle" in window){
            return window["getComputedStyle"](ele)[prop];
        }else{
            // 使用currentStyle获取样式值，颜色不会经过rgb转换
            return ele["currentStyle"][prop];
        }
    }
    // IE8
    window.common.on = function(ele, eventName, eventHook, useCapture){
        useCapture = useCapture?true:false;
        if("addEventListener" in window){
            ele["addEventListener"](eventName, eventHook, useCapture);
        }else{
            if(!ele[eventName + "EventHookStack"]){
                ele[eventName + "EventHookStack"] = [];
            } 
            for(var i = 0; i < ele[eventName + "EventHookStack"].length; i++){
                if(eventHook === ele[eventName + "EventHookStack"][i]){
                    return;
                }
            }
            ele[eventName + "EventHookStack"].push(eventHook);
            ele["on" + eventName] = function(){
                for(var i = 0; i < ele[eventName + "EventHookStack"].length; i++){
                    ele[eventName + "EventHookStack"][i].call(ele);
                }
            }
        }
    }
    // IE8
    window.common.off = function(ele, eventName, eventHook, useCapture){
        useCapture = useCapture?true:false;
        if("removeEventListener" in window){
            ele["removeEventListener"](eventName, eventHook, useCapture);
        }else{
            if(!ele[eventName + "EventHookStack"] || (index === -1)){
                return;
            }else{
                var index = -1;
                for(var i = 0; i < ele[eventName + "EventHookStack"].length; i++){
                    if(ele[eventName + "EventHookStack"][i] === eventHook){
                        index = i;
                    }
                }
                ele[eventName + "EventHookStack"].splice(index, 1);
                if(ele[eventName + "EventHookStack"].length === 0){
                    ele["on" + eventName] = null;
                }
            }
        }
    }
}(window));

