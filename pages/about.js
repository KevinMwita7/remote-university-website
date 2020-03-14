import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

export default () => (
    <>
        <Head>
            <title>Remote University | About Us</title>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/css/style.css"/>
        </Head>
        <Header/>
        <div className="container text-dark">
            <main>
                <h1 className="bd-title">About us</h1>
                <p className="bd-lead mb-5">We envision a world where anyone, anywhere can transform their life by accessing the world’s best learning experience.</p>
                <h2>Courses</h2>
                <p className="mb-5">
                    Every course on Remote University is taught by top instructors from world-class universities and companies, 
                    so you can learn something new anytime, anywhere. Hundreds of courses give you access to on-demand video 
                    lectures, homework exercises, and community discussion forums. Furthermore we provide additional quizzes and 
                    projects as well as a shareable Course Certificate upon completion.
                </p>
                <h2>Specializations</h2>
                <p className="mb-5">
                    If you want to master a specific career skill, consider enrolling in a Specialization. You’ll complete a series 
                    of rigorous courses at your own pace, tackle hands-on projects based on real business challenges, and earn a 
                    Specialization Certificate to share with your professional network and potential employers.
                </p>
                <h2>Professional Certificates</h2>
                <p className="mb-5">
                    Whether you’re looking to start a new career or change your current one, Professional Certificates on Remote University 
                    help you become job-ready. Learn at your own pace from top companies and universities, apply your new skills to hands-on 
                    projects that showcase your expertise to potential employers, unlock access to career support resources, and earn a career 
                    credential to kickstart your new career.
                </p>
                <h2>On Remote University, you have access to</h2>
                <div className="row mb-3">
                <ul class="list-group list-group-flush mx-auto">
                    <li class="list-group-item"><span className="font-weight-bold">Academic and technical support</span> where you can request feedback through peer reviews and the Remote University Community, and troubleshooting assistance from our knowledgeable Learner Support team.</li>
                    <li class="list-group-item"><span className="font-weight-bold">Shareable certificates</span> that you can add to your resume and LinkedIn Profile.</li>
                    <li class="list-group-item"><span className="font-weight-bold">An inclusive experience</span> designed for a diverse global audience, including video subtitles in over 30 languages.</li>
                </ul>
                </div>
            </main>
        </div>
        <Footer/>
    </>
)