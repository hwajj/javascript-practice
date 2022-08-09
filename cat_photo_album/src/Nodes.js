function Nodes({ $app, initialState, onClick, onBackClick }) {
  this.state = initialState;
  this.onClick = onClick;
  this.onBackClick = onBackClick;

  //Nodes 컴포넌트를 렌더링할 DOM
  this.$target = document.createElement('ul');

  //파라미터로 받은 app에 렌더링
  $app.append(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render(); // setState 안에서 render 호출
  };

  //파라미터 없이 현재 상태 기준으로 렌더링
  this.render = () => {
    this.$target.innerHTML = this.state.nodes.map((node) => {
      `<li>${node.name}</li>`;
    });
  };

  //인스턴스화 이후 바로 render함수 실행
  this.render();
}

export default Nodes;
