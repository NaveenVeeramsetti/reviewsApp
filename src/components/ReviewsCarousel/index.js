// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewDetails: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewDetails} = this.state
    const {reviewsList} = this.props

    if (activeReviewDetails < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeReviewDetails: prevState.activeReviewDetails + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewDetails} = this.state

    if (activeReviewDetails > 0) {
      this.setState(prevState => ({
        activeReviewDetails: prevState.activeReviewDetails - 1,
      }))
    }
  }

  renderReviewApp = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="review-render-container">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="review-description">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReviewDetails} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[activeReviewDetails]
    return (
      <div className="bg-container">
        <div className="review-container">
          <h1 className="heading">Reviews</h1>
          <div className="comments-container">
            <button
              data-testid="leftArrow"
              className="arrow-button"
              type="button"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            {this.renderReviewApp(currentReviewDetails)}
            <button
              data-testid="rightArrow"
              className="arrow-button"
              type="button"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
