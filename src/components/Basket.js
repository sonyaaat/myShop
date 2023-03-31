const Basket = () => {
  return (
    <>
      <main>
        <section className="section-cart">
          <header className="section-cart__header">
            <div className="container">
              <h1 className="title-1">Basket</h1>
            </div>
          </header>
          <div className="section-cart__body">
            <div className="container">
              <section className="cart">
                <header className="cart-header">
                  <div className="cart-header__title">Name</div>
                  <div className="cart-header__count">Quantity</div>
                  <div className="cart-header__cost">Price</div>
                </header>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Basket;
