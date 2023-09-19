// ProjectPage.js

import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import { useParams } from 'react-router-dom';
import { projects } from "../../content_option";

export const ProjectPage = () => {
    const { id } = useParams();
    const project = projects[id];

    if (!project) {
        return <div>Project not found</div>;
    }

    const renderMain = () => {
        const { img, title, years, desc, imageAlign } = project.main;

        const isImageFirst = imageAlign === 'left';
        const orderStyle = isImageFirst ? { order: 1 } : { order: -1 };

        return (
            <div className={'main'}>
                {img && imageAlign === 'left' ? (
                        <div className={'main-image-placeholder'} style={{ ...orderStyle }}>
                            <img src={img} alt="Project Main" />
                        </div>
                ): (
                    <div className={'main-image'}></div>
                )}
                <div className="main-content" style={{ ...orderStyle }}>
                    <div className="text-content">
                        <h2>{title}</h2>
                        <p className="main-years">{years}</p>
                        <p className="main-desc">{desc}</p>
                    </div>
                </div>
                {img && imageAlign === 'right' ? (
                    <div className={'main-image'} style={{ ...orderStyle }}>
                        <img src={img} alt="Project Main" />
                    </div>
                ): (<div className={'main-image-placeholder'}></div>)}
            </div>
        );
    };

    const renderArt = () => {
        return project.art.map((item, index) => {
            switch (item.type) {
                case 'singleImage':
                    return (
                        <div key={index} className={`single-image ${item.imgAlign}`}>
                            <img src={item.img} alt={`Art ${index}`} />
                            <div className="text-content">
                                <h2>{item.title}</h2>
                                <p>{item.year}</p>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    );

                case 'gallery':
                    return (
                        <div key={index} className="gallery">
                            {item.images.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <img src={image.img} alt={`Art ${index} - Image ${imageIndex}`} />
                                    <div className="gallery-text">
                                        {image.title && <p>{image.title}</p>}
                                        {image.desc && <p>{image.desc}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );

                case 'text':
                    return item.textAlign === 'left'? (
                                <div key={index} className={'text'}>
                                <div className="text-content">
                                    <p>{item.text}</p>
                                </div>
                                {item.img && <img src={item.img} alt={`Art ${index} Image`} />}
                                </div>
                            ): (
                                <div key={index} className={'text'}>
                                    {item.img && <img src={item.img} alt={`Art ${index} Image`} />}
                                    <div className="text-content">
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            )

                default:
                    return null;
            }
        });
    };

    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{project.main.title}</title>
                    <meta name="description" content={project.main.desc} />
                </Helmet>
                <Row className="mb-5 mt-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">Project: {project.main.title}</h1>
                    </Col>
                </Row>
                {renderMain()}
                {renderArt()}
            </Container>
        </HelmetProvider>
    );
};
