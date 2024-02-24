var num = 1; //현재 문제 번호를 저장할 변수
var q = {
    1: {
        "title": "유녕이가 제일 좋아하는 음식점은?",
        "type":"YE",
        "img5": "static/img/1.png",
        "A": "하이디라오",
        "B": "호족반"
        },
    2: {
        "title": "유녕이가 오빠 생일 선물로 준 것은?",
        "type": "NO",
        "img5": "static/img/2.png",
        "A": "후드티",
        "B": "후드집업"
        },
    3: {
        "title": "유녕이의 별자리는?",
        "type": "YE",
        "img5": "static/img/3.png",
        "A": "염소자리",
        "B": "물병자리"
        },
    4: {
        "title": "다음 상황에서 적절한 말은?",
        "type": "NO",
        "img5": "static/img/4.png",
        "A": "오잉 언제 개무시했우",
        "B": "앗 미안행 ㅎㅎ 다음엔 반응 잘할게!!"
        },
    5: {
        "title": "유녕이는 어떤 데이트를 더 만족했을까?",
        "type": "YE",
        "img5": "static/img/5.png",
        "A": "생일 데이트",
        "B": "크리스마스 데이트"
        },
    6: {
        "title": "유녕이가 가장 좋아하는 스킨십은?",
        "type": "NO",
        "img5": "static/img/6.png",
        "A": "안아 주기",
        "B": "볼뽀뽀"
        },
    7: {
        "title": "다음 중 유녕이가 더 진심으로 하는 말은?",
        "type": "YE",
        "img5": "static/img/7.png",
        "A": "여기 진짜 맛있다",
        "B": "나 졸려"
        },
    8: {
        "title": "유녕이가 안 좋아하는 색은?",
        "type": "NO",
        "img5": "static/img/8.png",
        "A": "노란색",
        "B": "갈색"
        },
    9: {
        "title": "유녕이가 좋아하는 애니메이션은?",
        "type": "YE",
        "img5": "static/img/9.png",
        "A": "케이온",
        "B": "나루토"
        },
    10: {
        "title": "유녕이가 가장 좋아하는 자기의 모습은?",
        "type": "NO",
        "img5": "static/img/10.png",
        "A": "자기 전에 안아주면서 사랑해라고 할 때",
        "B": "사랑해라는 말에 벅찬 표정을 보일 때"
        },
    11: {
        "title": "유녕이가 자기랑 잘 맞는다고 생각할 때는?",
        "type": "YE",
        "img5": "static/img/11.png",
        "A": "할 때",
        "B": "티키타카가 잘 맞을 때"
        },
    12: {
        "title": "나는 자기한테 어떤 사람이고 싶을까?",
        "type": "NO",
        "img5": "static/img/12.png",
        "A": "예쁜 사람",
        "B": "사랑스러운 사람"
        }
    }
var result = {
    "ISTJ": {
        "character": "ISTJ", 
        "mbti": "편지내용", 
        "img1": "static/img/istj.png"
    },
    "ISFJ": {
        "character": "ISFJ", 
        "mbti": "편지내용", 
        "img1": "static/img/isfj.png"
    },
    "ESTJ": {
        "character": "ESTJ", 
        "mbti": "편지내용", 
        "img1": "static/img/estj.png"
    },
    "ESFJ": {
        "character": "ESFJ", 
        "mbti": "편지내용", 
        "img1": "static/img/esfj.png"
        },
    "ISTP": {
        "character": "ISTP", 
        "mbti": "편지내용", 
        "img1": "static/img/istp.png"
    },
    "ISFP": {
        "character": "ISFP", 
        "mbti": "편지내용", 
        "img1": "static/img/isfp.png"
    },
    "ESTP": {
        "character": "ESTP", 
        "mbti": "편지내용", 
        "img1": "static/img/estp.png"
    },
    "ESFP": {
        "character": "ESFP", 
        "mbti": "편지내용", 
        "img1": "static/img/esfp.png"
    },
    "INFP": {
        "character": "INFP", 
        "mbti": "편지내용", 
        "img1": "static/img/infp.png"
    },
    "INTP": {
        "character": "INTP", 
        "mbti": "편지내용",  
        "img1": "static/img/intp.png"
    },
    "ENFP": {
        "character": "ENFP", 
        "mbti": "편지내용", 
        "img1": "static/img/enfp.png"
    },
    "ENTP": {
        "character": "ENTP", 
        "mbti": "편지내용", 
        "img1": "static/img/entp.png"
    },
    "INFJ": {
        "character": "INFJ", 
        "mbti": "편지내용", 
        "img1": "static/img/infj.png"
    },
    "INTJ": {
        "character": "INTJ", 
        "mbti": "편지내용", 
        "img1": "static/img/intj.png"
    },
    "ENFJ": {
        "character": "ENFJ", 
        "mbti": "편지내용", 
        "img1": "static/img/enfj.png"
    },
    "ENTJ": {
        "character": "ENTJ", 
        "mbti": "편지내용", 
        "img1": "static/img/entj.png"
    }
}
function start() { 
    $(".start").hide();
    $(".question").show();
    next();
}
$("#A").click(function(){ 
    var type = $("#type").val();
    var preValue = $("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1);
    next();
});
$("#B").click(function(){ 
    next();
});
function next() {
    if(num == 13){
        $(".question").hide();
        $(".result").show();

        var mbti = "";
        ($('#YE').val() < 2) ? mbti += "I" : mbti += "E";
        ($('#NO').val() < 2) ? mbti += "N" : mbti += "S";


        $("#img1").attr("src", result[mbti]["img1"]);
        $("#character").html(result[mbti]["character"]);
        $("#mbti_text").html(result[mbti]["mbti"]);
        $("#presume_text").html(result[mbti]["presume"]);


    } else {
        $("#img5").attr("src", q[num]["img5"]);
        $(".progress-bar").attr('style','width: calc(100/12*'+num+'%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}
function reload() { 
    location.reload();
}