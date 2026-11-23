import { Table, Empty } from "antd";

export default function DataTable({
  columns,
  data,
  loading = false,
  rowKey = "id",
  pageSize = 5,
  ...rest
}) {
  return (
    <Table
      rowKey={rowKey}
      columns={columns}
      dataSource={data}
      loading={loading}
      scroll={{ x: "max-content" }}
      locale={{ emptyText: <Empty description="No data found" /> }}
      pagination={{
        pageSize,
        showSizeChanger: true,
        pageSizeOptions: [5, 10, 20],
        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total}`,
      }}
      {...rest}
    />
  );
}
