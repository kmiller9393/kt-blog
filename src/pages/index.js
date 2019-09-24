import React, { Component } from 'react';
import { withRouteData } from 'react-static';
import RecentPosts from '../frontend/components/RecentPosts/RecentPosts';
import Footer from '../frontend/components/Footer/Footer';
import Navbar from '../frontend/components/Navbar/Navbar';

class index extends Component {
  getPosts = () => {
    const { posts } = this.props;
    let newPosts = [];

    for (let i = 1; i <= 3; i++) {
      if (posts[posts.length - i]) {
        newPosts.push(posts[posts.length - i]);
      }
    }

    return newPosts;
  };

  render() {
    const { handle } = this.props.authors[0].avatar;
    const { bibliography } = this.props.authors[0];

    const recentPosts = this.getPosts();

    return (
      <div className="home-container">
        <Navbar />
        <article className="image-container banner-image">
          <aside className="author-image-container">
            <img
              className="author-image"
              src={`https://media.graphcms.com/${handle}`}
              alt="Kimaleen"
            />
          </aside>
          <aside className="bio-text">
            <p>{bibliography}</p>
            <img
              src={`https://media.graphcms.com/${this.props.signatures[0].image.handle}`}
              className="signature"
              alt="signature"
            />
          </aside>
        </article>
        <RecentPosts posts={recentPosts} />
        <Footer />
      </div>
    );
  }
}

export default withRouteData(index);
