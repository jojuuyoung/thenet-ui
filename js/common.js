'use strict';
$(function () {
    var s2Item = $('.guide-side .sub-menu > li > a');

    s2Item.click(function(e) {
        e.preventDefault();
        var s2ItemId = $(this).attr('data-menu');

        $.ajax({
            type: 'get',
            url: 'pages/'+ s2ItemId +'.html',
            dataType: 'html',
            success: function (data) {
                $("#load-ct").html(data);
                SyntaxHighlighter.highlight();
                TNUI.wsg.init();
                // TNUI.module.init();
                
            }
        });
        if(isMobile) $('.mo-guide-btn').trigger('click');
    })

    // $.ajax({
    //     type: 'get',
    //     url: 'pages/c02.html',
    //     dataType: 'html',
    //     success: function (data) {
    //         $("#load-ct").html(data);
    //         SyntaxHighlighter.highlight();
    //         TNUI.wsg.init();
    //         // TNUI.module.init();
    //     }
    // });

    TNUI.wsg.init();
})