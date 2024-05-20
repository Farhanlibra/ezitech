import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const CoursesCd = ({t}) =>{
    const {title, image}=t;
    return (
        <Card className='tcard'
          hoverable
          style={{
            width: 200,
            height:200,
          }}
          cover={<img alt="example" src={image} />}
        >
          <Meta className='ttitle' title={title} />
        </Card>
      );
} 
export default CoursesCd;