import React from "react";
import "./styles.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    meta,
    exhibitions,
} from "../../content_option";
import { ReactTinyLink } from 'react-tiny-link'

export const Publications = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Publications | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <ReactTinyLink
                cardSize="medium"
                showGraphic={true}
                maxLine={2}
                minLine={1}
                url="https://panel-magazine.com/product/issue-9/"
                header={"My Work in Vogue"}
                description={"Bla bla blaBla bla blaBla bla blaBla bla blaBla bla blaBla bla bla"}
            />
            </Container>
        </HelmetProvider>
    );
};
