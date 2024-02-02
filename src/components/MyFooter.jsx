import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MyFooter = () => (
  <>
    <Row className="justify-content-center mt-5">
      <Col xs={6}>
        <Row>
          <Col className="mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>{' '}
            <i className="bi bi-instagram footer-icon me-2"></i>{' '}
            <i className="bi bi-twitter-x footer-icon me-2"></i>{' '}
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4}>
          <Col>
            <Row>
              <Col className="footer-links">
                <button>Audio and Subtitles</button>
                <button>Media Center</button>
                <button>Privacy</button>
                <button>Contact us</button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="footer-links">
                <button>Audio Description</button>
                <button>Investor Relations</button>
                <button>Legal Notices</button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="footer-links">
                <button>Help Center</button>
                <button>Jobs</button>
                <button>Cookie Preferences</button>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col className="footer-links">
                <button>Gift Cards</button>
                <button>Terms of Use</button>
                <button>Corporate Information</button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2">
            <button
              type="button"
              className="btn btn-sm footer-button rounded-0 mt-3"
            >
              Service Code
            </button>
          </Col>
        </Row>
        <Row>
          <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
        </Row>
      </Col>
    </Row>
  </>
)

export default MyFooter
