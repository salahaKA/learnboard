import { useEffect } from "react";
import { Table, Tag } from "antd";
import { useLearningStore } from "@/store/useLearningStore";
import { STATUS, PRIORITY } from "@/constants/learning";

export default function Learning() {
  // get data and actions from the store
  const items = useLearningStore((state) => state.items);
  const loading = useLearningStore((state) => state.loading);
  const fetchItems = useLearningStore((state) => state.fetchItems);

  // load data once when the page opens
  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  // table columns: how each field is shown
  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Category", dataIndex: "category" },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Tag color={STATUS[status].color}>{STATUS[status].label}</Tag>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      render: (priority) => (
        <Tag color={PRIORITY[priority].color}>{PRIORITY[priority].label}</Tag>
      ),
    },
    { title: "Due date", dataIndex: "dueDate" },
  ];

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Learning topics</h2>
      <Table
        rowKey="id"
        columns={columns}
        dataSource={items}
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
