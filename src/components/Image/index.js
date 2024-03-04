import React from 'react';
import { ImageList, ImageListItem, ImageListItemBar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useMediaQuery from '@mui/material/useMediaQuery';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <ImageList
      sx={{
        width: isMobile ? '100%' : 'auto',
        height: isMobile ? 'auto' : 'auto',
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={isMobile ? 200 : 'auto'}
      gap={isMobile ? 10 : 3}
      cols={isMobile ? 2 : 3}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, isMobile ? 125 : 250, isMobile ? 100 : 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: img3,
    title: 'Joyness',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: img2,
    title: 'Cute',
    author: '@rollelflex_graphy726',
  },
  {
    img: img1,
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: img4,
    title: 'Casual',
    author: '@hjrc33',
  },
  {
    img: img6,
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: img5,
    title: 'FlowerShow',
    author: '@tjdragotta',
  },
  {
    img: img1,
    title: '',
    author: '@katie_wasserman',
  },
  {
    img: img4,
    title: '',
    author: '@silverdalex',
  },
  {
    img: img5,
    title: '',
    author: '@shelleypauls',
  },
  {
    img: img2,
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: img4,
    title: '',
    author: '@southside_customs',
  },
];
