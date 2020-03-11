import React from 'react';
import { withRouteData } from 'react-static';
import { goToTop } from 'react-scrollable-anchor';
import reversePosts from '../frontend/utils/reversePosts';
import Footer from '../frontend/components/Footer/Footer';
import Navbar from '../frontend/components/Navbar/Navbar';

export default withRouteData(({ summaries, listings }) => (
  <div>
    <Navbar />
    <div className="work-summary">
      <h2 className="work-header">{summaries[0].header}</h2>
      <h4 className="work-subheader">{summaries[0].subheader}</h4>
      <p className="work-content">{summaries[0].content}</p>
    </div>
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
