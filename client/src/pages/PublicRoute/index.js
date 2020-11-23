import React from 'react';
import {
  MDBView,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBMask,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBFooter,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBInput,

} from 'mdbreact';
import images from "../../images/andrew.jpg"
import anthonny from "../../anthonny/IMG_2862.jpg"
import '../PublicRoute/home.css'
function PublicRoute() {

  return (
    <div id='home'>
      <MDBView src='https://desktopwallpaper.wiki/wp-content/uploads/data/2017/12/6/popular-gym-background-1920x111-WTG200513.jpg'>
        <MDBMask className='rgba-black-light' />
        <MDBContainer
          className='d-flex justify-content-center align-items-center'
          style={{ height: '100%', width: '100%', paddingTop: '17rem' }}
        >
          <MDBRow>
            <MDBCol md='12' className='mb-4 white-text text-center'>
              <h1 className='h1-reponsive white-text text-uppercase font-weight-bold mb-0 pt-md-5 pt-5 '><MDBIcon fab icon="mandalorian" />
                <strong> WOD Tribe</strong>
              </h1>
              <hr className='hr-light my-4' />
              <h5 className='text-uppercase mb-4 white-text '>
                <strong></strong>
              </h5>
              <MDBContainer id='mission'>
        <MDBRow className='py-5'>
          <MDBCol md='12' className='white-text text-center'>
            <h3>
              <MDBIcon icon="quote-left" />        THE PAIN OF TODAY IS THE VICTORY OF TOMORROW.                 <MDBIcon icon="quote-right" />
            </h3>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBView>
     
      <section className="my-5" id="tribe">
        <h2 className="h1-responsive font-weight-bold text-center my-5 white-text">
          <strong>Explore The Tribe</strong>
        </h2>
        <h4 className="white-text w-responsive text-center mx-auto mb-5">
          Our app is the perfect tool for any person who wants to start a fitness journey. Not only we are providing a new Workout every day, we are also providing a series of tools that would take you to the next level.
      </h4>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              id="imageWod"
              className="img-fluid rounded z-depth-1 text-center"
            />
          </MDBCol>
          <MDBCol lg="7" id="WodBorder">
            <h3 >  <MDBIcon icon="dumbbell" />  Check The WOD</h3>
            <h4 className='white-text'>
            A written workout plan not only provides a layout for the day, but it also sets up the big picture for weeks or months to come. In other words, an established plan dictates the work that must be done in order to reach the goal. How does it work :

            <ul>- Register or Login to acess to your userpage  </ul>
            <ul>- Scroll down to the WOD section</ul>
            <ul>- The WOD will show you the muscle or workout your are going to do today and the deatails of such workout.</ul>
            <ul>- Note: This workouts are design by your personal trainer</ul>

         </h4>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7" id="WodBorder">
            <h3>  <MDBIcon icon="utensils" />        Fitness Calculator</h3>
            <h4  className='white-text'>
            On this section, we offers a number of free tools to help you determine everything from your body mass index (BMI) to your body fat composition, daily caloric needs and more. Each of those tools will help you find an exercise program that fits your individual needs and goals, whether that be losing weight or increasing your strength with weight training.How to use:
           
           <ul>-Insert all the personal information Age, Gender, Weight,and Height.</ul>
           <ul>-Hit the Calculate Button at the end of the form.</ul>
           <ul>- See your result : BMI, Body Fat, Ideal Weight, and suggested Daily Calories.</ul>
             
              
              </h4>
          </MDBCol>
          <MDBCol lg="5">
            <img
              src="https://images.unsplash.com/photo-1563053764-149651f44800?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG11c2NsZSUyMG1hbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              id="imageCalories"
              className="img-fluid rounded z-depth-1 text-center"
            />
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5" className="mb-lg-0 mb-5">
            <img
              src="https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjZ8fHJlY2lwZXMlMjBib29rc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              id="imageCalculator"
              className="img-fluid rounded z-depth-1"
            />
          </MDBCol>
          <MDBCol lg="7" id="WodBorder" >
            <h3>  <MDBIcon icon="calculator" />      Recipes    </h3>
            <h4  className='white-text'>
            We know at The Tribe that one of the most difficult parts of starting a healthy life is nutrition. Specially when it comes to cooking healthy recipes. For this reason, we design this section just for that. In this section of the app Athletes are going to be able to search for a food item that they want to eat, and the app will suggest 10 different recipes that they can choose. How does it work:
              <ul>- Type a food item in the search bar, for example Steak or Chicken</ul>
              <ul>- Then you will see 10 different recipes </ul>
              <ul>- Each recipe will have a detail button that will show ingridients, and calories</ul>
              <ul>-Also each recipe pictures is a button that if use will take you to another page where you will see step by step how to prepare the recipe</ul>
            
              
             
           </h4>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
      </section>



      <MDBRow className=" text-center" id="team">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5  white-text">
            Our amazing team
          </h2>
          <h4 className='white-text text-center'>
            We are a group of Full-Stack Web Developer and gym enthusiast, our goal is to contribute as much as possible with the our comunity to create the must useful tool any Gym , coach or athlete needs to succeed on their fitness journey.
          </h4>
          <MDBRow>
            <MDBCol md="6" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={anthonny}
                className="rounded-circle z-depth-1 "
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold white-text my-4">
                Anthonny Rodriguez
              </h4>
              <h4 className="text-uppercase white-text mb-3">Full-Stack Developer</h4>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green" href="https://www.instagram.com/anthonnymitchell/"
                target="blank">
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-green"
                href="https://github.com/AnthonnyMitch"
                target="blank"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green" href="https://twitter.com/AnthonnyMitche1"
                target="blank">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </MDBCol>
            <MDBCol md="4" className="mb-md-0 mb-5">
              <img
                tag="img"
                src={images}
                className="rounded-circle z-depth-1 "
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold white-text my-4">
                Andrew Rodriguez
              </h4>
              <h4 className="text-uppercase white-text mb-3">Full-Stack Developer</h4>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green" href="https://www.instagram.com/andrewmrb22/"
                target="blank">
                <MDBIcon fab icon="instagram" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                floating
                size="sm"
                className="mx-1 mb-0 btn-green"
                href="https://github.com/andrewrb22"
                target="blank"
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-green" href="https://twitter.com/AndrewR86593430"
                target="blank" >
                <MDBIcon fab icon="twitter" />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBRow>
      <hr className="my-5" />
      <section className="my-5" id="contactform" >
        <h2 className="h1-responsive font-weight-bold my-5 white-text  text-center" >
          Contact Us
          </h2>

        <MDBRow>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div>
                  <h3 className="mt-2">
                    <MDBIcon icon="envelope" /> Write to us:
                </h3>
                </div>
                <p className="white-text">
                  We'll write rarely, but only the best content.
              </p>
                <div className="md-form">
                  <MDBInput
                    icon="user"
                    label="Your name"
                    iconClass="white-text"
                    type="text"
                    id="form-name"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="envelope"
                    label="Your email"
                    iconClass="white-text"
                    type="text"
                    id="form-email"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="tag"
                    label="Subject"
                    iconClass="white-text"
                    type="text"
                    id="form-subject"
                  />
                </div>
                <div className="md-form">
                  <MDBInput
                    icon="pencil-alt"
                    label="Message"
                    iconClass="white-text"
                    type="textarea"
                    id="form-text"
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="green">Submit</MDBBtn>
                </div>
                



              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
              style={{ height: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                title="This is a unique title"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
              />
            </div>
            <br />
            <MDBRow className="text-center white-text">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="green" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p>Orlando, Florida, 32839</p>
                <p className="mb-md-0">United States</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="green" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+ 01 234 567 89</p>
                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="green" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p>infoWODTRIBE@gmail.com</p>
                <p className="mb-md-0">saleWODTRIBE@gmail.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section >
      <MDBFooter color="green" className="font-small darken-3 pt-0">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="py-5">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="">WOD Tribe Group Inc </a>
        </MDBContainer>
      </div>
    </MDBFooter>
    </div>
  )
}


export default PublicRoute