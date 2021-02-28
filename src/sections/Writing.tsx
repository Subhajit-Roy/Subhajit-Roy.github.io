import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
// import { useMediumQuery } from '../queries/useMediumQuery';
import { Post } from '../components/Post';
import { graphql, useStaticQuery } from 'gatsby';

export default function Writing(){
  // const { posts } = useMediumQuery();
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            date
            slug
            title
            date
            img
            description
            time
          }
        }
      }
    }
  }
  `)
  const points = data.allMarkdownRemark.edges
  return (
    <Section.Container id="writing" Background={Background}>
      <Section.Header name="Blogs" icon="✍️" label="writing" />
      <CardContainer minWidth="300px">
        <Fade direction="down" triggerOnce cascade damping={0.5}>
            {points.map(edge => (
              <Post title={edge.node.frontmatter.title} date={edge.node.frontmatter.date} url={edge.node.frontmatter.slug} time ={edge.node.frontmatter.time} text={edge.node.frontmatter.description} cover={edge.node.frontmatter.img}/>
            ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};


const Background = () => (
  <>
    <Triangle
      color="muted"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      position="top-left"
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      position="bottom-left"
    />

    <Triangle
      color="primary"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

// export default Writing;
