"use strict";
import React, {Component} from "react";

export default class About extends Component {
    render() {
        return (
            <div>
                <section className="colorlib-about" data-section="about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                                    <div className="col-md-12">
                                        <div className="about-desc">
                                            <span className="heading-meta">About Us</span>
                                            <h2 className="colorlib-heading">Who Am I?</h2>
                                            <p>I'm a self taught software engineer from Florida. I began my software journey by watching my father
                                                a self taught software engineer and entrepreneur, who created <strong>Bare Metal Cloud</strong> in 2004. I
                                                love exploring new technologies and constantly building new projects. Apart from software I have a young family of my own.
                                                My wife Leticia and my son Caleb are how I spend my time away from software.</p>
                                            <p>My personal mission in life is to use my talents in software to try to shape a better world for tomorrow!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="colorlib-about">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                                 data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb"/>
                </span>
                                    <div className="desc">
                                        <h3>Front End Engineering</h3>
                                        <p>I have experience building web applications of all sizes. Using Angular.js,
                                            Angular, React.js, Vue.js.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                <span className="icon">
                    <i className="icon-group-outline"/>
                </span>
                                    <div className="desc">
                                        <h3>Data Structures & Algorithms</h3>
                                        <p>I have an good grasp of fundamental concepts for time and space complexity </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data"/>
                </span>
                                    <div className="desc">
                                        <h3>Dev Ops</h3>
                                        <p>Having grown up with a IaaS company.I know how to use tools like Docker, Kubernetes, Jenkins, Elastic Search, Apache Airflow</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data"/>
                </span>
                                    <div className="desc">
                                        <h3>Databases</h3>
                                        <p>I've used many different databases. I have experience working with MySQL, Postgres,
                                            MongoDB, Neo4j, and Redis</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2"/>
                </span>
                                    <div className="desc">
                                        <h3>Interests</h3>
                                        <p>I'm very interesting in machine learning and I have done a few little experiments using TensorFlow</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                <span className="icon">
                    <i className="icon-cloud4"/>
                </span>
                                    <div className="desc">
                                        <h3>Clouds</h3>
                                        <p>I have experience using dedicated servers as well as the major cloud providers.
                                            Which include AWS, Google Cloud, and Azure</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}