import AbstractView from './AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  //데이터 가져온다음 html 반환하므로 비동기처리
  async getHtml() {
    return `
    
    <h1> Settings </h1>
    <p>
       설정 페이지 
    </p>

    `;
  }
}
