import { React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LangProvider from 'context/LanguageContext';
import Home from 'routes/Home';
import LookbookJisoo from 'routes/LookbookJisoo';
import LookbookJennie from 'routes/LookbookJennie';
import LookbookLisa from 'routes/LookbookLisa';
import LookbookRose from 'routes/LookbookRose';
import Matching from 'routes/Matching';
import Loading from 'routes/Loading';
import Failure from 'routes/Failure';
import Result from 'routes/Result';
import SharingJisoo from 'routes/SharingJisoo';
import SharingJennie from 'routes/SharingJennie';
import SharingLisa from 'routes/SharingLisa';
import SharingRose from 'routes/SharingRose';
import DevTeam from 'routes/DevTeam';
import FAQ from 'routes/FAQ';
import NotFound from 'routes/NotFound';
import ReactGA from 'react-ga';

const AppRouter = () => {
  useEffect(() => {
    ReactGA.initialize('UA-202537754-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [])

  return (
    <LangProvider>
      <Router>
        <Switch>
          <Route exact path="/blackpink/" component={Home} />
          <Route exact path="/blackpink/lookbook/jennie" component={LookbookJennie} />
          <Route exact path="/blackpink/lookbook/rose" component={LookbookRose} />
          <Route exact path="/blackpink/lookbook/jisoo" component={LookbookJisoo} />
          <Route exact path="/blackpink/lookbook/lisa" component={LookbookLisa} />
          <Route exact path="/blackpink/matching" component={Matching} />
          <Route exact path="/blackpink/matching/loading" component={Loading} />
          <Route exact path="/blackpink/matching/failure" component={Failure} />
          <Route exact path="/blackpink/matching/result" component={Result} />
          <Route exact path="/blackpink/matching/sharing/jisoo" component={SharingJisoo} />
          <Route exact path="/blackpink/matching/sharing/jennie" component={SharingJennie} />
          <Route exact path="/blackpink/matching/sharing/lisa" component={SharingLisa} />
          <Route exact path="/blackpink/matching/sharing/rose" component={SharingRose} />
          <Route exact path="/blackpink/devteam" component={DevTeam} />
          <Route exact path="/blackpink/faq" component={FAQ} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </LangProvider>
  );
};

export default AppRouter;
