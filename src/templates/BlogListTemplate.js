import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import SEO from '../components/SEO';
import BlogIndex from '../components/Blog/BlogIndex';
import DeserveSection from "../components/DeserveSection";
//import Pagination from '../components/Pagination';

const BlogListTemplate = ({ data, pageContext, path, location }) => {
  const {
    allPrismicPost: { edges: blogsData },
  } = data;

 

  // const { basePath, humanPageNumber, categories } = pageContext;

  // const blogs = blogsData.map((blog) => blog.node);

  // if (!blogs) return null;
  return (
    <Layout> 
      <BlogIndex data={blogsData}/>   
      <DeserveSection/>
    </Layout>
  );
};

BlogListTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogListTemplate;

export const data = graphql`
  query($skip: Int!, $limit: Int!) {
    allPrismicPost(
      sort: { fields: last_publication_date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          uid
          id
          data {
            title {
              html
              text
            }
            excerpts {
              html
              text
            }
            featured_image {
              gatsbyImageData(layout: CONSTRAINED)
              url
            }
          }
        }
      }
    }
  }
`;
