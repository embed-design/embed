import "../styles/globals.css";
import App from "next/app";

export default class EmbedClass extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}