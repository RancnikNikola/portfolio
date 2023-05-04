import Me from '../../assets/images/me.png';
import Me2 from '../../assets/images/person.PNG';
import FlipCard from '../flip-card/flip-card.component';

import snowboardEcommerce from '../../assets/images/snowboard-ecommerce.png';
import netflixStripe from '../../assets/images/netflix-stripe.png';
import newsApp from '../../assets/images/news-app.png';
import travelAgency from '../../assets/images/travel-agency.png';
import alienInvasion from '../../assets/images/alien-invasion.png';

import './image-grid.styles.scss';

const ImageGrid = () => {
  const repositories = [
    { 
      title: 'Snowboard e-commerce',
      image: snowboardEcommerce, 
      alt: 'snowboard-ecommerce',
      githubRepo: 'https://github.com/RancnikNikola/snowboard-ecommerce',
      liveSite: 'https://classy-medovik-b018da.netlify.app',
      technologies: [
        'firebase',
        'sass',
        'stripe',
        'JSX',
        'react-router-dom',
        'redux-thunk',
        'redux-logger',
        'redux-persist',
        'reselect',
        'styled-components'
      ]
    },
    { 
      title: 'netflix stripe',
      image: netflixStripe, 
      alt: 'netflix-stripe',
      githubRepo: 'https://github.com/RancnikNikola/netflix-stripe',
      liveSite: 'https://netflix-stripe-f6d24.web.app/' ,
      technologies: [
        'axios',
        'firebase',
        'firebase-tools',
        'sass',
        'stripe',
        'JSX',
        'react-router-dom',
        'react-redux',
      ]
    },
    { 
      title: 'news app',
      image: newsApp, 
      alt: 'news-app',
      githubRepo: 'https://github.com/RancnikNikola/news-app',
      liveSite: '',
      technologies: [
        'sass',
        'JSX',
        'react-router-dom',
        'redux',
        'redux-logger',
        'redux-persist',
        'react-icons'
      ]
    },
    { 
      title: 'travel agency',
      image: travelAgency, 
      alt: 'travel-agency',
      githubRepo: 'https://github.com/RancnikNikola/Travel-agency',
      liveSite: '',
      technologies: [
        'HTML',
        'CSS'
      ]
    },
    { 
      title: 'alien invasion',
      image: alienInvasion, 
      alt: 'alien-invasion',
      githubRepo: 'https://github.com/RancnikNikola/AlienInvasionProject',
      liveSite: '',
      technologies: [
        'python',
        'pygame',

      ]
    },
  ];

  const gridItems = repositories.map((repository) => (
    <div key={repository.image} className="grid-item">
      <FlipCard frontImage={repository.image} backImage={Me2} githubRepo={repository.githubRepo} liveSite={repository.liveSite} title={repository.title} technologies={repository.technologies} />
    </div>
  ));

  return <div className="grid-container">{gridItems}</div>;
}

export default ImageGrid;
