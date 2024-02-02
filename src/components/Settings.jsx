import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Settings = () => (
  <div className="bg-white text-black px-2 px-sm-3 px-md-4 px-xl-5 flex-grow-1 py-5">
    <Container id="settings" fluid>
      <Row>
        <Col>
          <h1 className="m-0 fw-semibold">Account</h1>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} md={4} className="mb-4 m-md-0">
          <h4 className="text-secondary">MEMBERSHIP & BILLING</h4>
          <button type="button" className="btn-membership">
            Cancel Membership
          </button>
        </Col>
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between flex-column flex-sm-row">
            <p className="fw-semibold">student@strive.school</p>
            <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
              Change account email
            </span>
          </div>
          <div className="d-flex justify-content-between flex-column flex-sm-row">
            <p className="text-secondary">Password: *********</p>
            <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
              Change password
            </span>
          </div>
          <div className="d-flex justify-content-between flex-column flex-sm-row">
            <p className="text-secondary">Phone: (+39)345 1234567</p>
            <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
              Change phone number
            </span>
          </div>
          <hr />
          <div className="d-flex justify-content-between flex-column flex-sm-row">
            <p className="fw-semibold">
              <i className="bi bi-paypal me-2"></i>
              <span className="fst-italic me-2">Paypal</span>
              admin@strive.school
            </p>
            <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
              Update payment info
            </span>
          </div>
          <div className="d-flex justify-content-end">
            <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
              Billing details
            </span>
          </div>
          <hr />
          <div className="d-flex justify-content-end">
            <span className="text-primary link-underline link-underline-opacity-0 mb-2">
              Redeem gift card or promo code
            </span>
          </div>
          <div className="d-flex justify-content-end">
            <span className="text-primary link-underline link-underline-opacity-0 mb-3">
              Where to buy gift cards
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} md={4} className="mb-4 m-md-0">
          <h4 className="text-secondary">PLAN DETAILS</h4>
        </Col>
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between flex-column flex-sm-row">
            <p className="fw-semibold">Premium</p>
            <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
              Change plan
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} md={4} className="mb-4 m-md-0">
          <h4 className="text-secondary">SETTINGS</h4>
        </Col>
        <Col xs={12} md={8}>
          <div className="d-flex flex-column">
            <span className="text-primary link-underline link-underline-opacity-0 mb-2">
              Parental Controls
            </span>
            <span className="text-primary link-underline link-underline-opacity-0 mb-2">
              Test participation
            </span>
            <span className="text-primary link-underline link-underline-opacity-0 mb-2">
              Manage download devices
            </span>
            <span className="text-primary link-underline link-underline-opacity-0 mb-2">
              Activate a device
            </span>
            <span className="text-primary link-underline link-underline-opacity-0 mb-2">
              Recent device streaming activity
            </span>
            <span className="text-primary link-underline link-underline-opacity-0 mb-3">
              Sign out of all devices
            </span>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={12} md={4} className="mb-4 m-md-0">
          <h4 className="text-secondary">MY PROFILE</h4>
        </Col>
        <Col xs={12} md={8}>
          <div className="d-flex justify-content-between align-items-center mb-5 mb-md-2">
            <p className="fw-semibold">
              <img
                className="me-2 pointer"
                src="images/avatar.png"
                alt="avatar"
                height="30px"
              />
              Strive student
            </p>
            <div className="d-flex flex-column text-end">
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Manage profiles
              </span>
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Add profile email
              </span>
            </div>
          </div>
          <Row className="gy-2">
            <Col xs={6}>
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Language
              </span>
            </Col>
            <Col xs={6}>
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Viewing activity
              </span>
            </Col>
            <Col xs={6}>
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Playback settings
              </span>
            </Col>
            <Col xs={6}>
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Ratings
              </span>
            </Col>
            <Col xs={6}>
              <span className="text-primary link-underline link-underline-opacity-0 align-self-end align-self-sm-start pointer">
                Subtitle appearance
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Settings
