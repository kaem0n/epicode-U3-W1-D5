import { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'

import ColorThief from 'colorthief/dist/color-thief.mjs'

class Titles extends Component {
  state = {
    titles: [],
    avgColors: [],
    isLoading: true,
    isError: false,
    errorMsg: '',
  }

  generateContent = () => {
    fetch(this.props.apiUrl + this.props.search.searchTerm)
      .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error(res.status)
        }
      })
      .then((data) => {
        const colors = []
        const titlesToShow = []
        const colorThief = new ColorThief()
        for (let i = 0; i < 6; i++) {
          if (data.Search[i].Type !== 'game') {
            let color
            const img = new Image()
            img.crossOrigin = 'Anonymous'
            img.src = data.Search[i].Poster
            img.onload = () => {
              color = colorThief.getColor(img)
              colors.push(color)
              titlesToShow.push(data.Search[i])
            }
          }
        }
        console.log('colors', colors)
        console.log('titlesToShow', titlesToShow)
        setTimeout(() => {
          this.setState({
            titles: titlesToShow,
            avgColors: colors,
            isLoading: false,
          })
        }, 50)
      })
      .catch((err) => {
        this.setState({ isLoading: false, isError: true, errorMsg: `${err}` })
      })
  }

  componentDidMount() {
    this.generateContent()
  }

  render() {
    return (
      <>
        {this.state.isError ? (
          <h4>Categoria non trovata</h4>
        ) : (
          !this.state.isLoading && <h4>{this.props.search.title}</h4>
        )}
        <Row xs={1} sm={2} lg={3} xl={6} className="mb-4 g-3">
          {this.state.isLoading && (
            <div className="w-100 d-flex justify-content-center spinner-container">
              <Spinner animation="border" variant="light" />
            </div>
          )}

          {this.state.isError ? (
            <h1 className="flex-grow-1 text-center text-danger mb-5">
              {this.state.errorMsg}
            </h1>
          ) : (
            this.state.avgColors.length > 0 &&
            this.state.titles.map((title, i) => {
              return (
                <Col key={title.imdbID} className="thumbnail">
                  <div
                    title={`${title.Title} (${title.Year})`}
                    style={{
                      backgroundColor: `rgb(${this.state.avgColors[i][0]}, ${this.state.avgColors[i][1]}, ${this.state.avgColors[i][2]})`,
                    }}
                  >
                    <img src={title.Poster} alt={title.imdbID} />
                  </div>
                </Col>
              )
            })
          )}
        </Row>
      </>
    )
  }
}

export default Titles
