import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import PostListToolbar from '../components/post/PostListToolbar';
import PostCard from '../components/post/PostCard';
import { v4 as uuid } from 'uuid';

const  posts=[
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_2.png',
    title: 'Medium Corporation',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_3.png',
    title: 'Slack',
    totalDownloads: '857'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_4.png',
    title: 'Lyft',
    totalDownloads: '406'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_5.png',
    title: 'GitHub',
    totalDownloads: '835'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
    media: '/static/images/products/product_6.png',
    title: 'Squarespace',
    totalDownloads: '835'
  }
];

const PostList = () => {
  return(
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
       <PostListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {posts.map((post) => (
              <Grid
                item
                key={post.id}
                lg={4}
                md={6}
                xs={12}
              >
                <PostCard post={post} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);}

export default PostList;
