import { useEffect, useMemo, useState } from "react";
import FilterPanel from "@/components/common/FilterPanel";
import DataTable from "@/components/common/DataTable";
import { useLearningStore } from "@/store/useLearningStore";
import { filterItems } from "@/features/learning/filterItems";
import { getLearningColumns } from "@/features/learning/columns";
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
  const columns = useMemo(() => getLearningColumns(), []);

  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">
        Learning topics ({data.length})
      </h2>

      <FilterPanel
        fields={FILTER_FIELDS}
        onApply={setFilters}
        onClear={() => setFilters({})}
      />

      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  );
}
