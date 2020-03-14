import Head from "next/head";
import Header from '../../components/header';
import Footer from '../../components/footer';

export default () => (
    <>
    <Head>
        <title>Remote University | AI</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
    </Head>
    <Header/>
    <main role="main" className="text-dark">
        <section className="jumbotron text-center bg-dark text-light">
            <div className="container">
                <h1 className="jumbotron-heading">Expand Your Knowledge of Artificial Intelligence</h1>
                <p className="lead">
                    Learn essential Artificial Intelligence concepts from AI experts, including search, optimization, planning, pattern recognition, and more.
                </p>
                <a className="btn btn-primary my-2" href="/apply">Apply now</a>
            </div>
        </section>
        <div className="py-5 bg-light container">
            <h1>About this program</h1>
            <p>
                Machine learning is the science of getting computers to act without being explicitly programmed. In the past decade, machine learning has given us 
                self-driving cars, practical speech recognition, effective web search, and a vastly improved understanding of the human genome. Machine learning is 
                so pervasive today that you probably use it dozens of times a day without knowing it. Many researchers also think it is the best way to make progress 
                towards human-level AI. In this className, you will learn about the most effective machine learning techniques, and gain practice implementing them and getting 
                them to work for yourself. More importantly, you'll learn about not only the theoretical underpinnings of learning, but also gain the practical know-how needed 
                to quickly and powerfully apply these techniques to new problems. Finally, you'll learn about some of Silicon Valley's best practices in innovation as it pertains 
                to machine learning and AI.  
            </p>
            <p>
                This program provides a broad introduction to machine learning, datamining, and statistical pattern recognition. Topics include: (i) Supervised learning 
                (parametric/non-parametric algorithms, support vector machines, kernels, neural networks). (ii) Unsupervised learning (clustering, dimensionality reduction, recommender 
                systems, deep learning). (iii) Best practices in machine learning (bias/variance theory; innovation process in machine learning and AI). The program will also draw from 
                numerous case studies and applications, so that you'll also learn how to apply learning algorithms to building smart robots (perception, control), text understanding 
                (web search, anti-spam), computer vision, medical informatics, audio, database mining, and other areas.
            </p>
        </div>

        <div className="py-5 bg-light">
            <div className="container">
                <h1>What you will learn</h1>
                <ul className="list-group">
                    <li className="ml-3">Understand the theory behind Artificial Intelligence</li>
                    <li className="ml-3">Understand the mathematics behind Machine Learning</li>
                    <li className="ml-3">Understand the relationship between reinforcement learning and psychology</li>
                    <li className="ml-3">Understand reinforcement learning on a technical level </li>
                    <li className="ml-3">Master the State of the Art AI models</li>
                    <li className="ml-3"> Implement 17 different reinforcement learning algorithms </li>
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
                                    <p className="mb-0">This was an excellent program, that covered many aspects of the field with clear concepts and great exercises and projects. The project evaluation was good and detailed, from the concepts to the code review.</p>
                                    <footer className="blockquote-footer"><cite title="Source Title">James Stone</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">Unlike the other courses, this program requires students to read papers and write reviews. Those assignments really help me to understand subject matters more complete. </p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Stephanie Holt</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4 box-shadow">
                                <div className="card-body">
                                    <blockquote className="card-text">
                                        <p className="mb-0">First project complete. So far so good. A gentle introduction to some AI concepts in this first module/project and the upcoming modules look very interesting. This program looks like it will give a solid foundation in AI.</p>
                                        <footer className="blockquote-footer"><cite title="Source Title">Doug Collins</cite></footer>
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