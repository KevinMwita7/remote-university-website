import Layout from '../components/layout';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => (
    <>
    <Header/>
    <Layout>
        <section className="mt-5 pt-5 text-center jumbotron">
            <div className="col-6 mx-auto">
                <p className="lead-header">
                    Remote university is a fictional university formulated mainly for  
                    the facebook hackathon with an aim of linking Julia, a facebook messenger bot,
                    to a "real" website.
                </p>
            </div>
        </section>
        <div className="row text-center">
            <div className="col-12">
                <h1 className="font-weight-bold">Explore</h1>
                <p className="w-50 mx-auto"> 
                    Browse multiple courses and choose the most relevant one. Keep your skills up-to-date 
                    with access to thousands of courses authored by an elite network of industry experts.
                </p>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-12">
                <h1 className="font-weight-bold">Discover</h1>
                <p className="w-50 mx-auto">
                    Most passions start with new skills. The best part about learning new skills is that 
                    you can try one for a few days to get a feel for it. Take a few classes and figure out 
                    the right fit for you.
                </p>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-12">
                <h1 className="font-weight-bold">Learn</h1>
                <p className="w-50 mx-auto">
                    Remote University aims at leveraging technology to find new ways of teaching and learning. 
                    It's massive online courses library offers flexible access to a range of interactive 
                    courses developed and taught by experienced instructors.
                </p>
            </div>
        </div>
    </Layout>
    <Footer/>
    <style jsx>
        {`
            .lead-header {
                font-size: 36px;
                font-weight: 400;
                line-height: 1.3;
            }
            p {
                font-size: 18px;
            }
        `}
    </style>
    </>
)