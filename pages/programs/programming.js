import Head from "next/head";
import Header from '../../components/header';
import Footer from '../../components/footer';

export default () => (
    <>
    <Head>
        <title>Remote University | Programming</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
    </Head>
    <Header/>
    <main role="main" className="text-dark">
        <section className="jumbotron text-center bg-dark text-light">
            <div className="container">
                <h1 className="jumbotron-heading">Expand Your Knowledge of Programming</h1>
                <p className="lead">
                    Programming is a critical skill in today’s economy, and there is a shortage of qualified developers. 
                    Whether you’re new to coding, adding more skills, or advancing your career, 10 hours a week will prepare 
                    you for your ideal developer job.
                </p>
                <a className="btn btn-primary my-2" href="/apply">Apply now</a>
            </div>
        </section>
        <div className="py-5 bg-light container">
            <h1>About this program</h1>
            <p>
                    Learn the basics of programming through Python and Javascript. Explore possible programming paths with our 
                    final project selection. Get confident in your ability to think and problem-solve like a programmer. Be primed 
                    and ready for our career-ready programs after mastering these projects.
            </p>
            <p>
                    Explore fundamental programming concepts in Python like logic checks, data structures, and functions through 
                    interactive quizzes and practice on your own computer. Learn syntax, debugging techniques and basic problem-solving concepts.
            </p>
            <p>
                    Learn the fundamentals of web programming using JavaScript, the ubiquitous language for creating dynamic web 
                    applications.
            </p>
        </div>

        <div className="py-5 bg-light">
            <div className="container">
                <h1>What you will learn</h1>
                <ul className="list-group">
                    <li className="ml-3">Explore fundamental programming concepts in Python like logic checks, data structures, and functions through interactive quizzes and practice on your own computer.</li>
                    <li className="ml-3">Learn syntax, debugging techniques and basic problem-solving concepts.</li>
                    <li className="ml-3">Learn the fundamentals of web programming.</li>
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
                                    <p className="mb-0">This course generally is great! But I want to make something very clear for those who are novice in programming. It certainly needs a lot of hard works in reading through many information. This includes not only the instructor's videos and manuals, but also many more links of information from reading through discussion forum, referred from mentors, posted summary notes, and recorded videos.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Matt Damoff</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">I currently work as a bank teller and wanted to dive deep into coding to expand my skill set. In college I began as a Comp Science major and have always had a passion for coding. I've taken other Remote University courses and they were top notch so I decided to enroll in the programming course. The experience so far has been excellent!</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Jessica White</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">This is a great Problem, I love the project review. This is a good part that push me to learn all of the new things that I learned in class. During this process, it is hard but it is worthy.</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Klara Black</cite></footer>
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