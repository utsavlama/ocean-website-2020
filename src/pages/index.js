import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";
import Button from "../components/button";
import GoogleMap from "../components/googlemap";
import '../utils/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <section className="ocean-container ocean-home-hero">
      <h1>Ocean Dry Cleaners</h1>
      <span className="ocean-location-search"><i className="fa fa-search fa-2x"><FontAwesomeIcon icon="search" /></i><input type="text"
        placeholder="Location" /></span>
      <p>Find out if we serve at your location</p>
    </section>

    <section className="ocean-container">
      <div className="row ocean-row-fill">
        <article>
          <h1>Leave your dry cleaning worries with us</h1>
          <p>Want to know our pricing or have any other questions?</p>
          <div className="row ocean-button-group">
            <Button value="Pricing" />
            <Button value="FAQ" />
          </div>
        </article>
        <div className="ocean-side-image">
          <img src="images/ocean-3.jfif" alt="puppy needs towel" />
        </div>
      </div>
    </section>

    <section className="ocean-container">
      <GoogleMap />
    </section>

    <section className="ocean-container ocean-home-display">
      <h1>Services we offer</h1>
      <p>These are the range of services where we excel.</p>
      <div className="row ocean-row-space">
        <div className="ocean-service-card">
          <img src="images/ocean-1.jfif" alt="" />
          <h2>Curtains and table clothes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum natus mollitia ipsa quod illum
                    soluta? </p>
        </div>
        <div className="ocean-service-card">
          <img src="images/ocean-2.jfif" alt="" />
          <h2>Curtains and table clothes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum natus mollitia ipsa quod illum
                    soluta? </p>
        </div>
      </div>
      <div className="row ocean-row-space">
        <div className="ocean-service-card">
          <img src="images/ocean-3.jfif" alt="" />
          <h2>Curtains and table clothes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum natus mollitia ipsa quod illum
                    soluta? </p>
        </div>
        <div className="ocean-service-card">
          <img src="images/ocean-4.jfif" alt="" />
          <h2>Curtains and table clothes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ipsum natus mollitia ipsa quod illum
                    soluta? </p>
        </div>
      </div>
    </section>

    <section className="ocean-container ocean-sentimental">
      <article className="ocean-testimonial">
        <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aut! Fugit amet nobis
        exercitationem!
        Similique possimus repellat deserunt dignissimos distinctio labore minima quae molestiae! Quaerat
                placeat voluptates accusamus est labore.</blockquote>
        <span>
          Jane doe
            </span>
      </article>

      <article className="ocean-commitment">
        <h1>We are eco friendly!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, deserunt molestiae rerum ipsum, modi
        nesciunt officia consectetur, illo veritatis sapiente earum! Est iste officiis facere! Hic sequi
                distinctio deserunt atque!</p>
        <button className="ocean-button">Contact us</button>
      </article>
    </section>
  </Layout>
)

export default IndexPage
