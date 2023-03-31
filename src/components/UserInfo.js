const UserInfo = () => {
  return (
    <main>
      <div className="main-content">
        <div className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center admin-photo">
          <span className="mask bg-gradient-default opacity-8"></span>

          <div className="container-fluid d-flex align-items-center">
            <div className="row">
              <div className="col-lg-7 col-md-10 js-name">
                <p className="text-white mt-0 mb-5">
                  This is your profile page. You can see your info here and edit
                  your profile
                </p>
                <p href="" className="btn btn-info">
                  Edit profile
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt--7 container-js">
          <div className="row">
            <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
              <div className="card card-profile shadow">
                <div className="row justify-content-center">
                  <div className="col-lg-3 order-lg-2">
                    <div className="card-profile-image">
                      <img
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        className="rounded-circle"
                      />
                    </div>
                  </div>
                </div>
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                <div className="card-body pt-0 pt-md-4">
                  <div className="row">
                    <div className="col">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5"></div>
                    </div>
                  </div>
                  <div className="text-center js-name2"></div>
                  <label for="images" className="drop-container">
                    <span className="drop-title">Drop files here</span>
                    or
                    <input
                      type="file"
                      accept="image/png, image/gif, image/jpeg"
                      id="images"
                      class="input-img"
                      required
                    />
                  </label>
                  <button className="admin__submit__btn">Delete user</button>
                </div>
              </div>
            </div>
            <div className="col-xl-8 order-xl-1">
              <div className="card bg-secondary shadow">
                <div class="card-header bg-white border-0">
                  <div className="row align-items-center">
                    <div className="col-8">
                      <h3 className="mb-0">My account</h3>
                    </div>
                    <div className="col-4 text-right">
                      <a href="#!" className="btn btn-sm btn-primary">
                        Settings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <form className="js-form">
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <div className="row">
                        <div class="col-lg-6">
                          <div className="form-group focused js-username"></div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group js-email">
                            <label
                              className="form-control-label"
                              for="input-email "
                            >
                              Email address
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group focused js-firstname">
                            <label
                              className="form-control-label"
                              for="input-first-name"
                            >
                              First name
                            </label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group focused js-lastname">
                            <label
                              className="form-control-label"
                              for="input-last-name"
                            >
                              Last name
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />

                    <h6 className="heading-small text-muted mb-4">
                      Contact information
                    </h6>
                    <div className="pl-lg-4 js-contact"></div>
                    <button className="admin__submit__btn" type="submit">
                      SUBMIT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default UserInfo;
