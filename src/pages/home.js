import React, { Component} from "react";
import {Button} from "antd";
import { DatePicker, Form } from 'antd';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      policyNumber: ''
    }
  }
  
  callApi(){
    fetch("https://api.publicapis.org/entries",{
      method: 'GET', 
      mode:'cors'
      })
      .then(response => 
        response.json())
      .then(json => {
        console.log(json);
        this.setState({ policyNumber: json.count });
      });
  }
  componentWillMount() {
    this.callApi();
  }

  render() {
    const number = "A349230293";
    const spacing = {
      margin: 0,
      fontSize:'17px'
    }
    // const onFinish = async(values)=> {
    //   // await getApi({dob:dayjs(values.dateOfBirth).format('DD/MM/YYYY')})
    // }

    return (
      <div style={{ textAlign: "justify"}}>
        <p style={spacing}>
          Your is number is <span style={{color: 'red',fontWeight: 'bold' }}>{this.state.policyNumber}</span>
        </p>
        <p style={spacing}>
          Please enter your Date of Birth below to processed further
        </p>
        <p style={spacing}>
          Ex: 23/04/2000 (format DD/MM/YYYY)
        </p>
        
        <Form
          name="basic"
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="dateOfBirth"
            rules={[{ required: true, message: 'Please input your date of birth!' }]}
          >
            <DatePicker style={{width: '100%', margin:'10px 0 10px 0'}} format = {'DD/MM/YYYY'}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" block htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Home;
