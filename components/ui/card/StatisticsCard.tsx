import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import React, { FC } from 'react'
interface Props{
    title:string;
    value:number;
}
const StatisticsCard:FC<Props> = ({title,value}) => {
  return (
    <Card sx={{ minWidth: {xs:50, sm:200, md:350} , }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Cantidad
        </Typography>
        <Typography variant="h4" component="div">
          {value}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {title}
        </Typography>

      </CardContent>
      
    </Card>
  )
}

export default StatisticsCard