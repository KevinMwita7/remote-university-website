import Head from "next/head";
import Header from '../../components/header';
import Footer from '../../components/footer';

export default () => (
    <>
    <Head>
        <title>Remote University | Data Science</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
    </Head>
    <Header/>
    <main role="main" className="text-dark">
        <section className="jumbotron text-center bg-dark text-light">
            <div className="container">
                <h1 className="jumbotron-heading">Expand Your Knowledge of Data Science</h1>
                <p className="lead">
                    Gain real-world data science experience with projects designed by industry experts. 
                    Build your portfolio and advance your data science career. 
                </p>
                <a className="btn btn-primary my-2" href="/apply">Apply now</a>
            </div>
        </section>
        <div className="py-5 bg-light container">
            <h1>About this program</h1>
            <p>
                Data Science has been ranked as one of the hottest professions and the demand for data practitioners is booming. 
                This program is intended for anyone interested in developing skills and experience to pursue a 
                <span className="font-weight-bold"> career in Data Science </span> or Machine Learning. 
            </p>
            <p>
                This program consists of 5 courses providing you with latest job-ready skills and techniques covering a wide array 
                of data science topics including: open source tools and libraries, methodologies, Python, databases, SQL, data visualization, 
                data analysis, and machine learning. You will practice <span className="font-weight-bold">hands-on </span>in the using real 
                data science tools and real-world data sets.
            </p>
            <p>
                It is a myth that to become a data scientist you need a Ph.D. This Professional Certificate is suitable for anyone who has 
                some computer skills and a passion for self-learning. No prior computer science or programming knowledge is necessary. 
                We start small, re-enforce applied learning, and build up to more complex topics. 
            </p>
        </div>

        <div className="py-5 bg-light">
            <div className="container">
                <h1>What you will learn</h1>
                <ul className="list-group">
                    <li className="ml-3">Understand the mathematics behind Machine Learning</li>
                    <li className="ml-3">Learn how to pre-process data</li>
                    <li className="ml-3">Be able to create Machine Learning algorithms in Python, using NumPy, statsmodels and scikit-learn</li>
                    <li className="ml-3">Use state-of-the-art Deep Learning frameworks such as Google’s TensorFlowDevelop a business intuition while coding and solving tasks with big data</li>
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
                                    <p className="mb-0">The program is great for self-motivated people who want to research and learn on their own. The videos are well organized and provide fair amount of information to complete the assignments and challenges. The only thing I felt tasking was the fee associated with this degree. I think it can be lowered a lot given the fact that students are mostly on their own with time management and assignment completion. Overall I would say, I am enjoying this learning journey and hope to complete it in the coming weeks.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">Muhammad  Ali</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">I'm trying my best to make a balance between my job and this valuable nanodegree. I already know I'm behind the schedule but I'm really happy since I am learning very useful stuff here and can apply my new skills to my job. Later on after graduation from this program I will pursue a better job which will be more in-depth about data science and machine learning.</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Faith Devonte</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">Good syllabus and having a hands-on is an added advantage. It's very beneficial to my learning. Have come across lot of trainings and courses throughout my 10 years of experience. This course distinguishes from others by having clarity on the topics that were explained. As we know, a picture portrays 1000 words, creating a video series to explain everything plays a vital role in making the concepts clear to all learners. Thank you for all the creators of this course.</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Ian Kiprop</cite></footer>
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