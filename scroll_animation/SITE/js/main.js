$(
    function() {
        let $device = $('.device')
        let $features = $('.features')
        let $location = $('.location')
        let $offset = 600;
        let $deviceOST = $device.offset().top - $offset
        let $featuresOST = $features.offset().top - $offset
        let $locationOST = $location.offset().top - $offset

        $(window).scroll(function() {
            if($(this).scrollTop() >  $deviceOST){
                $device.find('img').addClass('animate')
            }
            if($(this).scrollTop() > $featuresOST){
                $features.find('img').addClass('grow-img')
                $features.find('h4').addClass('grow-img')
            }
            if($(this).scrollTop() > $locationOST){
                $location.find('div').addClass('animate_down')
            }
        })
    }
)

// scrollTop(): the number of pixels that an element's content is scrolled vertically.
// offestTop: offsetParent(부모의 전체 영역/ 따로 position 설정이 없으면 body)으로부터 아래로 얼마나 떨어져 있는가