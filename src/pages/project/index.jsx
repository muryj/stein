// ProjectPage.js

import React, {useCallback, useState} from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import {meta} from "../../content_option";
import {useParams} from 'react-router-dom';
import {projects} from "../../content_option";



export const ProjectPage = () => {
    const {projectId} = useParams();
    const project = projects[projectId];

    const [projectsRendered, setProjectsRendered] = useState(false)

    const measuredRef = useCallback(node => {
        console.log(node)
        if (node !== null) {
            setTimeout(()=>{
                setProjectsRendered(true)
            },1200)
        }
    }, []);


    if (!project) {
        return <div>Project not found</div>;
    }


    function renderMain (project) {
        const {img, title, years, desc} = project.main;
        return (
            <div className={'main'}>
                <div className="main-image" ref={measuredRef}>
                    {img && <img src={img} alt="Project Main"/>}
                </div>
                <div className="main-content">
                    <div className="text-content">
                        <h4>{title}</h4>
                        <p className="main-years">{years}</p>
                        <p className="main-desc">{desc}</p>
                    </div>
                </div>
            </div>
        );
    };

    function renderArt (project) {
        return project.art.map((item, index) => {
            switch (item.type) {
                case 'singleImage':
                    return (
                        <div key={index} className="single-image">
                            <div className="single-image-wrapper">
                                <img src={item.img} alt={`Art ${index}`}/>
                            </div>
                            <div className={"single-image-content"}>
                                <div className="text-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.year}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    );

                case 'gallery':
                    return (
                        <div key={index} className="gallery">
                            {item.images.map((image, imageIndex) => (
                                <div key={imageIndex}>
                                    <img src={image.img} alt={`Art ${index} - Image ${imageIndex}`}/>
                                    <div className="gallery-text">
                                        {image.title && <p>{image.title}</p>}
                                        {image.year && <p>{image.year}</p>}
                                        {image.desc && <p>{image.desc}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );

                case 'text':
                    return (
                        <div key={index} className={'text'}>
                            {item.img && <div className="text-image-wrapper">
                                <img src={item.img} alt={`Art ${index} Image`}/>
                            </div>}
                            <div className={"text-content-wrapper"} style={!item.img ? {flex: 1} : {}}>
                                <div className="text-content">
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </div>
                    )

                default:
                    return null;
            }
        });
    };

    function renderSoloProject () {
        return (
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{project.main.title}</title>
                    <meta name="description" content={project.main.desc}/>
                </Helmet>
                {renderMain(project)}
                {renderArt(project)}

            </Container>
        )
    }

    function renderGroupProject () {
        return (
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{project.metaDescription}</title>
                    <meta name="description" content={project.metaTitle}/>
                </Helmet>
                {
                    project.projects.map((item, index)=>{

                        return (
                            <div key={`${item.title}${index}`} id={projectsRendered? item.anchor: ''}>
                                {renderMain(item)}
                                {renderArt(item)}
                            </div>
                        )
                    })
                }
            </Container>
        )
    }

    return (
        <HelmetProvider>
            {project.isGroupProject  ?  renderGroupProject() : renderSoloProject()}
        </HelmetProvider>
    );
};
