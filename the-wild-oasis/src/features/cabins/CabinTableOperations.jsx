import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[{ value: "all", label: "All" }]}
      />
      <Filter
        filterField="discount"
        options={[{ value: "no-discount", label: "No discount" }]}
      />
      <Filter
        filterField="discount"
        options={[{ value: "with-discount", label: "With discount" }]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sort by Name (A-Z)" },
          { value: "name-desc", label: "Sort by Name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price (lowest first)" },
          {
            value: "regularPrice-desc",
            label: "Sort by Price (highest first)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by Capacity (lowest first)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by Capacity (highest first)",
          },
        ]}
      />
    </TableOperations>
  );
}
export default CabinTableOperations;
