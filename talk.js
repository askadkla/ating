$(function() {
    $('#yes').click(function(event) {
        modal('谢谢你愿意接受我们的生日祝福！(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('今天可是你的特别日子哦！', A);
    });
});

function A() {
    modal('让我们为你送上第一份祝福：', B);
}

function B() {
    modal('祝你生日快乐，愿幸福常伴！', C);
}

function C() {
    modal('新的一岁，愿你健康平安，', D);
}

function D() {
    modal('笑容灿烂，每一天都充满阳光！', E);
}

function E() {
    modal('所有的梦想都能成真，', F);
}

function F() {
    modal('所有的希望都能实现！', G);
}

function G() {
    modal('愿快乐与你形影不离，', H);
}

function H() {
    modal('愿好运对你青睐有加！', I);
}

function I() {
    modal('看，专为你绽放的烟花来啦！', J)
}

function J() {
    modal('生日快乐！永远快乐！', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
