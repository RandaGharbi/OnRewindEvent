import App from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import Layout from 'shared/layout';
import withApollo from 'lib/withApollo';
import '../styles/style.scss';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
