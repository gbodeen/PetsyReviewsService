import React from 'react';
import axios from 'axios';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }

    this.getPetReviews = this.getPetReviews.bind(this);
  }

  componentDidMount() {
    this.getPetReviews();
  }

  getPetReviews() {
    axios.get('/reviews/' + this.props.pet_id)
      .then(res => {
        this.setState({
          reviews: res.data
        })
      });
  }

  render() {
    return (
      <>
        {this.state.reviews.map(review => <Review review={review} key={Math.random()} />)}
      </>
    )
  }
}

export default Reviews;