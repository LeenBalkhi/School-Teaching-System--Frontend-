import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import PostListToolbar from '../components/post/PostListToolbar';
import PostCard from '../components/post/PostCard';
import PostDetailsCard from '../components/post/PostDetailsCard';

import { v4 as uuid } from 'uuid';

const  posts=[
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '594'
  }
];

const Post = () => (
  <>
    <Helmet>
      <title>Posts | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Box >
          <Grid
            container
           sx={{
            display: 'flex',
            justifyContent: 'center',
            
          }}
         
           
          >
            {posts.map((post) => (
              <Grid
                item
                key={post.id}
                
                
              >
                <PostDetailsCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            
          }}
        >
          
        </Box>
      </Container>
    </Box>
  </>
);

export default Post;
