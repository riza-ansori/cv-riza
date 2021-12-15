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

    // progressbar
    $("#progress-uiux").animate({
            width: "65%",
    }, 2500);
    $("#progress-frontend").delay(100).animate({
        width: "80%",
    }, 2500);
    $("#progress-seo").delay(200).animate({
        width: "55%",
    }, 2500);
});

var app = new Vue ({
    el: '#cv-riza',
    data: {
        // Banner
        msg: "I'm Riza.",
        msg2:"A Frontend Developer & Website Designer",
        urlBanner: "./img/project-banner.png",
        
        // About
        urlPortrait: "./img/ansori-riza.png",
        cls : "w-100 fillter-grey",
        titleAbout : "About Me",
        subtitleAbout : "Hello, I'm Riza. I've Been Building Website for 5 Years",
        pAbout1 : "My full name is Ansori Riza Yogi Saputro. A creative worker who focuses on front-end web development and web design.",
        pAbout2 : "My hobbies are playing games and reading books.",
        pAbout3 : "I graduated from STMIK Jendral Ahmad Yani Yogyakarta, with Computer Science bachelor's degree.",
        pAbout4 : "Since 2015 I have been building a website. I use HTML5, CSS, JavaScript, PHP.  Besides that, I experienced using Laravel, React, and WordPress.",
        pAbout5 : "I use Adobe XD, Figma, Affinity, and Photoshop to design websites.",
        
        // Experience
        titleExperience : "Experience",
        todos: [
            { text: 'Web Developer at PT Qwords Company International (Jul 2019 - Feb 2022)' },
            { text: 'Web Developer at PT Grune Teknologi Indonesia (Apr 2018 - Apr 2019)' },
            { text: 'Web / Graphic Designer at Insfilo (Apr 2016 - Mar 2018)' },
            { text: 'Web / Graphic Designer at Odihost (Nov 2015 - Apr 2016)' },
            { text: 'Developer at CV Danar Jati Teknikindo (May 2015 - Oct 2015)' }
        ],
        uiux : "ui/ux Desain",
        frontend : "frontend",
        seo : "seo",
    }
})



