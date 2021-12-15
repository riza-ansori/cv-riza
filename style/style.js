$(document).ready(function(){       
    // btn scroll
    var scroll_start = 0;
    var startchange = $('#to-top');
    if (startchange.length){
        $(document).scroll(function() { 
            scroll_start = $(this).scrollTop();
            if(scroll_start > 100) {
                $(startchange).css('opacity', '1');
            } else {
                $(startchange).css('opacity', '0');
            }
        });
    }
    
    $("#to-top").on("click", function() {
        $(window).scrollTop(0);
    });
});

var app = new Vue ({
    el: '#cv-riza',
    data: {
        // banner
        msg: "I'm Riza.",
        msg2:"A Frontend Developer & Website Designer",
        urlBanner: "./img/project-banner.png",
        // about
        urlPortrait: "./img/ansori-riza.png",
        cls : "w-100 fillter-grey",
        titleAbout: "About Me",
        subtitleAbout : "Hello, I'm Riza. I've Been Building Website for 5 Years",
        pAbout1:"My full name is Ansori Riza Yogi Saputro. A creative worker who focuses on front-end web development and web design.",
    }
})



