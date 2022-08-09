import Breadcrumb from './Breadcrumb';
function App($app) {
  this.state = {
    isRoot: false,
    nodes: [],
    depth: [],
  };

  const breadCrumb = new Breadcrumb({ $app, initialState: this.state.depth });
}

const $app = document.querySelector('.app');

//Breadcrumb

//Nodes
