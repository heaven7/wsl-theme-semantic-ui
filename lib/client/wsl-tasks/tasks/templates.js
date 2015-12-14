Template.task.onRendered(function () {
        if($(".icon").is('[data-content]')) {
            $(".icon[data-content]").popup();
        }
});
