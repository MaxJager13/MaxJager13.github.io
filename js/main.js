$(function(){

    var fadInOutTime = 250,
        infoPanelGroupSlideTime = 350,
        $infoBtnGroup = $('#info-btn-1, #info-btn-2, #info-btn-3, #info-btn-4, #info-btn-5'),
        $flexContainerGroupTop = $('.flex-container-experience, .flex-container-skills, .flex-container-education'),
        $flexContainerGroupBottom = $('.flex-container-self-training, .flex-container-life-style'),
        $phaseGroup = $('#phase1, #phase2, #phase3'),
        $skillGroup = $('#worksmart, #languages'),
        $selfTrainingGroup = $('#axure, #web-dev'),
        $lifeStyleGroup = $('#coffee, #movie, #tv-show, #reading'),
        $coffeeMapObj = {
                bestMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2555.12410314831!2d121.4728460425377!3d25.08523000599024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e8f3ef710c716fd!2z6LKd5oCd57e5!5e0!3m2!1szh-TW!2stw!4v1477124961158',
                wilbeckMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.1581787941905!2d121.56067303329188!3d25.051733636491868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x370966e22b6148e9!2z5aiB54i-6LKd5YWL5ZKW5ZWhLeWNl-S6rOW6l1dpbGJlY2sgQ2FmJ2U!5e0!3m2!1szh-TW!2stw!4v1477124863056',
                louisaMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2212.1540573011757!2d121.5512348872241!3d25.05196201940476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe1d1070f178f309b!2zTG91aXNhIENvZmZlZSDot6_mmJPvvI7ojo7lkpbllaEo5bCP5beo6JuL5bqXKQ!5e0!3m2!1szh-TW!2stw!4v1477124763342',
                camaMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.466579611001!2d121.55144718309285!3d25.051636421902916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x309b29de1f1f2104!2zY2FtYeePvueDmOWSluWVoeWwiOmWgOW6lw!5e0!3m2!1szh-TW!2stw!4v1477124808847',
                nichiMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.6837915587216!2d121.52033375173598!3d25.05315471420223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf2b98a35ec87f6ef!2z5pel5a2Q5ZKW5ZWh5pys5bqX!5e0!3m2!1szh-TW!2stw!4v1477124613757',
                fikaMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.7163174400505!2d121.53539917428752!3d25.050531123374842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a961961efb11%3A0x9e0483daf98a26ef!2sFika+Fika+Cafe!5e0!3m2!1szh-TW!2stw!4v1477124552430',
                crownMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.40048917427!2d121.56851617718866!3d25.04082732491578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbb7ffc7e91%3A0x42e06de83a9dca99!2z6YeR6ZGb5ZKW5ZWhLeWPsOWMl-W_oOWtnemWgOW4gijnm7Tnh58p!5e0!3m2!1szh-TW!2stw!4v1477124482783',
                ovenMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1074.6703282266285!2d121.5062948971209!3d25.04270252771681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a90907dd6317%3A0xf469f337a2372218!2zT3ZlbiBDb2ZmZWUg5oiQ6YO95bqX!5e0!3m2!1szh-TW!2stw!4v1478843883534'
        },
        $coffeeBtnGroup = $('#coffee-best-btn, #coffee-wilbeck-btn, #coffee-louisa-btn, #coffee-cama-btn, #coffee-nichi-btn, #coffee-fika-btn, #coffee-crown-btn, #coffee-oven-btn'),
        $phaseModalGroup = $('#phase1-modal, #phase2-modal, #phase3-modal'),
        phaseObj = {
            piliyt:'https://www.youtube.com/embed/J-ZjC-zdpQY',
            gulongyt:'https://www.youtube.com/embed/AICAfk9LA_U',
            xenjoyt:'https://www.youtube.com/embed/1023TNghYh4',
            gunsrushyt:'https://www.youtube.com/embed/VEeubSFLfXA',
            tolinkyt:'https://www.youtube.com/embed/OqE9otM0uYQ',
            dragonballyt:'https://www.youtube.com/embed/58ljJeimIiM',
            cin11yt:'https://www.youtube.com/embed/-EnCVCB6oBo'
        };

        $infoBtnGroup.click(function(){
            $flexContainerGroupTop.css('display', 'none');
            $flexContainerGroupBottom.css('display', 'none');
            switch ($infoBtnGroup.index(this)) {
                case 0:
                    $('.flex-container-experience').stop(true).fadeIn(fadInOutTime);
                    $phaseGroup.hide().show('slide',{direction:'up'},infoPanelGroupSlideTime);
                break;

                case 1:
                    $('.flex-container-skills').stop(true).fadeIn(fadInOutTime);
                    $skillGroup.hide().show('slide',{direction:'up'},infoPanelGroupSlideTime);
                break;

                case 2:
                    $('.flex-container-education').stop(true).fadeIn(fadInOutTime);
                    $('#tajen').hide().show('slide',{direction:'up'},infoPanelGroupSlideTime);
                break;

                case 3:
                    $('.flex-container-self-training').stop(true).fadeIn(fadInOutTime);
                    $selfTrainingGroup.hide().show('slide',{direction:'down'},infoPanelGroupSlideTime);
                break;

                case 4:
                    $('.flex-container-life-style').stop(true).fadeIn(fadInOutTime);
                    $lifeStyleGroup.hide().show('slide',{direction:'down'},infoPanelGroupSlideTime);
            }
        });

        $('#info-btn-6').click(function(){
                            $('.versionlog').stop(true).fadeIn(fadInOutTime);
                        })
                        .mouseout(function(){
                            $('.versionlog').stop(true).fadeOut(fadInOutTime);
                        });

        $('#axure-prototype-pic-1 img').mouseover(function(){
                                            $('#axure-prototype-title-1').hide('slide',{direction:'down'},fadInOutTime);
                                            $('#axure-prototype-desc-1').show('slide',{direction:'up'},fadInOutTime);
                                        })
                                        .mouseout(function(){
                                            $('#axure-prototype-desc-1').hide('slide',{direction:'up'},fadInOutTime);
                                            $('#axure-prototype-title-1').show('slide',{direction:'down'},fadInOutTime);
                                        });


        $('#axure-prototype-pic-2 img').mouseover(function(){
                                            $('#axure-prototype-title-2').hide('slide',{direction:'down'},fadInOutTime);
                                            $('#axure-prototype-desc-2').show('slide',{direction:'up'},fadInOutTime);
                                        })
                                        .mouseout(function(){
                                            $('#axure-prototype-desc-2').hide('slide',{direction:'up'},fadInOutTime);
                                            $('#axure-prototype-title-2').show('slide',{direction:'down'},fadInOutTime);
                                        });


        $phaseModalGroup.on('hidden.bs.modal', function () {
            switch($phaseModalGroup.index(this)) {
                case 0:
                    $('#piliyt').attr('src', phaseObj.piliyt);
                    $('#gulongyt').attr('src', phaseObj.gulongyt);
                    $('#xenjoyt').attr('src', phaseObj.xenjoyt);
                break;

                case 1:
                    $('#gunsrushyt').attr('src', phaseObj.gunsrushyt);
                break;

                case 2:
                    $('#tolinkyt').attr('src', phaseObj.tolinkyt);
                    $('#dragonballyt').attr('src', phaseObj.dragonballyt);
                    $('#cin11yt').attr('src', phaseObj.cin11yt);
            }
        });




        $coffeeBtnGroup.click(function(){
            switch ($coffeeBtnGroup.index(this)) {
                case 0:
                    $('#coffee-map').attr('src', $coffeeMapObj.bestMap);
                break;

                case 1:
                    $('#coffee-map').attr('src', $coffeeMapObj.wilbeckMap);
                break;

                case 2:
                    $('#coffee-map').attr('src', $coffeeMapObj.louisaMap);
                break;

                case 3:
                    $('#coffee-map').attr('src', $coffeeMapObj.camaMap);
                break;

                case 4:
                    $('#coffee-map').attr('src', $coffeeMapObj.nichiMap);
                break;

                case 5:
                    $('#coffee-map').attr('src', $coffeeMapObj.fikaMap);
                break;

                case 6:
                    $('#coffee-map').attr('src', $coffeeMapObj.crownMap);
                break;

                case 7:
                    $('#coffee-map').attr('src', $coffeeMapObj.ovenMap);
            }
        })



        $("#coffee-modal").on('hidden.bs.modal', function () {
            $("#coffee-map").attr("src", "");
        });



//Movie modal jQuery
        var movieBtnInOutTime = 250,
            movieCoverSlideUpTime = 400,
            $marvelCoverGroup = $('#dr-strange-cover, #guardians-cover, #cpt-america-cover, #avengers-cover, #antman-cover'),
            $marvelYoutubeGroup = $('#dr-strange-yt, #guardians-yt, #cpt-america-yt, #avengers-yt, #antman-yt'),
            $movieNavBtnGroup = $('#marvel-nav-btn, #dc-nav-btn'),
            $movieCoverBtnGroup = $('#marvel-cover-btn, #dc-cover-btn'),
            $allCoverGroup = $('#dr-strange-cover, #guardians-cover, #cpt-america-cover, #avengers-cover, #antman-cover, #justice-cover, #wonder-woman-cover, #bvs-cover, #suicide-squad-cover, #super-man-cover'),
            $allYoutubeGroup = $('#dr-strange-yt, #guardians-yt, #cpt-america-yt, #avengers-yt, #antman-yt, #justice-yt, #wonder-woman-yt, #bvs-yt, #suicide-squad-yt, #super-man-yt'),
            marvelYoutubeObj = {
                drStrange: 'https://www.youtube.com/embed/nVJUWrg74aQ?autoplay=1',
                guardians: 'https://www.youtube.com/embed/5-m-glR1MI4?autoplay=1',
                cptAmerica: 'https://www.youtube.com/embed/dKrVegVI0Us?autoplay=1',
                avengers: 'https://www.youtube.com/embed/tmeOjFno6Do?autoplay=1',
                antman: 'https://www.youtube.com/embed/pWdKf3MneyI?autoplay=1'
            };

        $movieCoverBtnGroup.click(function(){
            switch ($movieCoverBtnGroup.index(this)){
                case 0:
                    $('#marvel-cover-btn').hide('slide', {direction:'up'}, movieBtnInOutTime);
                    $('#dc-cover-btn').hide('slide', {direction:'down'}, movieBtnInOutTime);
                    $('#marvel-container, #dc-nav-btn').delay(350).fadeIn(500);
                break;

                case 1:
                    $('#dc-cover-btn').hide('slide', {direction:'up'}, movieBtnInOutTime);
                    $('#marvel-cover-btn').hide('slide', {direction:'down'}, movieBtnInOutTime)
                    $('#dc-container, #marvel-nav-btn').delay(350).fadeIn(500);
            }
        });

        $movieNavBtnGroup.click(function(){

            var checkIfHaveBlock = function() {
                                        var result = true;
                                        $.each($allCoverGroup, function( index, value ) {
                                                result = result && ($(value).css('display') === 'block');
                                            })
                                        return result;
                                    };

            if (checkIfHaveBlock()) {
                        switch ($movieNavBtnGroup.index(this)){
                            case 0:
                                $('#dc-container, #marvel-nav-btn').fadeOut(250);
                                $('#marvel-container, #dc-nav-btn').delay(250).fadeIn(500);
                            break;

                            case 1:
                                $('#marvel-container, #dc-nav-btn').fadeOut(250);
                                $('#dc-container, #marvel-nav-btn').delay(250).fadeIn(500);
                        }
            } else {
                        switch ($movieNavBtnGroup.index(this)){
                            case 0:
                                $allYoutubeGroup.attr('src', '');
                                $allCoverGroup.show('slide', {direction:'up'}, 1000);
                                $('#dc-container, #marvel-nav-btn').delay(1200).fadeOut(100);
                                $('#marvel-container, #dc-nav-btn').delay(1500).fadeIn(500);
                            break;

                            case 1:
                                $allYoutubeGroup.attr('src', '');
                                $allCoverGroup.show('slide', {direction:'up'}, 1000);
                                $('#marvel-container, #dc-nav-btn').delay(1200).fadeOut(100);
                                $('#dc-container, #marvel-nav-btn').delay(1500).fadeIn(500);
                        }
            }
        });

        $("#movie-modal").on('hidden.bs.modal', function () {
            $allCoverGroup.show();
            $allYoutubeGroup.attr('src', '');
            $('#marvel-container, #dc-container, #marvel-nav-btn, #dc-nav-btn').hide();
            $('#marvel-cover-btn, #dc-cover-btn').show();
        });


        $marvelCoverGroup.click(function(){
            $marvelCoverGroup.show('slide', {direction:'up'}, movieCoverSlideUpTime);
            $marvelYoutubeGroup.attr('src', '');
            switch ($marvelCoverGroup.index(this)) {
                case 0:
                    $('#dr-strange-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#dr-strange-yt').attr('src', marvelYoutubeObj.drStrange);
                break;

                case 1:
                    $('#guardians-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#guardians-yt').attr('src', marvelYoutubeObj.guardians);
                break;

                case 2:
                    $('#cpt-america-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#cpt-america-yt').attr('src', marvelYoutubeObj.cptAmerica);
                break;

                case 3:
                    $('#avengers-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#avengers-yt').attr('src', marvelYoutubeObj.avengers);
                break;

                case 4:
                    $('#antman-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#antman-yt').attr('src', marvelYoutubeObj.antman);
            }
        });

        $marvelYoutubeGroup.mouseout(function(){
            switch ($marvelYoutubeGroup.index(this)){
                case 0:
                    $('#dr-strange-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#dr-strange-yt').attr('src', '');
                break;

                case 1:
                    $('#guardians-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#guardians-yt').attr('src', '');
                break;

                case 2:
                    $('#cpt-america-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#cpt-america-yt').attr('src', '');

                case 3:
                    $('#avengers-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#avengers-yt').attr('src', '');
                break;

                case 4:
                    $('#antman-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#antman-yt').attr('src', '');

            }
        });

        var $dcCoverGroup = $('#justice-cover, #wonder-woman-cover, #bvs-cover, #suicide-squad-cover, #super-man-cover'),
            $dcYoutubeGroup = $('#justice-yt, #wonder-woman-yt, #bvs-yt, #suicide-squad-yt, #super-man-yt'),
            $dcYoutubeList = {
                justice:'https://www.youtube.com/embed/fIHH5-HVS9o?autoplay=1',
                wonderWoman:'https://www.youtube.com/embed/5lGoQhFb4NM?autoplay=1',
                bvs:'https://www.youtube.com/embed/eX_iASz1Si8?autoplay=1',
                suicideSquad:'https://www.youtube.com/embed/CmRih_VtVAs?autoplay=1',
                superMan:'https://www.youtube.com/embed/T6DJcgm3wNY?autoplay=1'
            };

        $dcCoverGroup.click(function(){
            $dcCoverGroup.show('slide', {direction:'up'}, movieCoverSlideUpTime);
            $dcYoutubeGroup.attr('src', '');
            switch ($dcCoverGroup.index(this)) {
                case 0:
                    $('#justice-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#justice-yt').attr('src', $dcYoutubeList.justice);
                break;

                case 1:
                    $('#wonder-woman-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#wonder-woman-yt').attr('src', $dcYoutubeList.wonderWoman);
                break;

                case 2:
                    $('#bvs-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#bvs-yt').attr('src', $dcYoutubeList.bvs);
                break;

                case 3:
                    $('#suicide-squad-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#suicide-squad-yt').attr('src', $dcYoutubeList.suicideSquad);
                break;

                case 4:
                    $('#super-man-cover').hide('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#super-man-yt').attr('src', $dcYoutubeList.superMan);
            }
        });

        $dcYoutubeGroup.mouseout(function(){
            switch ($dcYoutubeGroup.index(this)){
                case 0:
                    $('#justice-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#justice-yt').attr('src', '');
                break;

                case 1:
                    $('#wonder-woman-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#wonder-woman-yt').attr('src', '');
                break;

                case 2:
                    $('#bvs-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#bvs-yt').attr('src', '');

                case 3:
                    $('#suicide-squad-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#suicide-squad-yt').attr('src', '');
                break;

                case 4:
                    $('#super-man-cover').show('slide', {direction:'up'}, movieCoverSlideUpTime);
                    $('#super-man-yt').attr('src', '');

            }
        });

        var $tvMultiSelect = $('#tv-got, #tv-twd, #tv-aos, #tv-flash, #tv-dd, #tv-jj, #tv-luke, #tv-fist'),
            tvYtObj = {
                got:'https://www.youtube.com/embed/EI0ib1NErqg?autoplay=1',
                twd:'https://www.youtube.com/embed/wGm2zwg_-NY?autoplay=1',
                aos:'https://www.youtube.com/embed/yY9ar4QJOsY?autoplay=1',
                flash:'https://www.youtube.com/embed/9BTGpKJ2VR4?autoplay=1',
                dd:'https://www.youtube.com/embed/m5_A0Wx0jU4?autoplay=1',
                jj:'https://www.youtube.com/embed/nWHUjuJ8zxE?autoplay=1',
                luke:'https://www.youtube.com/embed/ytkjQvSk2VA?autoplay=1',
                fist:'https://www.youtube.com/embed/QCSPda7xQ3s?autoplay=1'
            };



            $tvMultiSelect.click(function() {

                var checkIfShow = function() {
                    var $tvCover = $('#tv-cover');
                    if ($tvCover.css('display') === 'block') {
                        return true;
                    } else {
                        return false;
                    };
                }

                if (checkIfShow()) {

                    $('#tv-cover').hide('slide', {direction:'up'}, 500);

                    switch ($tvMultiSelect.index(this)) {
                        case 0:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.got).dequeue();
                            });
                        break;

                        case 1:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.twd).dequeue();
                            });
                        break;

                        case 2:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.aos).dequeue();
                            });
                        break;

                        case 3:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.flash).dequeue();
                            });
                        break;

                        case 4:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.dd).dequeue();
                            });
                        break;

                        case 5:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.jj).dequeue();
                            });
                        break;

                        case 6:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.luke).dequeue();
                            });
                        break;

                        case 7:
                            $('#tv-yt-panel').delay(500).queue(function() {
                                $(this).attr('src', tvYtObj.fist).dequeue();
                            });
                    }

                } else {

                    switch ($tvMultiSelect.index(this)) {
                        case 0:
                            $('#tv-yt-panel').attr('src', tvYtObj.got);
                        break;

                        case 1:
                            $('#tv-yt-panel').attr('src', tvYtObj.twd);
                        break;

                        case 2:
                            $('#tv-yt-panel').attr('src', tvYtObj.aos);
                        break;

                        case 3:
                            $('#tv-yt-panel').attr('src', tvYtObj.flash);
                        break;

                        case 4:
                            $('#tv-yt-panel').attr('src', tvYtObj.dd);
                        break;

                        case 5:
                            $('#tv-yt-panel').attr('src', tvYtObj.jj);
                        break;

                        case 6:
                            $('#tv-yt-panel').attr('src', tvYtObj.luke);
                        break;

                        case 7:
                            $('#tv-yt-panel').attr('src', tvYtObj.fist);
                    }
                }
            })

        $("#tv-modal").on('hidden.bs.modal', function () {
            $('#tv-cover').show();
            $('#tv-yt-panel').attr('src', '');
        });






});