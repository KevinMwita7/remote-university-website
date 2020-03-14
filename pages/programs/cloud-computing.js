import Head from "next/head";
import Header from '../../components/header';
import Footer from '../../components/footer';

export default () => (
    <>
    <Head>
        <title>Remote University | Cloud Computing</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
    </Head>
    <Header/>
    <main role="main" className="text-dark">
        <section className="jumbotron text-center bg-dark text-light">
            <div className="container">
                <h1 className="jumbotron-heading">Expand Your Knowledge of Cloud Computing</h1>
                <p className="lead">
                    Today, all companies, big or small, are adopting cloud computing to enable 
                    their digital transformation. The growth of this technology has created incredible 
                    demand for Cloud computing jobs, from Cloud developers and Cloud DevOps roles to 
                    more specialized roles such as solutions architects and Cloud security engineers. 
                    You can join this growing field – get started today.
                </p>
                <a className="btn btn-primary my-2" href="/apply">Apply now</a>
            </div>
        </section>
        <div className="py-5 bg-light container">
            <h1>About this program</h1>
            <p>
                The Cloud Computing takes you on a tour through cloud computing systems. 
                We start in in the middle layer with Cloud Computing Concepts covering core distributed 
                systems concepts used inside clouds, move to the upper layer of Cloud Applications and 
                finally to the lower layer of Cloud Networking. We conclude with a project that allows you 
                to apply the skills you've learned throughout the courses.
            </p>
            <p>
                <span className="font-weight-bold">DevOps Engineers</span> optimize, automate, and monitor 
                development pipelines. They focus on ensuring that products and services are delivered smoothly 
                and at scale by building and optimizing cloud architecture and configuration. This role is a great
                 fit for a developer looking to shift your career towards a more operational role, or a 
                 system admin / operations manager who wants to upgrade their tech skills.
            </p>
            <p>
                <span className="font-weight-bold">Cloud Developers</span> design and develop secure cloud applications, 
                services, and products. This can include everything from back-end, front-end, web application, full-stack,
                and cloud application deployment. You will develop cloud-native applications or migrate legacy applications 
                to cloud.
            </p>
        </div>

        <div className="py-5 bg-light">
            <div className="container">
                <h1>What you will learn</h1>
                <ul className="list-group">
                    <li className="ml-3">Fundamental understanding of what is cloud computing</li>
                    <li className="ml-3">Clearly understand cloud computing concepts technology & architecture</li>
                    <li className="ml-3">Start with advance cloud computing course to focus on specific technology</li>
                    <li className="ml-3">The 3 main service models - SaaS, PaaS, IaaS</li>
                </ul>
            </div>
        </div>

        <div className="py-5 bg-light">
            <div className="container">
                <h1>Testimonials</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card mb-4 box-shadow">
                            <div className="card-body">
                                <blockquote className="card-text">
                                    <p className="mb-0">First project complete. So far so good. A gentle introduction to some cloud computing concepts in this first module/project and the upcoming modules look very interesting. This course looks like it will give a solid foundation in cloud computing.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Jack Ryan</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">Unlike the other courses, this program requires students to read papers and write reviews. Those assignments really help me to understand subject matters more complete. </p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Kate Ashley</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">The course had a fantastic community with great inspiring mentors. I personally will use Remote University as long as it exists! Remtote University is an investment in yourself! If you want to have fun and get curious about the topic, go with Remote University!</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Mary Anne</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </main>
    <Footer/>
    </>
)