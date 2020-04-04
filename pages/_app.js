import React from "react";
import App from "next/app";
import "../assets/css/tailwind.css";

class BBApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default BBApp;
