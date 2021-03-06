import React from "react";

const styles = {
  background: {
    backgroundColor: "#555555"
  }
};

function AboutMe() {
  return (
    <div className="py-5 text-center container">
      <blockquote className="blockquote text-center">
        <p className="mb-0 text-white">
          <em>
            "I have one life and one chance to make it count for something. My
            faith demands that I do whatever I can, wherever I am, whenever I
            can, for as long as I can with whatever I have to try and make a
            difference."
          </em>
        </p>
        <footer className="blockquote-footer mt-2 text-white">
          Jimmy Carter
        </footer>
      </blockquote>
      <div className="row py-lg-5">
        <div
          className="col-lg-6 col-md-8 mx-auto border border-primary "
          style={styles.background}
        >
          <h2 className="text-center">About Me</h2>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/avatar.png`}
            style={{ height: "150px" }}
            alt="Headshot Pic"
          />
          <p className="text-center m-3 p-2">
            Obtained a certificate in full stack web development from
            UTSA and have a Bachelor of Science in Mechanical Engineering from
            St Mary's University and am looking to apply my skills and abilities
            to a challenging, growth-oriented position. My hands-on experience
            working with Bimbo Bakeries USA has allowed me to develop ability to
            work under pressure and have adaptability abilities. My focus, as an
            emerging professional, is to utilize my strengths to make a positive
            impact on an overall organization.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
