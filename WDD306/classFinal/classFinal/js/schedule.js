$(document).ready(function() {
    console.log("hello");
    $('#conference a').click(function() {
        console.log("clicked link");
        $('article a div').removeClass('activeTab');
        $(this).children("div").addClass('activeTab');

        var currentTab = $(this).attr('href');
        console.log(currentTab);

        $('article section').each(function() {
            var currentSection = $(this).attr('id');
            console.log("Current Section" + currentSection);

            if (currentTab != currentSection) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active');
            }
        })
    })
})