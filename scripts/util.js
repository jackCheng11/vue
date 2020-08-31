;(function(window){
    window.util = new Object();
    window.util.left = function(ele, offset){
        var currentLeft = parseFloat(common.getStyle(ele, "left"));
        if(offset !== undefined){
            ele.style.left = currentLeft + offset + "px";
        }
        return currentLeft;
    }
})(window);