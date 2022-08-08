import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts');
  }

  //데이터 가져온다음 html 반환하므로 비동기처리
  async getHtml() {
    return `
    
    <h1> Posts </h1>
    <p>
       포스트 페이지 
    </p>

    `;
  }
}
