import React, { Component } from 'react';

class App extends Component {
  render () {
    return (
      <>
        <div className={["d-flex flex-row w-100"]}>
          <div className={["bg-primary w-10"]}>
            sdsdsdsd
          </div>
          <div className={["bg-success w-70"]}>
            <i class="fas fa-address-book"></i>
            <h1 style={{ "fontFamily": "Poppins-semibold" }}>bonjour</h1>
          </div>
        </div>
      </>
    );
  }
}

export default App;