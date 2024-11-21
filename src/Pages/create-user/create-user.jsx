import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { useCreateDebt } from "../../service/mutation/useCreateDebt";
import { useEditDebt } from "../../service/mutation/useEditDebt";

const CreateUser = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const client = location.state?.client || {};
  const [form] = Form.useForm();

  const { mutate: createDebt } = useCreateDebt();
  const { mutate: editDebt } = useEditDebt();

  useEffect(() => {
    if (client) {
      form.setFieldsValue(client);
    }
  }, [client, form]);

  const handleFinish = (values) => {
    if (client.id) {
      editDebt({ ...client, ...values });
    } else {
      createDebt(values);
    }
    navigate("/app");
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "20px" }}>
      <h2>{client.id ? "Edit Debt" : "Create Debt"}</h2>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: "Please input the amount!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {client.id ? "Save" : "Create"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
