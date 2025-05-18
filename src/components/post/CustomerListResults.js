import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import {
 
  CardContent,
  Divider,
  Grid,
 Container,
} from '@material-ui/core';



import React from "react";

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import Badge from "../Badge/Badge.js";
import PostTeacherDetails from './PostTeacherDetails';
import PostCard from './PostCard';


import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
import Button from "../CustomButtons/Button.js";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import Popover from "@material-ui/core/Popover";
// @material-ui/icons
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Close from "@material-ui/icons/Close";
import TeacherProfileDetails from './/TeacherProfileDetails';



import { v4 as uuid } from 'uuid';
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles.js";
const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const user =  {
  id: uuid(),
  createdAt: '04/04/2019',
  description: ['Dropbox is a file hosting ','D hosting  cloud storage',' storage','Dropbox  offers cloud storage',],
  media: '/static/images/products/product_6.png',
  title: 'Squarespace',
  totalDownloads: '835'
};
const CustomerListResults = ({ customers, ...rest }) => {
  const classes = useStyles();
  const [anchorElLeft, setAnchorElLeft] = React.useState(null);
  const [anchorElTop, setAnchorElTop] = React.useState(null);
  const [anchorElBottom, setAnchorElBottom] = React.useState(null);
  const [anchorElRight, setAnchorElRight] = React.useState(null);
  const [classicModal, setClassicModal] = React.useState(false);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [cs, setCstomer] = useState(customers[0]);

  

  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  const handlecustomer = (event, customer) => {
    setCstomer(customer);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) => (
                
                <>
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  onClick={() => {
                    setCstomer(customer);
                    setClassicModal(true);
                  
                  }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.email}
                  </TableCell>
                  <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell>
                  <TableCell>
                    {customer.phone}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
                 <Dialog
                 classes={{
                   root: classes.center,
                   paper: classes.modal,
                 }}
                 open={classicModal}
                 TransitionComponent={Transition}
                 keepMounted
                 onClose={() => setClassicModal(false)}
                 aria-labelledby="classic-modal-slide-title"
                 aria-describedby="classic-modal-slide-description"
               >
                 <DialogTitle
                   id="classic-modal-slide-title"
                   disableTypography
                   className={classes.modalHeader}
                 >
                   <IconButton
                     className={classes.modalCloseButton}
                     key="close"
                     aria-label="Close"
                     color="inherit"
                     onClick={() => setClassicModal(false)}
                   >
                     <Close className={classes.modalClose} />
                   </IconButton>
                   <h4 className={classes.modalTitle}>Modal title</h4>
                 </DialogTitle>
                 <DialogContent
                   id="classic-modal-slide-description"
                   className={classes.modalBody}
                 >
                         <PostTeacherDetails customer={cs} />

                          <TeacherProfileDetails  />


                 </DialogContent>
                 <DialogActions className={classes.modalFooter}>
                   <Button color="transparent" simple>
                     Nice Button
                   </Button>
                   <Button
                     onClick={() => setClassicModal(false)}
                     color="danger"
                     simple
                   >
                     Close
                   </Button>
                 </DialogActions>
               </Dialog>
               </>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
