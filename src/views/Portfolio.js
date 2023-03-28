import AbstractView from './AbstractView';
export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Main');
    const body = document.querySelector('body');
    console.log(body);
    body.insertAdjacentElement(
      'beforeend',
      ' <script src="./js/portfolio.js" type="module"></script>'
    );
  }
  async getHtml() {
    return `<main>
        <!-- PORTFOLIO -->
        <section class="portfolio section">
          <div class="container">
            <h1 hidden>Portfolio</h1>
            <ul class="list buttons">
              <li>
                <button type="button" class="buttons__item buttons__item--accent">
                  All
                </button>
              </li>
              <li>
                <button type="button" class="buttons__item">Women</button>
              </li>
              <li>
                <button type="button" class="buttons__item">Men</button>
              </li>
            </ul>
            <ul class="list portfolio__list">
            </ul>
          </div>
        </section>
      </main>`;
  }
}
