import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import TotalReviews from './components/totalReviews.jsx';
import ReviewCriteria from './components/reviewCriteria.jsx';
import IndivReviews from './components/indivReviews.jsx';

import styled from 'styled-components';
import faker from 'faker';

const Wrapper = styled.div`
  margin: auto
  width: 600px
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif
`;

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      criteria: {}
    };
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3004/totalReviews',
      method: 'GET',
      data: { 'id': faker.random.number({min: 1, max: 100}) },
      success: (reviewData) => {
        this.setState({
          reviews: reviewData.reviews,
          criteria: reviewData.criteria
        });
      },
      error: (err) => { console.log('get reviews error: ', err); }
    });
  }

  render() {
    return (
      <Wrapper>
        <TotalReviews reviews={this.state.reviews} criteria={this.state.criteria}/>
        <ReviewCriteria reviews={this.state.reviews} criteria={this.state.criteria}/>
        <IndivReviews reviews={this.state.reviews} criteria={this.state.criteria}/>
      </Wrapper>
    );
  }
}

ReactDOM.render(<Review />, document.getElementById('reviews'));