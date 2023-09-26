// ProjectPage.js

import React, {useEffect} from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import {meta} from "../../content_option";
import {useParams} from 'react-router-dom';
import {projects} from "../../content_option";
// import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'


export const ProjectPage = () => {
    const {projectId, subProjectId} = useParams();
    //
    // useEffect(()=>{
    //     if(projectId !== 'solo'){
    //         goToAnchor(subProjectId)
    //     }
    // },[])

    const project = projectId === 'solo' ? projects[subProjectId] :  projects[projectId];

    if (!project) {
        return <div>Project not found</div>;
    }

    const renderMain = (project) => {
        const {img, title, years, desc} = project.main;

        return (
            <div className={'main'}>
                <div className="main-image">
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

    const renderArt = (project) => {
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

    const renderSoloProject = () => {
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

    const renderGroupProject = () => {
        return (
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8"/>
                    <title>{project.metaDescription}</title>
                    <meta name="description" content={project.metaTitle}/>
                </Helmet>
                {
                    project.list.map((item, index)=>{
                        console.log(item)
                        return (
                            <div key={`${project[item].title}${index}`}>
                                {renderMain(project[item])}
                                {renderArt(project[item])}
                            </div>
                        )
                    })
                }
            </Container>
        )
    }
    return (
        <HelmetProvider>
            {projectId === 'solo' ? renderSoloProject() : renderGroupProject()}
        </HelmetProvider>
    );
};
