import React from "react";
import "./styles.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import {
    meta,
} from "../../content_option";
import { ReactTinyLink } from 'react-tiny-link'
import {publications} from "../../content_option";

export const Publications = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Publications | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>
                <div className="container">
                {publications.map(({defaultMedia, url, header, description}, index) =>{
                    return(
                        <div key={`${index}${header}`} className="col p-3">
                        <ReactTinyLink
                            cardSize="large"
                            width="100vw"
                            showGraphic={true}
                            defaultMedia={defaultMedia}
                            maxLine={2}
                            minLine={1}
                            url={url}
                            header={header}
                            description={description}
                        />
                        </div>
                    )
                })}
                </div>
            </Container>
        </HelmetProvider>
    );
};
