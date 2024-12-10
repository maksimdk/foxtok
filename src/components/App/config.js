import { v4 as uuidv4 } from 'uuid';

// images
import nasa from '../../assets/images/nasa_official.jpg';
import nationalGeographic from '../../assets/images/national_geographic.jpg';
import emilyKo from '../../assets/images/emily_ko.jpg';
import happyFamily from '../../assets/images/happy_family.jpg';

// videos
import nasaVideo from '../../assets/videos/nasa_official.mp4';
import nationalGeographicVideo from '../../assets/videos/national_geographic.mp4';
import emilyKoVideo from '../../assets/videos/emily_ko.mp4';
import happyFamilyVideo from '../../assets/videos/happy_family.mp4';

export const posts = [
  {
    id: uuidv4(),
    avatar: nasa,
    altText: 'Nasa official',
    author: 'nasa_official',
    video: nasaVideo,
  },
  {
    id: uuidv4(),
    avatar: nationalGeographic,
    altText: 'National Geographic',
    author: 'national_geographic',
    video: nationalGeographicVideo,
  },
  {
    id: uuidv4(),
    avatar: emilyKo,
    altText: 'Emily Ko',
    author: 'emily_ko',
    video: emilyKoVideo,
  },
  {
    id: uuidv4(),
    avatar: happyFamily,
    altText: 'Happy famaly',
    author: 'happy_family',
    video: happyFamilyVideo,
  },
];
