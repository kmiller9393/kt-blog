import React from 'react';
import { withRouteData } from 'react-static';
import { goToTop } from 'react-scrollable-anchor';
import reversePosts from '../frontend/utils/reversePosts';
import Footer from '../frontend/components/Footer/Footer';
import Navbar from '../frontend/components/Navbar/Navbar';

export default withRouteData(({ listings }) => (
  <div>
    <Navbar />
    <h1 className="post-header">Work</h1>
    <div className="blog-container">
      {reversePosts(listings).map(listing => (
        <a
          key={listing.id}
          href={listing.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card"
          onClick={goToTop}
          style={{
            backgroundImage: `url("https://media.graphcms.com/${listing.image.handle}")`
          }}
        >
          <div className="overlay" />
          <h1 className="post-title">{listing.title}</h1>
          <h2 className="sub-header">View Listing</h2>
        </a>
      ))}
    </div>
    <Footer />
  </div>
));
