import React from "react"
import './styles/Testimonials.css'
function Testimonials() {
  return (
      <div className="testimonials" id="testimonials">

<section className="py-5 text-center">
    <div className="container py-4 text-white">
        <header>
            <h1 className="display-4 text-dark"><i>Testimonials</i></h1>
            <p className="font-italic mb-1 text-dark">Here are few or our dearest client testimonials, a proof of our determination and persistence to achieve our clients expectations</p>
            
        </header>
    </div>
</section>


<section className="pb-5">
    <div className="container">
        <div className="row">
            <div className="col-lg-10 col-xl-10 mx-auto">
                <div className="p-5  shadow rounded" id="block">
                    
                    <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel">
                        
                        <ol className="carousel-indicators mb-0">
                            <li className="active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>


                        
                        <div className="carousel-inner px-5 pb-4">
                            
                            <div className="carousel-item active">
                                <div className="media"><img className="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-1_ffutqr.jpg" alt="" width="75"/>
                                    <div className="media-body ml-3">
                                        <blockquote className="blockquote border-0 p-0">
                                            <p className="font-italic lead"> <i className=" fa fa-quote-left mr-3 "></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                             <footer className="blockquote-footer">
                                                <cite title="Source Title">Someone famous in Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="carousel-item">
                                <div className="media"><img className="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-3_hdxocq.jpg" alt="" width="75"/>
                                    <div className="media-body ml-3">
                                        <blockquote className="blockquote border-0 p-0">
                                            <p className="font-italic lead"> <i className=" fa fa-quote-left mr-3 "></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                             <footer className="blockquote-footer">
                                                <cite title="Source Title">Someone famous in Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            
                            <div className="carousel-item">
                                <div className="media"><img className="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-2_gibm2s.jpg" alt="" width="75"/>
                                    <div className="media-body ml-3">
                                        <blockquote className="blockquote border-0 p-0">
                                            <p className="font-italic lead"> <i className=" fa fa-quote-left mr-3 "></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                             <footer className="blockquote-footer">
                                                <cite title="Source Title">Someone famous in Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="media"><img className="rounded-circle img-thumbnail" src="https://res.cloudinary.com/mhmd/image/upload/v1579676165/avatar-2_gibm2s.jpg" alt="" width="75"/>
                                    <div className="media-body ml-3">
                                        <blockquote className="blockquote border-0 p-0">
                                            <p className="font-italic lead"> <i className=" fa fa-quote-left mr-3 "></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                             <footer className="blockquote-footer">
                                                <cite title="Source Title">Someone famous in Source Title</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                        <a className="carousel-control-prev width-auto" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <i className=" fa fa-angle-left text-white text-lg bg-gray"></i>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next width-auto" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <i className=" fa fa-angle-right text-white text-lg"></i>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Testimonials