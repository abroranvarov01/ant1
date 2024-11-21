import React from "react";
import { useGetClient } from "../../service/query/useGetClient";
import { Table, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useDeleteDebt } from "../../service/mutation/useDeleteDebt";

const Home = () => {
  const { data, isLoading } = useGetClient();
  const navigate = useNavigate();
  const { mutate } = useDeleteDebt();
  const handleEdit = (record) => {
    navigate("/app/user", { state: { client: record } });
  };

//   const handleDelete = (record) => {
   
//     console.log(record);
//   };

  const columns = [
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button onClick={() =>  mutate(record.id)} danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button onClick={() => navigate("/app/user")}>Create User</Button>
      <Table columns={columns} dataSource={data} rowKey="id" />
    </div>
  );
};

export default Home;
