import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: '15px',
        color: 'black',
        padding:'3px 10px',
        minWidth: '20px',
        '&:hover':{
            color: '#006aff',
        },
        '&.Mui-selected': {
            color: '#006aff',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

const TabBar = (props) => {
    const {
        scrollTop,
    } = props

    useEffect(() => {
        const ele = document.getElementsByClassName("detailItem");
        if (ele != null) {
            const parentEle = document.getElementsByClassName('detailMain')[0];
            for(let i = 0; i < ele.length; i++){
                const selEle = document.getElementsByClassName('detailItem')[i];
                const eleTop = selEle.offsetTop - parentEle.offsetTop;
                if(eleTop>=scrollTop&&eleTop<=scrollTop+520){
                    setValue(i);
                    break
                }
            }
        }
    }, [scrollTop])
    
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
        const parentEle = document.getElementsByClassName('detailMain')[0];
        const selEle = document.getElementsByClassName('detailItem')[newValue];
        const scrollTop = selEle.offsetTop - parentEle.offsetTop;
        parentEle.scroll({
            top: scrollTop,
            behavior: 'smooth'
        });

        setValue(newValue);
    };
  
    return (
      <Box sx={{
        [`& .${tabsClasses.scrollButtons}`]: {
          '&.Mui-disabled': { opacity: 0.3 },
        },
      }}>
        <hr />
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <StyledTab label="Overview" />
          <StyledTab label="Facts and features" />
          <StyledTab label="Condo" />
          <StyledTab label="Exterior" />
          <StyledTab label="Financials" />
          <StyledTab label="Layout" />
          <StyledTab label="ListingSource" />
          <StyledTab label="LocalGovernment" />
          <StyledTab label="Location" />
          <StyledTab label="Parking" />
          <StyledTab label="PhysicalCondition" />
          <StyledTab label="RoomDetails" />
          <StyledTab label="System" />
          <StyledTab label="TransactionType" />
          <StyledTab label="UnMapped" />
          <StyledTab label="LastModified" />
        </Tabs>
        <hr />
      </Box>
    );
  }

  export default TabBar;