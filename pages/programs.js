import Head from "next/head";
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
    <>
    <Head>
        <title>Remote University | Programs</title>
        <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="/static/css/style.css"/>
    </Head>
    <Header/>
    <main role="main" className="text-dark container py-5">
      <div class="card mb-3 card-width">
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src="https://remote-university-website-2.now.sh/images/ai.jpg" class="card-img" alt="artificial intelligence"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">Artificial intelligence</h5>
                <p class="card-text">
                Machine learning is the science of getting computers to act without being explicitly programmed. 
                In the past decade, machine learning has given us self-driving cars, practical speech recognition, 
                effective web search, and a vastly improved understanding of the human genome. Machine learning is 
                so pervasive today that you probably use it dozens of times a day without knowing it.
                </p>
                <a class="card-text small text-muted" href="/programs/artificial-intelligence">Continue reading...</a>
            </div>
            </div>
        </div>
      </div>

      <div class="card mb-3 card-width">
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src="https://remote-university-website-2.now.sh/images/cloud.jpg" class="card-img" alt="cloud computing"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">Cloud computing</h5>
                <p class="card-text">
                    Today, all companies, big or small, are adopting cloud computing to enable 
                    their digital transformation. The growth of this technology has created incredible 
                    demand for Cloud computing jobs, from Cloud developers and Cloud DevOps roles to 
                    more specialized roles such as solutions architects and Cloud security engineers. 
                </p>
                <a class="card-text small text-muted" href="/programs/cloud-computing">Continue reading...</a>
            </div>
            </div>
        </div>
      </div>

      <div class="card mb-3 card-width">
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src="https://remote-university-website-2.now.sh/images/data_science.jpg" class="card-img" alt="data science"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">Data science</h5>
                <p class="card-text">
                Data Science has been ranked as one of the hottest professions and the demand for data 
                practitioners is booming. This program is intended for anyone interested in developing 
                skills and experience to pursue a career in Data Science or Machine Learning. 
                </p>
                <a class="card-text small text-muted" href="/programs/data-science">Continue reading...</a>
            </div>
            </div>
        </div>
      </div>

      <div class="card mb-3 card-width">
        <div class="row no-gutters">
            <div class="col-md-4">
            <img src="https://remote-university-website-2.now.sh/images/programming.png" class="card-img" alt="programming"/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">Programming</h5>
                <p class="card-text">
                    Programming is a critical skill in today’s economy, and there is a shortage of qualified 
                    developers. Whether you’re new to coding, adding more skills, or advancing your career, 
                    10 hours a week will prepare you for your ideal developer job.
                </p>
                <a class="card-text small text-muted" href="/programs/programming">Continue reading...</a>
            </div>
            </div>
        </div>
      </div>
    </main>
    <Footer/>
    <style jsx>
        {`
            .card-width {
                width: 540px
            }
        `}
    </style>
    </>
)