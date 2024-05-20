import React from 'react';
import { Card, Col, Row } from 'antd';
const Internship = () => (
  
  <div className='intcd'>
  <Row gutter={16} className='rcc'>

    <Col span={8}>
    
      <Card title="HTML/CSS/JAVASCRIPT" bordered={true}>
      Employment-
Hybrid<br></br>
Location -
Rawalpindi<br></br>
Job Type -
Full Time<br></br>
Part Time
      </Card>
    </Col>
    <Col span={8}>
      <Card title="GRAPHIC DESIGNING" bordered={false}>
      Employment-
Hybrid<br></br>
Location -
Rawalpindi<br></br>
Job Type -
Full Time<br></br>
Part Time
      </Card>
    </Col>
    <Col span={8}>
      <Card title="DIGITAL MARKETING" bordered={false}>
      Employment-
Hybrid<br></br>
Location -
Rawalpindi<br></br>
Job Type -
Full Time<br></br>
Part Time
      </Card>
    </Col>
  </Row>
  </div>
);
export default Internship;