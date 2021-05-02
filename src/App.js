import './sass/main.scss'

import logoWhite from './assets/img/logo-white.png';
import nat1 from './assets/img/nat-1-large.jpg';
import nat2 from './assets/img/nat-2-large.jpg';
import nat3 from './assets/img/nat-3-large.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
            <div className="header__logo-box">
                <img src={logoWhite} alt="Logo" className="header__logo" />
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life begins</span>
                </h1>
                <button className="btn btn--white btn--animated">Discover our tours</button>
            </div>
        </header>
        <main>
          <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
              <h2 className="heading-secondary">
                Exciting tours for adventours people
              </h2>
            </div>
            <div className="row">
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to love with nature</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum animi voluptates ad accusantium quis enim soluta, maxime facere libero ullam debitis ipsam earum corporis omnis expedita veritatis vitae repellat nemo.
                </p>
              </div>
              <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you have never before.</h3>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum animi voluptates ad accusantium quis enim soluta, maxime facere libero ullam debitis ipsam earum corporis omnis expedita veritatis vitae repellat nemo.
                </p>
                <button  className="btn-text">Learn more &rarr;</button>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img src={nat1} alt="Photo_1" className="composition__photo composition__photo--p1"/>
                  <img src={nat2} alt="Photo_2" className="composition__photo composition__photo--p2"/>
                  <img src={nat3} alt="Photo_3" className="composition__photo composition__photo--p3"/>
              </div>
              </div>
          </div>
          </section>
        </main>
        {/*<section className="grid-test">
          <div className="row">
            <div className="col-1-of-2">
              col 1 of 2
            </div>
            <div className="col-1-of-2">
              col 1 of 2
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              col 1 of 3
            </div>
            <div className="col-1-of-3">
              col 1 of 3
            </div>
            <div className="col-1-of-3">
              col 1 of 3
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              col 1 of 3
            </div>
            <div className="col-2-of-3">
              col 2 of 3
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              col 1 of 4
            </div>
            <div className="col-1-of-4">
              col 1 of 4
            </div>
            <div className="col-1-of-4">
              col 1 of 4
            </div>
            <div className="col-1-of-4">
              col 1 of 4
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              col 1 of 4
            </div>
            <div className="col-1-of-4">
              col 1 of 4
            </div>
            <div className="col-2-of-4">
              col 2 of 4
            </div>
          </div>
          <div className="row">
            <div className="col-1-of-4">
              col 1 of 4
            </div>
            <div className="col-3-of-4">
              col 3 of 4
            </div>
          </div>
    </section> */}
    </div>
  );
}

export default App;
