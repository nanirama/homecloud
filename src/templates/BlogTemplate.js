import React, { useState } from "react"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import Layout from '../components/Layout';
import DeserveSection from "../components/DeserveSection";
// import SEO from '../components/SEO';
import Blog from '../components/blog';
// import { Header } from '../components/Blog';
// import styled from "styled-components";

const BlogTemplate = ({data, location}) => {
  const {
    prismicPost: { data: post },
  } = data;


  return (
    <Layout>
      <Wrapper>
        <Container>
            <Blog data={post} location={location}/>
        </Container>
      </Wrapper>
      <DeserveSection/>
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
  query BlogBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      data {
        title{
          html
          text 
        }
        excerpts {
          html
          text
        }   
        content {
          html
          text
        }
        featured_image {
          url
          gatsbyImageData(layout: FULL_WIDTH)
        }  
        author {
          document {
            ... on PrismicPostAuthor {
              id
              data {
                name {
                  text
                  html
                }
                image {
                  gatsbyImageData(layout: FIXED, width: 52)
                }
              }
            }
          }
        }      
      }
    }
  }
`;

const Wrapper = styled.div`
padding:80px 0 60px 0;
@media (max-width: 800px) {
padding:0px 0 40px 0;
}
`;
const Container = styled.div`
max-width: 840px;
margin: 0 auto;
padding: 0 15px;
position:relative;
`;
