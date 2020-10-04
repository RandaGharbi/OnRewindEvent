import { withRouter } from 'next/router';

import Header from './header';
import Meta from './meta';
import '../../styles/style.scss';
import Footer from './footer';
import { EventListProvider } from '../context';

function layout({ children }) {
  return (
    <EventListProvider>
      <Meta />
      <Header />
      <main id="main" role="main">
        {children}
      </main>
      <Footer />
    </EventListProvider>
  );
}

export default withRouter(layout);
