import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <div>
          <AddCabin />
        </div>
      </Row>
    </>
  );
}

export default Cabins;
