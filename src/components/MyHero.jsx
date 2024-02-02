import Dropdown from 'react-bootstrap/Dropdown'

const MyHero = () => (
  <div className="d-flex justify-content-between">
    <div className="d-flex">
      <h2 className="mb-4">TV Shows</h2>
      <Dropdown className="ms-4 mt-1">
        <Dropdown.Toggle
          variant="secondary"
          size="sm"
          className="rounded-0"
          style={{ backgroundColor: '#221f1f' }}
        >
          Genres{' '}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>Comedy</Dropdown.Item>
          <Dropdown.Item>Drama</Dropdown.Item>
          <Dropdown.Item>Thriller</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
    <div className="text-white">
      <i className="bi bi-grid icons fs-5 mx-3"></i>
      <i className="bi bi-grid-3x3 icons fs-5 mx-3"></i>
    </div>
  </div>
)

export default MyHero
