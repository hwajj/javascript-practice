console.log("hi");
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;

    //class값을 자바스크립트에서 가져오기위해서는 className을 쓴다. class자체가 중요한 표현이라 단독으로 사용못함
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
        console.log(title.className);
    } else {
        title.className = "";
    }
}

function init() {
    addEventListener("click", handleClick);
}
//click이라는 이벤트가 실행될때마다 handleClick함수가 작동한다. 함수 뒤에 ()를 붙이면 이 함수를 당장 실행하라는 의미기때문에 괄호를 쓰지않는다.

init();
