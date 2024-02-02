import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import MyFooter from './MyFooter'

const Profile = () => (
  <>
    <div className="bg-black">
      <Card id="profile" className="text-white bg-black">
        <Card.Body>
          <form>
            <h1 className="card-title display-4 fw-semibold">Edit Profile</h1>
            <hr />
            <div className="d-flex align-items-start">
              <div className="position-relative">
                <div className="pointer">
                  <img src="images/avatar.png" alt="avatar" height="100px" />
                  <span
                    id="edit-icon"
                    className="px-1 bg-black border border-light rounded-circle badge"
                  >
                    <i className="bi bi-pencil-fill"></i>
                  </span>
                </div>
              </div>
              <div className="flex-grow-1 px-3">
                <p className="bg-secondary w-100 px-2 py-1 fw-semibold fs-5">
                  Strive Student
                </p>
                <p className="mb-1 fs-5">Language:</p>
                <select
                  id="language"
                  className="form-select rounded-0 bg-black text-white fw-semibold"
                >
                  <option>English</option>
                  <option>Italiano</option>
                </select>
                <hr />
                <p className="mb-3 fs-5">Maturity Settings:</p>
                <p className="bg-dark w-100 px-2 py-1 fw-semibold d-inline">
                  ALL MATURITY RATINGS
                </p>
                <p className="fs-6 fw-normal p-0 my-2">
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile.
                </p>
                <button
                  type="button"
                  className="btn btn-outline-secondary rounded-0 text-spacing d-flex align-items-center px-3 mb-4"
                >
                  EDIT
                </button>
                <hr />
                <p className="fs-5">Autoplay controls</p>
                <div className="form-check">
                  <input
                    className="form-check-input rounded-0"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    Autoplay next episode in a series on all devices.
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input rounded-0"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck2">
                    Autoplay previews while browsing on all devices
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex bg-black">
              <Button
                type="submit"
                variant="light"
                className="me-3 rounded-0 text-spacing d-flex align-items-center px-3 mb-4 fw-semibold"
              >
                SAVE
              </Button>
              <Button
                type="button"
                variant="outline-secondary"
                className="me-3 rounded-0 text-spacing d-flex align-items-center px-3 mb-4"
              >
                CANCEL
              </Button>
              <Button
                type="button"
                variant="outline-secondary"
                className="me-3 rounded-0 text-spacing d-flex align-items-center px-3 mb-4"
              >
                DELETE PROFILE
              </Button>
            </div>
          </form>
        </Card.Body>
      </Card>
    </div>
    <MyFooter />
  </>
)

export default Profile
