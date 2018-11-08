import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Logo from './logo';
import SectionTitle from './section-title';
import Form from '../form';
import Introduction from '../introduction';
import Print from '../print';
import Finish from '../finish';
import './index.scss';

const RenderIntroduction = () => <Introduction />;
const RenderForm = () => <Form />;
const RenderPrint = () => <Print />;
const RenderFinish = () => <Finish />;

class SessionProgress extends Component {
  render() {
    return (
      <Router>
        <div className="session-progress">
          <Logo className="session-progress__logo"/>

          <div className="session-progress__section-titles">
            <Link className="session-progress__link" to="/">
              <SectionTitle title="Introduction" />
            </Link>
            <Link className="session-progress__link" to="/form">
              <SectionTitle title="Form" />
            </Link>
            <Link className="session-progress__link" to="/print">
              <SectionTitle title="Print" />
            </Link>
            <Link className="session-progress__link" to="/finish">
              <SectionTitle title="Finish" />
            </Link>
          </div>

          <Route path="/" exact component={RenderIntroduction} />
        <Route path="/form/" component={RenderForm} />
          <Route path="/print/" component={RenderPrint} />
          <Route path="/finish/" component={RenderFinish} />
        </div>
      </Router>
    );
  }
}

export default SessionProgress;
