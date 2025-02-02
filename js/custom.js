var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '(๑• . •๑) 你错过我了哦~';
        clearTimeout(titleTime);
    }
    else {
        document.title = '◍^ㅅ^◍ 你来啦！' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});
