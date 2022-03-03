import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick"

import { StaticImage } from "gatsby-plugin-image"
const TestimonialsSection = () => {
  const { Testimonials } = useStaticQuery(
    graphql`
      query {
        Testimonials: allPrismicTestimonials {
          edges {
            node {
              id
              data {
                name {
                  text
                }
                designation
                testimonials {
                  html
                  text
                }
                picture {
                  gatsbyImageData(width: 55, height: 55, layout: FIXED)
                }
              }
            }
          }
        }
      }
    `
  )
  const settings = {
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "2%",
    speed: 500,
    variableWidth: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Wrapper>
      <Container>
        <h2>Trusted by Brokers and Homeowners</h2>
        <Slider {...settings} className="testimonials">
          { Testimonials && Testimonials.edges.map((item, index)=>{
            return(
              <TmBox key={index}>
                <TmInner>
                  <Paragraph>{item.node.data.testimonials.text}</Paragraph>
                  <svg
                    width="116"
                    height="20"
                    viewBox="0 0 116 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.10588 2.63379L7.07162 6.72768L2.52022 7.38629C1.70402 7.50379 1.37692 8.50253 1.96882 9.07456L5.26165 12.2594L4.48284 16.7583C4.34265 17.5716 5.20558 18.1807 5.92832 17.8004L9.99996 15.6761L14.0716 17.8004C14.7943 18.1776 15.6573 17.5716 15.5171 16.7583L14.7383 12.2594L18.0311 9.07456C18.623 8.50253 18.2959 7.50379 17.4797 7.38629L12.9283 6.72768L10.894 2.63379C10.5296 1.90406 9.47348 1.89478 9.10588 2.63379Z"
                      fill="#FFA126"
                    />
                    <path
                      d="M33.1059 2.63379L31.0716 6.72768L26.5202 7.38629C25.704 7.50379 25.3769 8.50253 25.9688 9.07456L29.2617 12.2594L28.4828 16.7583C28.3426 17.5716 29.2056 18.1807 29.9283 17.8004L34 15.6761L38.0716 17.8004C38.7943 18.1776 39.6573 17.5716 39.5171 16.7583L38.7383 12.2594L42.0311 9.07456C42.623 8.50253 42.2959 7.50379 41.4797 7.38629L36.9283 6.72768L34.894 2.63379C34.5296 1.90406 33.4735 1.89478 33.1059 2.63379Z"
                      fill="#FFA126"
                    />
                    <path
                      d="M57.1059 2.63379L55.0716 6.72768L50.5202 7.38629C49.704 7.50379 49.3769 8.50253 49.9688 9.07456L53.2617 12.2594L52.4828 16.7583C52.3426 17.5716 53.2056 18.1807 53.9283 17.8004L58 15.6761L62.0716 17.8004C62.7943 18.1776 63.6573 17.5716 63.5171 16.7583L62.7383 12.2594L66.0311 9.07456C66.623 8.50253 66.2959 7.50379 65.4797 7.38629L60.9283 6.72768L58.894 2.63379C58.5296 1.90406 57.4735 1.89478 57.1059 2.63379Z"
                      fill="#FFA126"
                    />
                    <path
                      d="M81.1059 2.63379L79.0716 6.72768L74.5202 7.38629C73.704 7.50379 73.3769 8.50253 73.9688 9.07456L77.2617 12.2594L76.4828 16.7583C76.3426 17.5716 77.2056 18.1807 77.9283 17.8004L82 15.6761L86.0716 17.8004C86.7943 18.1776 87.6573 17.5716 87.5171 16.7583L86.7383 12.2594L90.0311 9.07456C90.623 8.50253 90.2959 7.50379 89.4797 7.38629L84.9283 6.72768L82.894 2.63379C82.5296 1.90406 81.4735 1.89478 81.1059 2.63379Z"
                      fill="#FFA126"
                    />
                    <path
                      d="M105.106 2.63379L103.072 6.72768L98.5202 7.38629C97.704 7.50379 97.3769 8.50253 97.9688 9.07456L101.262 12.2594L100.483 16.7583C100.343 17.5716 101.206 18.1807 101.928 17.8004L106 15.6761L110.072 17.8004C110.794 18.1776 111.657 17.5716 111.517 16.7583L110.738 12.2594L114.031 9.07456C114.623 8.50253 114.296 7.50379 113.48 7.38629L108.928 6.72768L106.894 2.63379C106.53 1.90406 105.473 1.89478 105.106 2.63379Z"
                      fill="#FFA126"
                    />
                  </svg>
                  <AuthorBox>
                    <GatsbyImage image={getImage(item.node.data.picture)} alt={item.node.data.name.text} />
                    <Author>
                    {item.node.data.name.text}
                      <br />
                      <span>{item.node.data.designation}</span>
                    </Author>
                  </AuthorBox>
                </TmInner>
              </TmBox>
            )
          })}
        </Slider>
      </Container>
    </Wrapper>
  )
}
export default TestimonialsSection

const Wrapper = styled.div`
  padding: 120px 0;
  background: #f6f7f9;
  text-align: center;
  @media (max-width: 991px) {
    padding: 70px 0;
  }
  @media (max-width: 767px) {
    padding: 40px 0 130px 0;
    p br {
      display: none;
    }
  }
`
const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 15px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px 30px;
  text-align: left;
  margin: 50px 0 0 0;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
const Item = styled.div``
const TmBox = styled.div`
  padding: 0 12px;
  @media (max-width: 767px) {
    padding: 0px;
  }
`
const TmInner = styled.div`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.13);
  border-radius: 6px;
  background-color: #fff;
  padding: 24px;
  text-align: left;
  min-height: 250px;
  @media (max-width: 480px) {
    padding: 24px 15px;
  }
`
const Paragraph = styled.p`
  margin: 12px 0 14px 0;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.07875px;
  color: #333d47;
`
const AuthorBox = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center; 
  img{
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
`
const Author = styled.h6`
  padding-left: 25px;
  span {
    color: #6c7884;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.07875px;
    margin-top: 8px;
    display: inline-block;
  }
`