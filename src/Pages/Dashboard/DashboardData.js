import React from 'react'
import TableBarIcon from '@mui/icons-material/TableBar';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';

export const DashboardData= [
    {
        title:"Tables",
        icon:<TableBarIcon/>,
        link:"/Tables"
    },
    {
        title:"Category",
        icon:<FoodBankIcon/>,
        link:"/category"
    },
    {
        title:"Product",
        icon:<FastfoodIcon/>,
        link:"/product"
    },
    {
        title:"Order",
        icon:<RestaurantMenuIcon/>,
        link:"/order"
    },
    {
        title:"Tax",
        icon:<MonetizationOnIcon/>,
        link:"/tax"
    },
    {
        title:"Billing",
        icon:<DescriptionIcon/>,
        link:"/bill"
    },
    {
        title:"User",
        icon:<GroupsIcon/>,
        link:"/users"
    }
]


