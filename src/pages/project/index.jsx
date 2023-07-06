import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {  meta } from "../../content_option";
import { useParams } from 'react-router-dom';

export const ProjectPage = () => {
    const {id} = useParams();
    console.log(id, 'here')
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Project </title>
                    <meta name="description" content={"HERE"} />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4"> Project </h1>{" "}
                    </Col>
                </Row>
                <div className="mb-5 po_items_ho">

                </div>
            </Container>
        </HelmetProvider>
    );
};
