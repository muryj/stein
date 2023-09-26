import React from "react";
import "./styles.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {Container} from "react-bootstrap";
import {
    relatedProjects,
} from "../../content_option";

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
                        <button className="btn ac_btn" type="button" onClick={()=>{
                            window.open(relatedProjects.section1.link)
                        }}>
                            Link
                        </button>
                    </div>
                </div>
                <div className="sec_sp">
                    <div className="img-content">
                        <img src={relatedProjects.section2.img}/>
                    </div>
                    <div className="text-content">
                        <h4>{relatedProjects.section2.title}</h4>
                        <p>{relatedProjects.section2.text}</p>
                                <button className="btn ac_btn" type="button" onClick={()=>{
                                    window.open(relatedProjects.section2.link)
                                }}>
                                  Link
                                </button>
                    </div>
                </div>
                <div className="sec_sp">
                    <div className="img-content">
                        <img src={relatedProjects.section3.img}/>
                    </div>
                    <div className="text-content">
                        <h4>{relatedProjects.section3.title}</h4>
                        <p>{relatedProjects.section3.text}</p>
                        <button className="btn ac_btn" type="button" onClick={()=>{
                            window.open(relatedProjects.section2.link)
                        }}>
                            Link
                        </button>
                    </div>
                </div>
            </Container>
        </HelmetProvider>
    );
};
