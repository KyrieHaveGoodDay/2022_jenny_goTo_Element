
// 找html標籤
// dataset

$('*').each(function(){
    $(this).click(function(e){
        e.preventDefault();
        
        let target = $(this).attr('data-gt-target');
        let duration = $(this).attr('data-gt-duration');
        
        // 如果有明確的目標
        if(target){
            // true

            // 元素高度
            let top = $(target).offset().top;
            
            $('html').animate({
                // 滾動
                scrollTop:top
                // 轉型 字串轉成數字
            },parseInt(duration))
        }
    })
})

