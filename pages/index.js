import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default () => {
    return(
        <>
            <Head>
                <title>Remote University</title>
                <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="/static/css/style.css"/>
            </Head>
            <Header/>
            <div>

            <div class="site-blocks-cover overlay" style={{backgroundImage: "url(images/hero_2.jpg)"}} data-aos="fade" data-stellar-background-ratio="0.5">
              <div class="container">
                <div class="row align-items-center justify-content-center">

                  <div class="col-md-12" data-aos="fade-up" data-aos-delay="400">
                                
                    <div class="row mb-4">
                      <div class="col-md-7">
                        <h1>Study online</h1>
                        <p class="mb-5 lead">   
                        Remote university is a fictional university formulated mainly for  
                        the facebook hackathon with an aim of linking Julia, a facebook messenger bot,
                        to a "real" website.
                        </p>
                        <div>
                          <a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Sign Up</a>
                          <a href="#" class="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Learn more</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  

            <div class="site-section" id="about-section">
              <div class="container">
                <div class="row align-items-lg-center">
                  <figure class="col-md-8 mb-5 mt-5 mb-lg-0 position-relative">
                    <img src="images/about_1.jpg" class="img-fluid" alt="Image"/>
                    <figcaption>
                      Photo by Juan Ramos on Unsplash
                    </figcaption>
                  </figure>
                  <div class="col-md-3 ml-auto">
                    <h2 class="section-title mb-3">About Us</h2>
                    <p class="mb-4">
                    Remote University aims at leveraging technology to find new ways of teaching and learning. 
                    It's massive online courses library offers flexible access to a range of interactive 
                    courses developed and taught by experienced instructors.
                      </p>
                    <p><a href="#" class="btn btn-black btn-black--hover rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="site-section testimonial-wrap" id="testimonials-section">
              <div class="container">
                <div class="row mb-5">
                  <div class="col-12 text-center">
                    <h2 class="section-title mb-3">Testimonials</h2>
                  </div>
                </div>
              </div>
              <div class="slide-one-item home-slider">
                  <div>
                    <div class="testimonial">
                      <figure class="mb-4 d-block align-items-center justify-content-center">
                        <div><img src="images/avatar_1.jfif" alt="Image" class="w-100 img-fluid mb-3"/></div>
                      </figure>
                      <blockquote class="mb-3">
                        <p>&ldquo;Course materials were good, the mentoring approach was good, and working with other people via the Internet was good. The instructor did a good job of communicating and making it a more intimate arrangement.&rdquo;</p>
                      </blockquote>
                      <p class="text-black"><strong>Light Yagami</strong></p>

                      
                    </div>
                  </div>
                  <div>
                    <div class="testimonial">
                      
                      <figure class="mb-4 d-block align-items-center justify-content-center">
                        <div><img src="images/avatar_2.jfif" alt="Image" class="w-100 img-fluid mb-3"/></div>
                      </figure>

                      <blockquote class="mb-3">
                        <p>&ldquo;You prepare people to carry out skills in the real world. Keep up the good work. What I have learned in this course, I will be able to apply in the real world with honour.&rdquo;</p>
                      </blockquote>
                      
                      <p class="text-black"><strong>Ninja Warrior</strong></p>
                      
                      
                    </div>
                  </div>

                  <div>
                    <div class="testimonial">
                      <figure class="mb-4 d-block align-items-center justify-content-center">
                        <div><img src="images/avatar_3.jfif" alt="Image" class="w-100 img-fluid mb-3"/></div>
                      </figure>
                      <blockquote class="mb-3">
                        <p>&ldquo;In the last three years, the most I have enjoyed about online learning is its flexibility and convenience. I am able to be a full-time employee as well as a full-time student without any struggles.&rdquo;</p>
                      </blockquote>
                      <p class="text-black"><strong>Spike Spiegel</strong></p>

                      
                    </div>
                  
                  </div>

                </div>
            </div>
            </div>
            <Footer/>
        </>
    );
};