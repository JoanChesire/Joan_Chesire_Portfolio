/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Zindi_Wildfire-Prediction-Challenge",
    description:
      "Machine learning hackathon in creating a model capable of predicting the burned area in different locations over 2014 to 2016. The model I used was a combined simple average model of a Catboost Regressor and  Random Forest Regressor. Ranked 30 overall in the hackathon.",
    url: "https://github.com/JoanChesire/Zindi_Wildfire-Prediction-Challenge",
  },
  {
    title: "Maji ndogo SQL Analysis",
    description:
      "Contributed to analysing different aspects of Maji ndogo database to help with their accesibility of clean water. I utilised MySQL skills  to do so.",
    url: "https://github.com/JoanChesire/MAJI_NDOGO-SQL-ANALYSIS",
  },
  {
    title: "My Curriculum Vitae",
    description: "Created from Google docs and showcases my working experience .",
    url: "https://drive.google.com/file/d/1xXy_zFfcpka_esUoZ2pYkxKkSSMjFv_L/view?usp=sharing",
  },
  {
    title: "Insurance Fraud Detection",
    description:
      "Performed Explaratory data analysis on Insurance data utilising pandas for data manipulation and analysis ,mumpy for computations and matplotlib pyplot for plotting and visualisations .",
    url: "https://github.com/JoanChesire/Insurance_Fraud_Detection",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
