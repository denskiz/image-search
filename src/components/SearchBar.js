import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Image Search</a>
          <form onSubmit={this.onFormSubmit} className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search photos of..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button
              class="btn btn-outline-success"
              type="submit"
              onClick={this.onFormSubmit}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
