function Breadcrumb({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('nav');
  this.$target.className = 'BreadCrumb';

  $app.appendChild(this.$target);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render(() => {
    this.$target.innerHTML = `<div class="nav-item">root</div>
        ${this.state.map((node, idx) => {
          `<div class="nav-item"> ${node.name}</div>,`;
        })}`;
  });
}

export default Breadcrumb;
