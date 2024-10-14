import React from "react";
import emailjs from "@emailjs/browser";
import { Form, Input, Select, Button } from "antd";
import "./FormComp.css";

const { TextArea } = Input;
const { Option } = Select;

const FormComponent = () => {

  const sendEmail = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('category', values.category);
    formData.append('message', values.message);

    for (let pair of formData.entries()){
        console.log(`${pair[0]}: ${pair[1]}}`);
    }

    emailjs
      .send(
        'service_vujcl5j',
        'template_yc3l559',
        {
            name: values.name,
            category: values.category,
            message: values.message
        },
        '7FiYYbWGSnL7txCww'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent sucessfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", paddingTop: "50px" }}
    >
      <Form
        id="OSSForm"
        onFinish={sendEmail}
        style={{ width: "400px", padding: "20px", borderRadius: "8px" }}
        layout="vertical"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name!" }]}
        >
          <Input placeholder="Please enter your name" />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please enter a Leave Type" }]}
        >
          <Select placeholder="Select a Category">
            <Option value="SL">Sick Leave</Option>
            <Option value="VL">Vacation Leave</Option>
            <Option value="BL">Birthday Leave</Option>
            <Option value="EL">Emergency Leave</Option>
            <Option value="LT">Late</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "Please state your reason for your leave",
            },
          ]}
        >
          <TextArea
            placeholder="Please enter the reason of your leave"
            rows={4}
          />
        </Form.Item>

        <Form.Item>
          <Button type="default" variant="solid" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
