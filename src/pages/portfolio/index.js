import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Portfolio = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> Projects | {meta.title} </title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                {dataportfolio.map((data, i) => (
                    <div key={i}>
                        <h4 className="project-header">{data.groupName}</h4>
                        <div className="po_items_ho">
                            {data.projects.map((project, index) => (
                                <div key={index} className="po_item">
                                    <img src={project.img} alt="" />
                                    <div className="content">
                                        <Link to={`/project/${project.link}`}>View Project</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </Container>
        </HelmetProvider>
    );
};
