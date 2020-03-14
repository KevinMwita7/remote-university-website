import Head from "next/head";
import Header from '../components/header';
import Footer from '../components/footer';

export default () => {
    return(
        <>
        <Head>
            <title>Remote University | Apply</title>
            <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/css/style.css"/>
            <meta name="keywords" content="Online, Education, Technical"/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="https://remote-university-website-2.now.sh/images/avatar.jfif"/>
            <meta property="og:title" content="Remote University | Apply"/>
            <meta property="og:description" content="An online education platform"/>
            <meta property="fb:page_id" content="108150007465511"/>
            <meta property="fb:app_id" content="498230517732938"/>
            <meta property="og:url" content="https://remote-university-website-2.now.sh/apply"/>
        </Head>
        <Header/>
        <main role="main" className="text-dark container py-5">
            <div className="mx-auto w-50">
                <h1 className="font-weight-bold text-center">Admissions Application</h1>
                <form onSubmit={(e) => {
                    console.log(e.target);
                    alert("Thank you!")
                }}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" className="form-control"/>
                    </div>
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="program">Select a program</label>
                    <select className="custom-select">
                        <option value="artificialIntelligence" defaultValue>Artificial Intelligence</option>
                        <option value="cloudComputing">Cloud computing</option>
                        <option value="dataScience">Data science</option>
                        <option value="programming">Programming</option>
                    </select>
                </div>

                <div className="form-group">
                <label htmlFor="program">Country of residence</label>
                <select className="custom-select">
                    <option value="yourCountry" defaultValue>Your Country</option>
                </select>
                </div>

                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control"/>
                </div>

                <div className="form-group">
                    <label htmlFor="zipOrPostalCode">Zip / Postal code</label>
                    <input type="text" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                </form>
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
}