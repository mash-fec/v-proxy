import React from 'react';
import ReactDOM from 'react-dom';
import SingleHome from './components/SingleHome.jsx';

class MoreHomes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moreHomes: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/morehomes')
      .then(response => response.json()).then((myJson) => {
        this.setState({ moreHomes: myJson });
      });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.moreHomes.map(eachHome => (
            <SingleHome
              key={eachHome._id + eachHome.city}
              id={eachHome._id}
              pictureUrl={eachHome.pictureUrl}
              typeOfHome={eachHome.typeOfHome}
              city={eachHome.city}
              description={eachHome.description}
              price={eachHome.price}
              rating={eachHome.rating}
              reviews={eachHome.reviews}
            />
          ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MoreHomes />, document.getElementById('moreHomes'));
