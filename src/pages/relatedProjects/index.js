import React from "react";
import "./styles.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container, Row, Col} from "react-bootstrap";
import {
    relatedProjects,
} from "../../content_option";
import { ReactTinyLink } from 'react-tiny-link'

export const RelatedProjects = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title> +related projects </title>
                    <meta name="description" content={"related projects"}/>
                </Helmet>
                <div className="sec_sp">
                    <div className="img-content">
                        <img src={relatedProjects.section1.img}/>
                    </div>
                    <div className="text-content">
                        <h4>{relatedProjects.section1.title}</h4>
                        <p>{relatedProjects.section1.text}</p>
                        <ReactTinyLink
                            cardSize="small"
                            width="100vw"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            header={relatedProjects.section1.title}
                            url={relatedProjects.section1.link}
                            description={'Link to instagram'}
                            defaultMedia={relatedProjects.section1.defaultMedia}
                        />
                    </div>
                </div>
                <div className="sec_sp">
                    <div className="img-content">
                        <img src={relatedProjects.section2.img}/>
                    </div>
                    <div className="text-content">
                        <h4>{relatedProjects.section2.title}</h4>
                        <p>{relatedProjects.section2.text}</p>
                        <ReactTinyLink
                            cardSize="small"
                            width="100vw"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            header={relatedProjects.section2.title}
                            url={relatedProjects.section2.link}
                            description={'Link to podcast'}
                            defaultMedia={relatedProjects.section2.defaultMedia}
                        />
                    </div>
                </div>
                <div className="sec_sp">
                    <div className="img-content">
                        <img src={relatedProjects.section3.img}/>
                    </div>
                    <div className="text-content">
                        <h4>{relatedProjects.section3.title}</h4>
                        <p>{relatedProjects.section3.text}</p>
                        <ReactTinyLink
                            cardSize="small"
                            width="100vw"
                            showGraphic={true}
                            maxLine={2}
                            minLine={1}
                            header={relatedProjects.section3.title}
                            url={relatedProjects.section3.link}
                            description={'Link to telegram'}
                            defaultMedia={relatedProjects.section3.defaultMedia}
                        />
                    </div>
                </div>
            </Container>
        </HelmetProvider>
    );
};
