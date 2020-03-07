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
                        <h1>Shop With Us</h1>
                        <p class="mb-5 lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.</p>
                        <div>
                          <a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block">Shop Now</a>
                          <a href="#" class="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block">Club Membership</a>
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
                  <div class="col-md-8 mb-5 mt-5 mb-lg-0 position-relative">
                    <img src="images/about_1.jpg" class="img-fluid" alt="Image"/>
                  </div>
                  <div class="col-md-3 ml-auto">
                    <h2 class="section-title mb-3">About Us</h2>
                    <p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci alias eius vero vel!</p>
                    <p><a href="#" class="btn btn-black btn-black--hover rounded-0">Learn More</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="site-section bg-light" id="services-section">
              <div class="container">
                <div class="row mb-5">
                  <div class="col-12 text-center">
                    <h2 class="section-title mb-3">Our Services</h2>
                  </div>
                </div>
                <div class="row align-items-stretch">
                  <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
                    <div class="d-flex">
                      <div>
                        <h3>Business Consulting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <div class="d-flex">
                      <div class="mr-4"><span class="text-primary icon-backspace"></span></div>
                      <div>
                        <h3>Market Analysis</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <div class="d-flex">
                      <div class="mr-4"><span class="text-primary icon-av_timer"></span></div>
                      <div>
                        <h3>User Monitoring</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
                      </div>
                    </div>
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
                        <div><img src="images/person_3.jpg" alt="Image" class="w-100 img-fluid mb-3"/></div>
                      </figure>
                      <blockquote class="mb-3">
                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                      </blockquote>
                      <p class="text-black"><strong>John Smith</strong></p>

                      
                    </div>
                  </div>
                  <div>
                    <div class="testimonial">
                      
                      <figure class="mb-4 d-block align-items-center justify-content-center">
                        <div><img src="images/person_2.jpg" alt="Image" class="w-100 img-fluid mb-3"/></div>
                      </figure>

                      <blockquote class="mb-3">
                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                      </blockquote>
                      
                      <p class="text-black"><strong>Robert Aguilar</strong></p>
                      
                      
                    </div>
                  </div>

                  <div>
                    <div class="testimonial">
                      <figure class="mb-4 d-block align-items-center justify-content-center">
                        <div><img src="images/person_4.jpg" alt="Image" class="w-100 img-fluid mb-3"/></div>
                      </figure>
                      <blockquote class="mb-3">
                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
                      </blockquote>
                      <p class="text-black"><strong>Roger Spears</strong></p>

                      
                    </div>
                  
                  </div>

                </div>
            </div>
            </div>
            <Footer/>
            <style jsx>
                {`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: inherit;
                }
                `}
            </style>
        </>
    );
};