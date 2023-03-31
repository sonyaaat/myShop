const Portfolio = () => {
  return (
    <>
      <main>
        <section className="portfolio section">
          <div className="container">
            <h1 hidden>Portfolio</h1>

            <ul className="list portfolio__list">
              <li>
                <button
                  type="button"
                  className="buttons__item buttons__item--accent"
                >
                  All
                </button>
              </li>
              <li>
                <button type="button" className="buttons__item">
                  Women
                </button>
              </li>
              <li>
                <button type="button" className="buttons__item">
                  Men
                </button>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};
export default Portfolio;
