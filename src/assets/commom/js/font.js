window.onload = function () {
    /*字体自适应  ,单位用rem*/
    function fixRem() {
        var windowWidth = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
        windowWidth = windowWidth > 750 ? 750 : windowWidth;
        //通常以iphone6为标准，375px宽度，28px字体大小。
        var rootSize = 28 * (windowWidth / 375);
        var htmlNode = document.getElementsByTagName("html")[0];
        htmlNode.style.fontSize = rootSize + 'px';
    }
    fixRem();
    window.addEventListener('resize', fixRem, false);
}
