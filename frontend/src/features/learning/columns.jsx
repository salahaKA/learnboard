import { Tag } from "antd";
import { STATUS, PRIORITY } from "@/constants/learning";

export const getLearningColumns = () => [
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.localeCompare(b.title),
  },
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
  {
    title: "Due date",
    dataIndex: "dueDate",
    sorter: (a, b) => a.dueDate.localeCompare(b.dueDate),
  },
];
