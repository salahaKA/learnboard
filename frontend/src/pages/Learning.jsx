import { useEffect, useMemo, useState } from "react";
import { Table, Tag } from "antd";
import FilterPanel from "@/components/common/FilterPanel";
import { useLearningStore } from "@/store/useLearningStore";
import { filterItems } from "@/features/learning/filterItems";
import { STATUS, PRIORITY, CATEGORIES } from "@/constants/learning";
import { toOptions } from "@/utils/options";

const FILTER_FIELDS = [
  {
    name: "category",
    label: "Category",
    type: "select",
    options: CATEGORIES.map((c) => ({ value: c, label: c })),
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: toOptions(STATUS),
  },
  {
    name: "priority",
    label: "Priority",
    type: "select",
    options: toOptions(PRIORITY),
  },
  { name: "dueFrom", label: "Due date from", type: "date" },
  { name: "dueTo", label: "Due date to", type: "date" },
];

export default function Learning() {
  const items = useLearningStore((state) => state.items);
  const loading = useLearningStore((state) => state.loading);
  const fetchItems = useLearningStore((state) => state.fetchItems);

  const [filters, setFilters] = useState({});

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  const data = useMemo(() => filterItems(items, filters), [items, filters]);

  const columns = [
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

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">
        Learning topics ({data.length})
      </h2>

      <FilterPanel
        fields={FILTER_FIELDS}
        onApply={(values) => setFilters(values)}
        onClear={() => setFilters({})}
      />

      <Table
        rowKey="id"
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}
