import AbstractView from "./AbstractView";
export default class extends AbstractView{
    constructor(params) {
        super(params);
        this.setTitle("Main");
    }
    async getHtml() {
        return `

   
        <main>
          <!-- HERO -->
          <section class="hero section-padding">
            <div class="container">
              <h1 class="hero__title">
               Shop of brand <br />
                clothes
              </h1>
              <button type="button" class="hero__button" data-modal-open>
                Order a call
              </button>
            </div>
          </section>
    
          <!--Текстові блоки -->
          <section class="features section">
            <div class="container">
              <h2 hidden>Features</h2>
              <ul class="list features__list">
                <li class="features__item">
                  <div class="features__photo">
                    <svg class="features__svg">
                      <use href="./images/sprite.svg#antenna"></use>
                    </svg>
                  </div>
                  <h3 class="features__header">Attention to details</h3>
                  <p class="features__text">
                    We are very attentive to customers
                  </p>
                </li>
                <li class="features__item">
                  <div class="features__photo">
                    <svg class="features__svg">
                      <use href="./images/sprite.svg#clock"></use>
                    </svg>
                  </div>
                  <h3 class="features__header">High quality</h3>
                  <p class="features__text">
                   Our clothes is very good.
                  </p>
                </li>
                <li class="features__item">
                  <div class="features__photo">
                    <svg class="features__svg">
                      <use href="./images/sprite.svg#diagram"></use>
                    </svg>
                  </div>
                  <h3 class="features__header">Big variety</h3>
                  <p class="features__text">
                    We have all what you want
                   
                  </p>
                </li>
                <li class="features__item">
                  <div class="features__photo">
                    <svg class="features__svg">
                      <use href="./images/sprite.svg#astronaut"></use>
                    </svg>
                  </div>
                  <h3 class="features__header">Fast delivery  </h3>
                  <p class="features__text">
                    We deliver the parcel to you in one day
                  </p>
                </li>
              </ul>
            </div>
          </section>
          <!-- Чем мы занимаемся -->
          <section class="occupation section-bottom">
            <div class="container">
              <h2 class="occupation__header header">What clothes you have?</h2>
              <ul class="list occupation__list">
                <li class="occupation__item">
                  <img
                   
                    src="./images/casual.webp"
                    width="370"
                  />
                  <p class="occupation__text">Casual clothes</p>
                </li>
                <li class="occupation__item">
                  <img
                   
                    src="./images/sport.webp"
                    width="370"
                  />
                  <p class="occupation__text">Sport clothes</p>
                </li>
                <li class="occupation__item">
                  <img
                    src="./images/festive.jpeg"
                    width="370"
                  />
                  <p class="occupation__text">Festive clothes</p>
                </li>
              </ul>
            </div>
          </section>
          <!-- Команда -->
          <section class="team section">
            <div class="container">
              <h2 class="header team__header">Our founders</h2>
              <ul class="list team__list">
                <li class="team__icon">
                  <img
                    srcset="./images/people1.jpg 1x, ./images/people1@2x.jpg 2x"
                    src="./images/people1.jpg"
                    alt="Игорь Демьяненко Product Designer"
                    class="team__img"
                  />
    
                  <div class="team__content">
                    <h3 class="team__name">Ihor Clas</h3>
                    <p lang="en" class="team__text">Product Designer</p>
    
                    <ul class="team-soc">
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="team__icon">
                  <img
                    srcset="./images/people2.jpg 1x, ./images/people2@2x.jpg 2x"
                    src="./images/people2.jpg"
                    alt="Ольга Репина Frontend Developer"
                    class="team__img"
                  />
                  <div class="team__content">
                    <h3 class="team__name">Olga Rulkina</h3>
                    <p lang="en" class="team__text">Manager</p>
                    <ul class="team-soc">
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="team__icon">
                  <img
                    srcset="./images/people3.jpg 1x, ./images/people3@2x.jpg 2x"
                    src="./images/people3.jpg"
                    alt="Николай Тарасов Marketing"
                    class="team__img"
                  />
                  <div class="team__content">
                    <h3 class="team__name">Nikola Wait</h3>
                    <p lang="en" class="team__text">Marketing</p>
                    <ul class="team-soc">
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="team__icon">
                  <img
                    srcset="./images/people4.jpg 1x, ./images/people4@2x.jpg 2x"
                    src="./images/people4.jpg"
                    alt=" Михаил ЕрмаковUI Designer"
                    class="team__img"
                  />
                  <div class="team__content">
                    <h3 class="team__name">Michail</h3>
                    <p lang="en" class="team__text">UI Designer</p>
                    <ul class="team-soc">
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#instagram"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#twitter"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#facebook"></use>
                          </svg>
                        </a>
                      </li>
                      <li class="list team-soc__item">
                        <a href="" class="team-soc__link link">
                          <svg class="team-soc__svg">
                            <use href="./images/sprite.svg#linkedin"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <!-- CLIENTS -->
          <section class="clients section">
            <div class="container">
              <h2 class="clients__title">Our partners</h2>
              <ul class="clients__list">
                <li class="clients__item list">
                  <a href="" class="clients__link link">
                    <svg class="clients__svg">
                      <use href="./images/sprite.svg#group-5"></use>
                    </svg>
                  </a>
                </li>
    
                <li class="clients__item list">
                  <a href="" class="clients__link link">
                    <svg class="clients__svg">
                      <use href="./images/sprite.svg#group-1"></use>
                    </svg>
                  </a>
                </li>
    
                <li class="clients__item list">
                  <a href="" class="clients__link link">
                    <svg class="clients__svg">
                      <use href="./images/sprite.svg#group-4"></use>
                    </svg>
                  </a>
                </li>
    
                <li class="clients__item list">
                  <a href="" class="clients__link link">
                    <svg class="clients__svg">
                      <use href="./images/sprite.svg#group-2"></use>
                    </svg>
                  </a>
                </li>
    
                <li class="clients__item list">
                  <a href="" class="clients__link link">
                    <svg class="clients__svg">
                      <use href="./images/sprite.svg#group-3"></use>
                    </svg>
                  </a>
                </li>
    
                <li class="clients__item list">
                  <a href="" class="clients__link link">
                    <svg class="clients__svg">
                      <use href="./images/sprite.svg#group-6"></use>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </main>
        
        <!-- MODAL -->
        <div class="backdrop is-hidden" data-modal>
          <div class="modal">
            <button class="backdrop__button" type="button" data-modal-close>
              <svg class="backdrop__close">
                <use href="./images/sprite.svg#cross"></use>
              </svg>
            </button>
    
            <form class="form">
              <b class="form__header">Leave your data and we will call you</b>
              <div class="form__field">
                <label for="name" class="form__label">Name</label>
                <input name="name" type="text" id="name" class="form__input" />
                <svg class="form__icon form__icon--3">
                  <use href="./images/sprite.svg#form-3"></use>
                </svg>
              </div>
    
              <div class="form__field">
                <label for="tel" class="form__label">Phone</label>
                <input name="tel" type="tel" id="tel" class="form__input" />
                <svg class="form__icon form__icon--1">
                  <use href="./images/sprite.svg#form-1"></use>
                </svg>
              </div>
    
              <div class="form__field">
                <label for="email" class="form__label">Mail</label>
                <input name="email" type="email" id="email" class="form__input" />
                <svg class="form__icon form__icon--2">
                  <use href="./images/sprite.svg#form-2"></use>
                </svg>
              </div>
    
              <div class="form__field form__field--big">
                <label for="comments" class="comments">Comments</label>
                <textarea
                  name="comments"
                  class="comments__input"
                  id="comments"
                  placeholder="Input text"
                ></textarea>
              </div>
    
              <label for="policy" class="footer__policy">
                <input
                  type="checkbox"
                  name="policy"
                  id="policy"
                  class="policy-checkbox"
                />
                <span class="policy-icon"></span>
    
                <b class="policy-text">I agree with the newsletter and accept</b>
                <a href="" class="footer__policy--accent"
                  >Agreement conditions</a
                ></label
              >
    
              <button type="submit" class="modal__button">Send</button>
            </form>
          </div>
        </div>
     
    `;
    }
}