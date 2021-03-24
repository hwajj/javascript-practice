var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

var _state = 0;
var _choiceObjIndex = 0;
var _imageInBox = 0;
var _animalInBoxArr = []; 


function rect(){
    //canvas요소에 대한 Context 개체 가져오기
    
    //var canvas = document.getElementById('myCanvas');
    //var ctx = canvas.getContext('2d');

    //context.fillStyle(0xFFFFF);
   // context.fillRect(0,0,1000, 500 );

    //context.strokeRect(20,150,500,150); //strokeRect(x,y,width,height) ; 테두리만 있는 사각형을 그림

                        
}



var img = new Image();   // Create new img element
img.src = 'image/1.jpeg';
var cogi ={height:100, width:100, x:30, y:30, imageObj: img, state: 0 , name:'cogi' , order:0};

console.log(cogi.x);

var img2 = new Image();   // Create new img element
img2.src = 'image/2.jpeg';
var ham = {height:100, width:100, x:150, y:30, imageObj: img2, state: 0, name:'ham' , order:1};

var img3 = new Image();   // Create new img element
img3.src = 'image/3.jpeg';
var otter = {height:100, width:100, x:270, y:30, imageObj: img3, state: 0, name:'otter' , order:2};

var animalArray = [cogi, ham, otter];
console.log(animalArray)
function drawAnimal() {
    context.fillStyle = "white"; //"rgb(255,0,0)";
    context.fillRect(0,0,1000, 500 );
    //context.fillStyle(0xFFFFF);
    context.strokeRect(20,200,700,200); //strokeRect(x,y,width,height) ; 테두리만 있는 사각형을 그림
    for (let i = 0; i < animalArray.length; i++) {
        context.drawImage(animalArray[i].imageObj, animalArray[i].x,
            animalArray[i].y, animalArray[i].width, animalArray[i].height);
    }
}
//이건 안되고 저건되는 이유가 멀까 내가 멀 잘못한걸까,,,,,,,,
//img.addEventListener("load", drawImage(animalArray));
window.onload = function()  {
    //rect();
    drawAnimal();
}


canvas.addEventListener( "mousemove", mousemove );
canvas.addEventListener( "mousedown", mousedown );
canvas.addEventListener( "mouseup", mouseup );

// 마우스 버튼 클릭 이벤트 핸들러
function mousedown(e) {
   // console.log(e);
   
    startX = e.clientX;
    startY = e.clientY;
    
    //어떤 animal이 선택되었는지 for문 돌면서 확인
    for ( var i = 0; i < animalArray.length; i++ ){

        var obj = animalArray[i];

        if ( (startX >= obj.x && startX <= obj.x+obj.width) &&
             (startY >= obj.y && startY <= obj.y+obj.height) 
        ){
            _state = 1;     //상태 변화
            _choiceObjIndex = i; // 이미지 선택
            break;
        }

    }
  }

 

  // 마우스 이동 이벤트 핸들러
  // drag 중이면 박스를 이동한다.
  function mousemove(e) {
    //_state가 클릭된 상태이면
    if ( _state == 1 ){
        animalArray[_choiceObjIndex].x = e.clientX-animalArray[_choiceObjIndex].width/2;
        animalArray[_choiceObjIndex].y = e.clientY- animalArray[_choiceObjIndex].height/2;
        //위치를 바꿔주고 drawAninal로 다시 그려준다.
        drawAnimal();
    }

    

  }

 

  // 마우스 버튼 클릭 해제 이벤트 핸들러
  // drag 중이면 박스의 최종 위치에 그려준다.
  function mouseup(e) {
   
    console.log(e);
    //클릭된 상태가 _state =1 이었으니 클릭된 상태 변화 
    if ( _state == 1 ){
        _state = 0;
        
    }
    
    //만약에 놓은 위치가 박스 안이면 박스안에서 예쁘게 정렬하고 싶음..

    if(e.clientX > 20 && e.clientX <800 && e.clientY >200 && e.clientY <400 ) {
        if( animalArray[_choiceObjIndex].state == 0) {
            ++_imageInBox;
        }
        animalArray[_choiceObjIndex].state = 1;
        console.log(animalArray[_choiceObjIndex].name + '' +
        animalArray[_choiceObjIndex].state);
        
    }  else {
        if( animalArray[_choiceObjIndex].state == 1) {
            --_imageInBox;
        }
        animalArray[_choiceObjIndex].state = 0;
        console.log(animalArray[_choiceObjIndex].name + '' +
        animalArray[_choiceObjIndex].state);
        
    }
   
    for ( var i = 0; i < animalArray.length; i++ ){
        if( _imageInBox == 1) {

        }
    }

    //원래 밖에 있던 이미지가 선택되고, 박스안에 들어가있던게 없으면
    //(방금 박스안에 이미지 1개 더해졌으면) 첫번째 이미지의 위치를 고정함
    if(_imageInBox == 1 && animalArray[_choiceObjIndex].state==1 ) {
        animalArray[_choiceObjIndex].x = 120;
        animalArray[_choiceObjIndex].y = 250;
        drawAnimal();
    }

    

  }
