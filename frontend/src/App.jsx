import { Button, Tag } from "antd";

export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600">LearnBoard</h1>
        <p className="mt-2 text-slate-500">Tailwind + Ant Design test</p>

        <div className="mt-6 flex items-center gap-3">
          <Button type="primary">Ant Design button</Button>
          <Tag color="green">antd tag</Tag>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          <div className="rounded bg-red-500 p-3 text-center text-white">1</div>
          <div className="rounded bg-yellow-400 p-3 text-center">2</div>
          <div className="rounded bg-emerald-500 p-3 text-center text-white">
            3
          </div>
        </div>
      </div>
    </div>
  );
}
