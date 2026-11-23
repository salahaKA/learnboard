import { useState } from "react";
import { Card, Form, Input, Select, DatePicker, Button } from "antd";
import { SearchOutlined, UpOutlined, DownOutlined } from "@ant-design/icons";

export default function FilterPanel({ fields, onApply, onClear }) {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(true);

  const handleClear = () => {
    form.resetFields();
    onClear();
  };

  return (
    <Card size="small" className="mb-4">
      <Form form={form} layout="vertical" onFinish={onApply}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <Form.Item name="search" className="!mb-3 w-full max-w-md">
            <Input
              allowClear
              prefix={<SearchOutlined />}
              placeholder="General search"
            />
          </Form.Item>

          <div className="flex items-center gap-2">
            <Button
              type="link"
              icon={open ? <UpOutlined /> : <DownOutlined />}
              onClick={() => setOpen(!open)}
            >
              {open ? "Hide Filter" : "Show Filter"}
            </Button>
            <Button onClick={handleClear}>Clear</Button>
            <Button type="primary" htmlType="submit">
              Go
            </Button>
          </div>
        </div>

        {open && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {fields.map((field) => (
              <Form.Item
                key={field.name}
                name={field.name}
                label={field.label}
                className="!mb-0"
              >
                {field.type === "date" ? (
                  <DatePicker
                    className="w-full"
                    placeholder={field.placeholder || "Select date"}
                  />
                ) : (
                  <Select
                    allowClear
                    options={field.options}
                    placeholder={field.placeholder || `Select ${field.label}`}
                  />
                )}
              </Form.Item>
            ))}
          </div>
        )}
      </Form>
    </Card>
  );
}
