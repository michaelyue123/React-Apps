import React from 'react';

class SearchBar extends React.Component {
  state = { term: ''};

// prevent page from automatically refreshing after submission
  onFormSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  // Event handler
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
            type="text" 
            value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} 
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;