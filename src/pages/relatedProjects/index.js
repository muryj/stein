import React from "react";
import "./styles.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    relatedProjects,
} from "../../content_option";

function replaceWithBr(str) {
    return str.replace(/\n/g, "<br />")
}

export const RelatedProjects = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> +related projects </title>
                    <meta name="description" content={"related projects"} />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">+related projects</h1>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{relatedProjects.section1.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p>{relatedProjects.section1.content}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{relatedProjects.section2.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p>{relatedProjects.section2.content}</p>
                        </div>
                    </Col>
                </Row>
                <Row className="sec_sp">
                    <Col lg="5">
                        <h3 className="color_sec py-4">{relatedProjects.section3.title}</h3>
                    </Col>
                    <Col lg="7" className="d-flex align-items-center">
                        <div>
                            <p>{relatedProjects.section3.content}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
