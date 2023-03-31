const Buy=()=>{
    return(<>
      <main>
          <div className="container-fluid mt--7 container-js">
            <div className="buy-item  "></div>
            <div className="row">
              
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div className="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">Add new item</h3>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form className="add__form">
                    <h6 className="heading-small text-muted mb-4">
                      {' '}
                      information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-name"
                            >
                              Name
                            </label>
                            <input
                              required
                              type="text"
                              id="input-name"
                              className="form-control form-control-alternative"
                              placeholder="Username"
                              value=""
                              name="name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              className="form-control-label"
                              for="input-email"
                            >
                              Description
                            </label>
                            <input
                              required
                              type="text"
                              id="input-username"
                              className="form-control form-control-alternative"
                              placeholder="Username"
                              value=""
                              name="description"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-first-name"
                            >
                              Quantity
                            </label>
                            <input
                              required
                              type="text"
                              id="input-first-name"
                              className="form-control form-control-alternative"
                              name="quantity"
                              placeholder="First name"
                              value=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused">
                            <label
                              className="form-control-label"
                              for="input-last-name"
                            >
                              Price
                            </label>
                            <input
                              required
                              type="text"
                              id="input-last-name"
                              className="form-control form-control-alternative"
                              name="price"
                              placeholder="Last name"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />

                    <button type="submit" className="admin__submit__btn">
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>
        </main>
        </>)
}
export default Buy