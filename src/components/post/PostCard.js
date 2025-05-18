import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Button
} from '@material-ui/core';
import {
  NavLink as RouterLink,
  matchPath,
  useLocation
} from 'react-router-dom';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import Badge from "../Badge/Badge.js";


const PostCard = ({ post, ...rest }) =>{ 
  const href='/app/PostDetails/';
  
  return(
    <Button
            component={RouterLink}

        to={href}

    >
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}

  >
    <CardContent>
    
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
        {post.title}
      </Typography>

      {post.description.map((des) => (
          <Badge color="primary">{des}</Badge>
            
            ))}

   

    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <GetAppIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {post.totalDownloads}
            {' '}
            replayed
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
      </Button>

);
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
