import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  education,
  meta,
  exhibitions,
} from "../../content_option";

function replaceWithBr(str) {
  return str.replace(/\n/g, "<br />")
}

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> CV | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {/*<Row className="mb-5 mt-3">*/}
        {/*  <Col lg="8">*/}
        {/*    <h3 className="mb-4">CV</h3>*/}
        {/*  </Col>*/}
        {/*</Row>*/}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p dangerouslySetInnerHTML={{__html: replaceWithBr(dataabout.aboutme)}}/>
            </div>
          </Col>
          <Col lg="5">
            <h3 className="color_sec py-4">{""}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <th>{dataabout.description}</th>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
              {education.map((data, i) => {
                return (
                    <tr key={i}>
                      <th scope="row">{data.years}</th>
                      <td>{data.where}</td>
                      <td>{data.grade}</td>
                    </tr>
                );
              })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Exhibitions</h3>
          </Col>
          <Col lg="7">
            {exhibitions.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc"  dangerouslySetInnerHTML={{__html: replaceWithBr(data.description)}} />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
