import "../styles/globals.css";
import App from "next/app";
import Router from "next/router";
import { initGA, logPageView } from "../util/analytics";

export default class EmbedClass extends App {
    componentDidMount(){
        initGA();
        logPageView();
        Router.events.on("routeChangeComplete", logPageView);
        
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />;
    }
}