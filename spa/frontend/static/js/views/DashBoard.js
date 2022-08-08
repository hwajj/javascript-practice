import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Dashboard');
  }

  //데이터 가져온다음 html 반환하므로 비동기처리
  async getHtml() {
    return `
    
    <h1>Welcome Back </h1>
    <p>
      <a href="/posts" data-link>View recent posts</a>
    </p>

    `;
  }
}
