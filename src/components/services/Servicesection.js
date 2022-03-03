import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const Servicesection = () => {
  const {
    ServiceBanner,
    ServiceBanner2,
    ServiceLineDot1,
    ServiceLineDot2,
    ServiceLineDot3,
    ServiceLineDot4,
    ServiceLineDot5,
    ServiceLineDot6,
    ServiceLineDot7,
  } = useStaticQuery(
    graphql`
      query {
        ServiceBanner: file(relativePath: { eq: "servicebanner.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        ServiceBanner2: file(relativePath: { eq: "servicebanner2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
          publicURL
        }
        ServiceLineDot1: file(relativePath: { eq: "line-dot1.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 65)
          }
        }
        ServiceLineDot2: file(relativePath: { eq: "line-dot2.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 115)
          }
        }
        ServiceLineDot3: file(relativePath: { eq: "line-dot3.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 94)
          }
        }
        ServiceLineDot4: file(relativePath: { eq: "line-dot4.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 63)
          }
        }
        ServiceLineDot5: file(relativePath: { eq: "line-dot5.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 68)
          }
        }
        ServiceLineDot6: file(relativePath: { eq: "line-dot6.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 155)
          }
        }
        ServiceLineDot7: file(relativePath: { eq: "line-dot7.png" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 125)
          }
        }
      }
    `
  )

  const image1 = getImage(ServiceBanner)
  const image2 = getImage(ServiceBanner2)

  const bgImage1 = convertToBgImage(image1)
  const bgImage2 = convertToBgImage(image2)

  const serviceBg1 = ServiceBanner.childImageSharp.fluid.srcWebp
  const serviceBg2 = ServiceBanner2.childImageSharp.fluid.srcWebp

  const [anim, setAnim] = useState(true)
  const ChangeAnim = () => {
    setAnim(!anim)
    if (anim) {
      gsap.to(".circle1", 2, {
        x: 100,
        y: 50,
        ease: "circle",
      })
      gsap.to(".circle2", 1, {
        x: 100,
        y: 100,
        opacity: 0,
        scale: 0.1,
        ease: "circle",
      })
      gsap.to(".circle3", 2, {
        x: 160,
        y: -160,
        ease: "circle",
      })
      gsap.to(".circle4", 2, {
        x: -320,
        y: -30,
        ease: "circle",
      }) 
    } else {
      gsap.to(".circle1", 2, {
        x: 0,
        y: 0,
        ease: "circle",
      })
      gsap.to(".circle2", 2, {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "circle",
      })
      gsap.to(".circle3", 2, {
        x: 0,
        y: 0,
        ease: "circle",
      })
      gsap.to(".circle4", 2, {
        x: 0,
        y: 0,
        ease: "circle",
      })
    }
  }
  useEffect(() => {}, [anim])
  return (
    <Wrapper>
            <BgChange
        imgUrl={anim ? serviceBg1 : serviceBg2}
      >
        <Container>
          <ArrowLeft onClick={ChangeAnim}>
            <svg
              width="15"
              height="28"
              viewBox="0 0 15 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.174 27.1235L14.5966 26.7009C14.8768 26.4208 14.8768 25.9666 14.5966 25.6864L2.91058 14.0003L14.5966 2.31419C14.8768 2.03407 14.8768 1.57988 14.5966 1.29971L14.174 0.87708C13.8938 0.596963 13.4396 0.596963 13.1595 0.87708L0.543462 13.4931C0.263345 13.7732 0.263345 14.2274 0.543462 14.5076L13.1595 27.1236C13.4396 27.4037 13.8938 27.4037 14.174 27.1235Z"
                fill="white"
              />
            </svg>
          </ArrowLeft>
          <ServiceBlock>
            <ServBox className="circle1">
              {anim ? (
                <>
                <Image>
                <GatsbyImage image={getImage(ServiceLineDot1)} />
               </Image>
                <Box>
                  <Title>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2917 1.66699H2.70841C2.13224 1.66699 1.66675 2.13249 1.66675 2.70866V6.87533C1.66675 7.4515 2.13224 7.91699 2.70841 7.91699H17.2917C17.8679 7.91699 18.3334 7.4515 18.3334 6.87533V2.70866C18.3334 2.13249 17.8679 1.66699 17.2917 1.66699ZM2.70841 18.3337H12.0834V14.167H2.70841V18.3337ZM7.91675 13.1253H17.2917V8.95866H7.91675V13.1253ZM2.70841 8.95866V13.1253H6.87508V8.95866H2.70841ZM13.1251 18.3337H17.2917V14.167H13.1251V18.3337Z"
                        fill="white"
                      />
                    </svg>
                    <h6>Stairway</h6>
                  </Title>
                  <p>Material: Wood</p>
                  <p>
                    Handrails{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                  </p>
                  <p>
                    Lightning{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                  </p>
                </Box>
                </>
              ) : (
                <>
                <Image>
                <GatsbyImage image={getImage(ServiceLineDot5)} />
               </Image>
                <Box>
                  <Title>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2917 1.66699H2.70841C2.13224 1.66699 1.66675 2.13249 1.66675 2.70866V6.87533C1.66675 7.4515 2.13224 7.91699 2.70841 7.91699H17.2917C17.8679 7.91699 18.3334 7.4515 18.3334 6.87533V2.70866C18.3334 2.13249 17.8679 1.66699 17.2917 1.66699ZM2.70841 18.3337H12.0834V14.167H2.70841V18.3337ZM7.91675 13.1253H17.2917V8.95866H7.91675V13.1253ZM2.70841 8.95866V13.1253H6.87508V8.95866H2.70841ZM13.1251 18.3337H17.2917V14.167H13.1251V18.3337Z"
                        fill="white"
                      />
                    </svg>
                    <h6>Stairway</h6>
                  </Title>
                  <p>Material: Wrought Iron</p>
                  <p>
                    Handrails{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                  </p>
                  <p>
                  Risers & Treads{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                  </p>
                </Box>
                </>
              )}
            </ServBox>
            <ServBox className="circle2">
              {anim ? (
                <>
                 <Image>
                <GatsbyImage image={getImage(ServiceLineDot2)} />
              </Image>
                <Box>
                  <Title>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3571 1.66699H4.64286C4.07454 1.66699 3.52949 1.88649 3.12763 2.27719C2.72576 2.66789 2.5 3.19779 2.5 3.75033L2.5 17.292C2.5 17.5683 2.61288 17.8332 2.81381 18.0286C3.01475 18.2239 3.28727 18.3337 3.57143 18.3337H16.4286C16.7127 18.3337 16.9853 18.2239 17.1862 18.0286C17.3871 17.8332 17.5 17.5683 17.5 17.292V3.75033C17.5 3.19779 17.2742 2.66789 16.8724 2.27719C16.4705 1.88649 15.9255 1.66699 15.3571 1.66699V1.66699ZM8.66071 3.75033C8.81965 3.75033 8.97501 3.79615 9.10715 3.88199C9.2393 3.96783 9.3423 4.08985 9.40312 4.2326C9.46394 4.37536 9.47985 4.53244 9.44885 4.68399C9.41784 4.83554 9.34131 4.97474 9.22892 5.084C9.11654 5.19326 8.97336 5.26767 8.81748 5.29781C8.66161 5.32796 8.50003 5.31249 8.3532 5.25336C8.20637 5.19423 8.08087 5.09409 7.99257 4.96562C7.90427 4.83714 7.85714 4.68609 7.85714 4.53158C7.85714 4.32438 7.9418 4.12566 8.0925 3.97915C8.2432 3.83264 8.44759 3.75033 8.66071 3.75033ZM4.64286 4.53158C4.64286 4.37706 4.68999 4.22601 4.77828 4.09754C4.86658 3.96906 4.99208 3.86893 5.13892 3.80979C5.28575 3.75066 5.44732 3.73519 5.6032 3.76534C5.75908 3.79548 5.90226 3.86989 6.01464 3.97915C6.12702 4.08841 6.20355 4.22761 6.23456 4.37916C6.26557 4.53071 6.24965 4.68779 6.18883 4.83055C6.12801 4.9733 6.02502 5.09532 5.89287 5.18116C5.76072 5.26701 5.60536 5.31283 5.44643 5.31283C5.23331 5.31283 5.02892 5.23052 4.87822 5.084C4.72752 4.93749 4.64286 4.73878 4.64286 4.53158ZM10 16.2503C9.04641 16.2503 8.11424 15.9754 7.32136 15.4603C6.52848 14.9453 5.9105 14.2132 5.54558 13.3567C5.18066 12.5001 5.08518 11.5576 5.27121 10.6483C5.45725 9.73905 5.91645 8.90382 6.59073 8.24826C7.26502 7.5927 8.12412 7.14626 9.05939 6.96539C9.99465 6.78453 10.9641 6.87736 11.8451 7.23214C12.7261 7.58693 13.4791 8.18774 14.0089 8.95859C14.5387 9.72945 14.8214 10.6357 14.8214 11.5628C14.8214 12.806 14.3135 13.9983 13.4093 14.8774C12.5051 15.7565 11.2787 16.2503 10 16.2503ZM11.2345 10.9229C11.0745 11.0841 10.8827 11.2123 10.6706 11.2999C10.4585 11.3875 10.2304 11.4327 10 11.4327C9.76956 11.4327 9.54148 11.3875 9.32938 11.2999C9.11728 11.2123 8.92551 11.0841 8.76551 10.9229C8.6067 11.0815 8.4173 11.2083 8.20811 11.2958C7.99892 11.3833 7.77405 11.4299 7.54633 11.4329C7.31862 11.436 7.09252 11.3953 6.88095 11.3134C6.66938 11.2315 6.47649 11.1098 6.31328 10.9554C6.27456 11.1558 6.25339 11.359 6.25 11.5628C6.25 12.5298 6.64509 13.4571 7.34835 14.1408C8.05161 14.8245 9.00544 15.2087 10 15.2087C10.9946 15.2087 11.9484 14.8245 12.6516 14.1408C13.3549 13.4571 13.75 12.5298 13.75 11.5628C13.7467 11.3587 13.7255 11.1551 13.6867 10.9544C13.5235 11.1088 13.3306 11.2305 13.119 11.3124C12.9075 11.3944 12.6814 11.435 12.4537 11.432C12.226 11.4289 12.0011 11.3823 11.7919 11.2948C11.5827 11.2073 11.3933 11.0806 11.2345 10.9219V10.9229Z"
                        fill="white"
                      />
                    </svg>
                    <h6>Oven</h6>
                  </Title>
                  <p>Remaining Life: 6 yrs</p>
                  <p>Positive Reviews</p>
                  <p>
                    No Recalls{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                  </p>
                </Box>
                </>
              ) : (
                <>
                <Image>
                <GatsbyImage image={getImage(ServiceLineDot2)} />
              </Image>
                <Box>
                  <Title>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.3571 1.66699H4.64286C4.07454 1.66699 3.52949 1.88649 3.12763 2.27719C2.72576 2.66789 2.5 3.19779 2.5 3.75033L2.5 17.292C2.5 17.5683 2.61288 17.8332 2.81381 18.0286C3.01475 18.2239 3.28727 18.3337 3.57143 18.3337H16.4286C16.7127 18.3337 16.9853 18.2239 17.1862 18.0286C17.3871 17.8332 17.5 17.5683 17.5 17.292V3.75033C17.5 3.19779 17.2742 2.66789 16.8724 2.27719C16.4705 1.88649 15.9255 1.66699 15.3571 1.66699V1.66699ZM8.66071 3.75033C8.81965 3.75033 8.97501 3.79615 9.10715 3.88199C9.2393 3.96783 9.3423 4.08985 9.40312 4.2326C9.46394 4.37536 9.47985 4.53244 9.44885 4.68399C9.41784 4.83554 9.34131 4.97474 9.22892 5.084C9.11654 5.19326 8.97336 5.26767 8.81748 5.29781C8.66161 5.32796 8.50003 5.31249 8.3532 5.25336C8.20637 5.19423 8.08087 5.09409 7.99257 4.96562C7.90427 4.83714 7.85714 4.68609 7.85714 4.53158C7.85714 4.32438 7.9418 4.12566 8.0925 3.97915C8.2432 3.83264 8.44759 3.75033 8.66071 3.75033ZM4.64286 4.53158C4.64286 4.37706 4.68999 4.22601 4.77828 4.09754C4.86658 3.96906 4.99208 3.86893 5.13892 3.80979C5.28575 3.75066 5.44732 3.73519 5.6032 3.76534C5.75908 3.79548 5.90226 3.86989 6.01464 3.97915C6.12702 4.08841 6.20355 4.22761 6.23456 4.37916C6.26557 4.53071 6.24965 4.68779 6.18883 4.83055C6.12801 4.9733 6.02502 5.09532 5.89287 5.18116C5.76072 5.26701 5.60536 5.31283 5.44643 5.31283C5.23331 5.31283 5.02892 5.23052 4.87822 5.084C4.72752 4.93749 4.64286 4.73878 4.64286 4.53158ZM10 16.2503C9.04641 16.2503 8.11424 15.9754 7.32136 15.4603C6.52848 14.9453 5.9105 14.2132 5.54558 13.3567C5.18066 12.5001 5.08518 11.5576 5.27121 10.6483C5.45725 9.73905 5.91645 8.90382 6.59073 8.24826C7.26502 7.5927 8.12412 7.14626 9.05939 6.96539C9.99465 6.78453 10.9641 6.87736 11.8451 7.23214C12.7261 7.58693 13.4791 8.18774 14.0089 8.95859C14.5387 9.72945 14.8214 10.6357 14.8214 11.5628C14.8214 12.806 14.3135 13.9983 13.4093 14.8774C12.5051 15.7565 11.2787 16.2503 10 16.2503ZM11.2345 10.9229C11.0745 11.0841 10.8827 11.2123 10.6706 11.2999C10.4585 11.3875 10.2304 11.4327 10 11.4327C9.76956 11.4327 9.54148 11.3875 9.32938 11.2999C9.11728 11.2123 8.92551 11.0841 8.76551 10.9229C8.6067 11.0815 8.4173 11.2083 8.20811 11.2958C7.99892 11.3833 7.77405 11.4299 7.54633 11.4329C7.31862 11.436 7.09252 11.3953 6.88095 11.3134C6.66938 11.2315 6.47649 11.1098 6.31328 10.9554C6.27456 11.1558 6.25339 11.359 6.25 11.5628C6.25 12.5298 6.64509 13.4571 7.34835 14.1408C8.05161 14.8245 9.00544 15.2087 10 15.2087C10.9946 15.2087 11.9484 14.8245 12.6516 14.1408C13.3549 13.4571 13.75 12.5298 13.75 11.5628C13.7467 11.3587 13.7255 11.1551 13.6867 10.9544C13.5235 11.1088 13.3306 11.2305 13.119 11.3124C12.9075 11.3944 12.6814 11.435 12.4537 11.432C12.226 11.4289 12.0011 11.3823 11.7919 11.2948C11.5827 11.2073 11.3933 11.0806 11.2345 10.9219V10.9229Z"
                        fill="white"
                      />
                    </svg>
                    <h6>Oven 2</h6>
                  </Title>
                  <p>Remaining Life: 6 yrs</p>
                  <p>Positive Reviews</p>
                  <p>
                    No Recalls{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                  </p>
                </Box>
                </>
              )}
            </ServBox>
            <ServBox className="circle3">
              {anim ? (
                <>
                 <Image>
                <GatsbyImage image={getImage(ServiceLineDot3)} />
              </Image>
                <Box>
                  <Title>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2083 1.66699H4.79167C4.21647 1.66699 3.75 2.13346 3.75 2.70866V10.0003H16.25V2.70866C16.25 2.13346 15.7835 1.66699 15.2083 1.66699ZM3.75 12.0837C3.75 13.2344 4.68294 14.167 5.83333 14.167H7.91667V16.2503C7.91667 17.401 8.84961 18.3337 10 18.3337C11.1504 18.3337 12.0833 17.401 12.0833 16.2503V14.167H14.1667C15.3171 14.167 16.25 13.2344 16.25 12.0837V11.042H3.75V12.0837ZM10 15.4691C10.4313 15.4691 10.7812 15.8187 10.7812 16.2503C10.7812 16.6816 10.4313 17.0316 10 17.0316C9.56868 17.0316 9.21875 16.6816 9.21875 16.2503C9.21875 15.8187 9.56868 15.4691 10 15.4691Z"
                        fill="white"
                      />
                    </svg>
                    <h6>Paint Color</h6>
                  </Title>
                  <p>Benjamin Moore</p>
                  <p>Paper White</p>
                  <p>Code: OC-55</p>
                  <p>1 gal Extra</p>
                </Box>
                </>
              ) : (
                <>
                <Box>
                  <Title>
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2083 0.666992H1.79167C1.21647 0.666992 0.75 1.13346 0.75 1.70866V9.00033H13.25V1.70866C13.25 1.13346 12.7835 0.666992 12.2083 0.666992ZM0.75 11.0837C0.75 12.2344 1.68294 13.167 2.83333 13.167H4.91667V15.2503C4.91667 16.401 5.84961 17.3337 7 17.3337C8.15039 17.3337 9.08333 16.401 9.08333 15.2503V13.167H11.1667C12.3171 13.167 13.25 12.2344 13.25 11.0837V10.042H0.75V11.0837ZM7 14.4691C7.43131 14.4691 7.78125 14.8187 7.78125 15.2503C7.78125 15.6816 7.43131 16.0316 7 16.0316C6.56868 16.0316 6.21875 15.6816 6.21875 15.2503C6.21875 14.8187 6.56868 14.4691 7 14.4691Z" fill="white"/>
</svg>
                    <h6>Deck</h6>
                  </Title>
                  <p>Size: 11 x 15</p>
                  <p>Material: Trex</p>
                  <p>Remaining Life: 10 yr</p>
                  <p>Safety {" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7571 6.54915L7.95829 10.348L6.2428 8.63249C6.03935 8.42904 5.70959 8.42904 5.50647 8.63249C5.30334 8.83594 5.30302 9.16569 5.50647 9.36882L7.5898 11.4521C7.69137 11.5524 7.82483 11.6045 7.95829 11.6045C8.09176 11.6045 8.22483 11.5536 8.32646 11.4519L12.4931 7.28522C12.6966 7.08177 12.6966 6.75202 12.4931 6.54889C12.2897 6.34577 11.9589 6.34408 11.7571 6.54915ZM8.99996 0.666992C4.3971 0.666992 0.666626 4.39746 0.666626 9.00033C0.666626 13.6032 4.3971 17.3337 8.99996 17.3337C13.6028 17.3337 17.3333 13.6032 17.3333 9.00033C17.3333 4.39746 13.6028 0.666992 8.99996 0.666992ZM8.99996 16.292C4.97978 16.292 1.70829 13.0205 1.70829 9.00033C1.70829 4.98014 4.97978 1.70866 8.99996 1.70866C13.0201 1.70866 16.2916 4.98014 16.2916 9.00033C16.2916 13.0205 13.0201 16.292 8.99996 16.292Z"
                        fill="#30CD7C"
                      />
                    </svg>
                    </p>
                </Box>
                <Image>
                <GatsbyImage image={getImage(ServiceLineDot6)} />
              </Image>
                </>
              )}
            </ServBox>
            <ServBox className="circle4">
              {anim ? (
                <>
                <Box>
                  <Title>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6666 11.6663H8.33329C7.87314 11.6663 7.49996 12.0395 7.49996 12.4997V15.833C7.49996 16.2932 7.87314 16.6663 8.33329 16.6663H11.6666C12.1268 16.6663 12.5 16.2932 12.5 15.833V12.4997C12.5 12.0395 12.1268 11.6663 11.6666 11.6663ZM6.66663 4.16634C6.66663 3.70618 6.29345 3.33301 5.83329 3.33301H2.49996C2.0398 3.33301 1.66663 3.70618 1.66663 4.16634V7.49967C1.66663 7.95983 2.0398 8.33301 2.49996 8.33301H4.99267L6.89788 11.6674C7.18694 11.171 7.71871 10.833 8.33329 10.833H8.34058L6.66663 7.90358V6.66634H12.5V4.99967H6.66663V4.16634ZM17.5 3.33301H14.1666C13.7065 3.33301 13.3333 3.70618 13.3333 4.16634V7.49967C13.3333 7.95983 13.7065 8.33301 14.1666 8.33301H17.5C17.9601 8.33301 18.3333 7.95983 18.3333 7.49967V4.16634C18.3333 3.70618 17.9601 3.33301 17.5 3.33301Z"
                        fill="white"
                      />
                    </svg>
                    <h6>Misc</h6>
                  </Title>
                  <p>Garbage Disposal</p>
                  <p>
                    No Drain Air Gap{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.54883 6.54915C6.75066 6.34408 7.08269 6.34408 7.28451 6.54915L9.00001 8.26465L10.7155 6.54915C10.9173 6.34408 11.2494 6.34408 11.4512 6.54915C11.6563 6.75098 11.6563 7.08301 11.4512 7.28483L9.73568 9.00033L11.4512 10.7158C11.6563 10.9176 11.6563 11.2497 11.4512 11.4515C11.2494 11.6566 10.9173 11.6566 10.7155 11.4515L9.00001 9.736L7.28451 11.4515C7.08269 11.6566 6.75066 11.6566 6.54883 11.4515C6.34376 11.2497 6.34376 10.9176 6.54883 10.7158L8.26433 9.00033L6.54883 7.28483C6.34376 7.08301 6.34376 6.75098 6.54883 6.54915ZM17.3333 9.00033C17.3333 13.6032 13.6029 17.3337 9.00001 17.3337C4.39714 17.3337 0.666672 13.6032 0.666672 9.00033C0.666672 4.39746 4.39714 0.666992 9.00001 0.666992C13.6029 0.666992 17.3333 4.39746 17.3333 9.00033ZM9.00001 1.70866C4.97331 1.70866 1.70834 4.97363 1.70834 9.00033C1.70834 13.027 4.97331 16.292 9.00001 16.292C13.0267 16.292 16.2917 13.027 16.2917 9.00033C16.2917 4.97363 13.0267 1.70866 9.00001 1.70866Z"
                        fill="#DB4343"
                      />
                    </svg>
                  </p>
                </Box>
                <Image>
                <GatsbyImage image={getImage(ServiceLineDot4)} />
              </Image>
              </>
              ) : (
                <>
                <Box>
                  <Title>
                  <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4072 0.5H1.59243C1.34686 0.5 1.11135 0.598772 0.937701 0.774587C0.764057 0.950403 0.666504 1.18886 0.666504 1.4375L0.666504 6.125C0.666504 6.37364 0.764057 6.6121 0.937701 6.78791C1.11135 6.96373 1.34686 7.0625 1.59243 7.0625H16.4072C16.6528 7.0625 16.8883 6.96373 17.062 6.78791C17.2356 6.6121 17.3332 6.37364 17.3332 6.125V1.4375C17.3332 1.18886 17.2356 0.950403 17.062 0.774587C16.8883 0.598772 16.6528 0.5 16.4072 0.5V0.5ZM15.4813 5.1875H2.51836V4.25H15.4813V5.1875ZM6.9165 12.9219C6.9165 13.2327 6.79456 13.5307 6.57751 13.7505C6.36045 13.9703 6.06606 14.0938 5.7591 14.0938H5.57912C5.00042 14.0938 4.47437 13.6871 4.38468 13.1091C4.30134 12.5697 4.58491 12.1065 5.01662 11.8941C5.18242 11.8127 5.29613 11.6524 5.29613 11.4655V10.9493C5.29602 10.874 5.27811 10.7999 5.2439 10.7331C5.2097 10.6662 5.16019 10.6086 5.09952 10.5651C5.03885 10.5216 4.96878 10.4935 4.89516 10.483C4.82154 10.4725 4.74651 10.48 4.67634 10.5049C4.12877 10.6992 3.66368 11.078 3.35884 11.5779C3.054 12.0778 2.92788 12.6684 3.00157 13.2512C3.16245 14.5572 4.32825 15.5 5.62802 15.5H5.7591C6.43442 15.5 7.08208 15.2284 7.5596 14.7449C8.03712 14.2614 8.30539 13.6056 8.30539 12.9219V8H6.9165V12.9219ZM13.3233 9.56738C13.2532 9.54251 13.1781 9.535 13.1045 9.54548C13.0309 9.55597 12.9608 9.58414 12.9002 9.62764C12.8395 9.67115 12.79 9.72872 12.7558 9.79556C12.7216 9.86239 12.7037 9.93654 12.7035 10.0118V10.528C12.7035 10.7149 12.8173 10.8752 12.9831 10.9566C13.4148 11.169 13.6983 11.6322 13.615 12.1716C13.5253 12.7496 12.9987 13.1562 12.4206 13.1562H12.2406C11.9336 13.1562 11.6392 13.0328 11.4222 12.813C11.2051 12.5932 11.0832 12.2952 11.0832 11.9844V8H9.69428V11.9844C9.69428 12.6681 9.96255 13.3239 10.4401 13.8074C10.9176 14.2909 11.5653 14.5625 12.2406 14.5625H12.3717C13.6714 14.5625 14.8372 13.6197 14.9981 12.3137C15.0718 11.7309 14.9457 11.1403 14.6408 10.6404C14.336 10.1405 13.8709 9.76172 13.3233 9.56738Z" fill="white"/>
</svg>
                    <h6>Air Conditioner</h6>
                  </Title>
                  <p>Brand: Carrier</p>
                  <p>Remaining Life: 10yr</p>
                  <p>Efficiency: 21 SEER</p>
                  <p>
                  Operation{" "}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.54883 6.54915C6.75066 6.34408 7.08269 6.34408 7.28451 6.54915L9.00001 8.26465L10.7155 6.54915C10.9173 6.34408 11.2494 6.34408 11.4512 6.54915C11.6563 6.75098 11.6563 7.08301 11.4512 7.28483L9.73568 9.00033L11.4512 10.7158C11.6563 10.9176 11.6563 11.2497 11.4512 11.4515C11.2494 11.6566 10.9173 11.6566 10.7155 11.4515L9.00001 9.736L7.28451 11.4515C7.08269 11.6566 6.75066 11.6566 6.54883 11.4515C6.34376 11.2497 6.34376 10.9176 6.54883 10.7158L8.26433 9.00033L6.54883 7.28483C6.34376 7.08301 6.34376 6.75098 6.54883 6.54915ZM17.3333 9.00033C17.3333 13.6032 13.6029 17.3337 9.00001 17.3337C4.39714 17.3337 0.666672 13.6032 0.666672 9.00033C0.666672 4.39746 4.39714 0.666992 9.00001 0.666992C13.6029 0.666992 17.3333 4.39746 17.3333 9.00033ZM9.00001 1.70866C4.97331 1.70866 1.70834 4.97363 1.70834 9.00033C1.70834 13.027 4.97331 16.292 9.00001 16.292C13.0267 16.292 16.2917 13.027 16.2917 9.00033C16.2917 4.97363 13.0267 1.70866 9.00001 1.70866Z"
                        fill="#DB4343"
                      />
                    </svg>
                  </p>
                </Box>
                <Image>
                <GatsbyImage image={getImage(ServiceLineDot7)} />
              </Image>
              </>
              )}
              
            </ServBox>
          </ServiceBlock>
          {anim ? (
            <Content>
              <Heading>
                Pictures{" "} 
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1636 0.656931L9.84791 0.972556C9.63872 1.18175 9.63872 1.52095 9.84791 1.73019L17.8164 9.69868H1.03571C0.739866 9.69868 0.5 9.93855 0.5 10.2344V10.6808C0.5 10.9767 0.739866 11.2165 1.03571 11.2165H17.8164L9.84791 19.185C9.63872 19.3942 9.63872 19.7334 9.84791 19.9427L10.1636 20.2583C10.3728 20.4675 10.712 20.4675 10.9212 20.2583L20.3431 10.8364C20.5523 10.6272 20.5523 10.288 20.3431 10.0788L10.9212 0.656931C10.712 0.44769 10.3728 0.44769 10.1636 0.656931Z"
                    fill="white"
                  />
                </svg>{" "}
                Insights 
              </Heading>
              <p>
                We extract data and insights from pictures, supplement it with
                3rd party data, and then share it via the HomeCloud App.
              </p>
            </Content>
          ) : (
            <Content>
              <Heading>
                Pictures{" "}
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1636 0.656931L9.84791 0.972556C9.63872 1.18175 9.63872 1.52095 9.84791 1.73019L17.8164 9.69868H1.03571C0.739866 9.69868 0.5 9.93855 0.5 10.2344V10.6808C0.5 10.9767 0.739866 11.2165 1.03571 11.2165H17.8164L9.84791 19.185C9.63872 19.3942 9.63872 19.7334 9.84791 19.9427L10.1636 20.2583C10.3728 20.4675 10.712 20.4675 10.9212 20.2583L20.3431 10.8364C20.5523 10.6272 20.5523 10.288 20.3431 10.0788L10.9212 0.656931C10.712 0.44769 10.3728 0.44769 10.1636 0.656931Z"
                    fill="white"
                  />
                </svg>{" "}
                Insights
              </Heading>
              <p>
                We extract data and insights from pictures, supplement it with
                3rd party data, and then share it via the HomeCloud App.
              </p>
            </Content>
          )}

          <ArrowRight onClick={ChangeAnim}>
            <svg
              width="15"
              height="28"
              viewBox="0 0 15 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.966111 0.877125L0.543425 1.29975C0.263309 1.57987 0.263309 2.03406 0.543425 2.31423L12.2295 14.0003L0.543425 25.6865C0.263309 25.9666 0.263309 26.4208 0.543425 26.7009L0.966111 27.1236C1.24623 27.4037 1.70042 27.4037 1.98053 27.1236L14.5966 14.5076C14.8767 14.2274 14.8767 13.7733 14.5966 13.4931L1.98053 0.877125C1.70042 0.596948 1.24623 0.596948 0.966111 0.877125Z"
                fill="white"
              />
            </svg>
          </ArrowRight>
        </Container>
      </BgChange>
    </Wrapper>
  )
}

export default Servicesection

const BgChange = styled.div`
  background: url(${props => props.imgUrl});
  padding: 40px 0 70px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 500px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.684) 24.28%,
      rgba(0, 0, 0, 0) 84.07%);
    mix-blend-mode: normal;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    width: 100%;
    height: 100%;
  }
`;
const Wrapper = styled.div`
  content-visibility: auto;
  contain-intrinsic-size: 500px;
  position: relative;
  .servicebanner-bg {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        270deg,
        rgba(0, 0, 0, 0.684) 24.28%,
        rgba(0, 0, 0, 0) 84.07%
      );
      mix-blend-mode: normal;
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }
  }
`
const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px;
`
const ServiceBlock = styled.div`
  position: relative;
`;
const ServBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  &:nth-child(1) {
    left: 2%;
    top: 0;
    @media only screen and (min-width: 992px) and (max-width: 1100px) {
      left: 0%;
    }
    @media (max-width: 991px) {
      display: none;
    }
  }
  &:nth-child(2) {
    left: 19%;
    top: 0%;
    margin-top: 100px;
    span {
      margin-top: 65px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1100px) {
      left: 15%;
      margin-top: 80px;
    }

  }
  &:nth-child(3) {
    left: 48%;
    top: 0%;
    margin-top: 140px;
    span {
      margin-top: 24px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1100px) {
      left: 46%;
      margin-top: 140px;
    }
 
  }
  &:nth-child(4) {
    left: 78%;
    top: 30%;
    margin-top: 210px;
    span {
      margin-top: 40px;
    }
    @media only screen and (min-width: 1101px) and (max-width: 1270px) {
      left: 77%;
    }
    @media only screen and (min-width: 992px) and (max-width: 1100px) {
      left: 75%;
    }
  }
  p {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    margin: 0 0 4px 0;
    svg {
      float: right;
    }
  }
`;
const Box = styled.div`
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 12px 16px;
  width: 180px;
  @media only screen and (min-width: 992px) and (max-width: 1100px) {
    width:170px;
  }
`;
const Image = styled.span`
  margin-top: 45px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  h6 {
    color: #fff;
    letter-spacing: -0.08px;
    font-size: 14px;
    padding-left: 10px;
  }
`;
const Content = styled.div`
  position: absolute;
  bottom: 45px;
  left: 10.5%;
  @media (max-width: 1200px) {
    left: 5%;
    bottom: 30px;
  }
  p {
    color: #fff;
    max-width: 275px;
  }
`
const Heading = styled.h2`
  color: #fff;
  font-size: 32px;
  line-height: 43px;
  letter-spacing: -0.44px;
  margin-bottom: 10px;
`
const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  left: 30px;
  cursor: pointer;
`
const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  cursor: pointer;
`
