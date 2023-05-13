//問題文と正解の定義づけ
const quiz = [
    {
        quesiton:'クリーブラッツで一番美味しいパンは？',
        answer:[
            'カレーパン',
            'メロンパン',
            '塩パン',
            '明太フランス'
        ],
        correct:'塩パン',
    },{
        quesiton:'カレーパンが人気のコンビニは？',
        answer:[
            'ローソン',
            'セブンイレブン',
            'ファミリマート',
            'デイリー'
        ],
        correct:'セブンイレブン',
    },{
        quesiton:'クロワッサンが絶賛のお店は？',
        answer:[
            'クリーブラッツ',
            'アンティーク',
            'ミニヨン',
            'ピエトロ'
        ],
        correct:'ミニヨン',
    }
];

const quizLength=quiz.length;
let quizIndex = 0;
let score = 0; 

//HTML上から引き上げた「button」を「＄button」に定義づけ
const $button = document.getElementsByTagName('button');   
const buttonLength = $button.length;

//HTML上の「js-question」「button」をJavaScript上で定義した問題・選択肢に割り当てる指示
const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].quesiton;
         //↑HTMLにあるjs-questionをquizcの配列のquestionに割り当てる指示                                          
    let buttonIndex = 0;    
    let buttonLength = $button.length;
    while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent =quiz[quizIndex].answer[buttonIndex];                 
    buttonIndex++;
    //buttonLengthと同じ数（＝４つ）になるまでbuttonをquizにあるanswerに割り当てて１ずつ増えていくという指示。
    }
} 

//上記で囲った関数を呼び出す  
setupQuiz();

//ボタンを押して当たったら「正解」それ以外は「ハズレ」という指示
const clickHandler = (e)=>{
    if(quiz[quizIndex].correct === e.target.textContent){
            window.alert ('正解');
            score++; 
    }else{
            window.alert ('ハズレ');} 
//もしクイズを解いたら次に行く、最後まで解いたら「終了」と「正解数」を書いたポップアップを表示する。           
    quizIndex++;
    if(quizIndex < quizLength){setupQuiz();}
    else{                       
        window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
    }
    };

//handleIndexがbuttonLengthの数（＝4つ）に追いつくまで、clickHandlerに従ってボタンを押したら反映される状態を維持しながら１ずつ増えていくという指示。
let  handleIndex=0;
while(handleIndex<buttonLength){
    $button[handleIndex].addEventListener('click',(e)=>{
        clickHandler(e);
    });
    handleIndex++;
}































