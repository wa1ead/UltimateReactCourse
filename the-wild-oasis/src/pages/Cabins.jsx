import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
