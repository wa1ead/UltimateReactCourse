import CreateCabinForm from "./CreateCabinForm";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // return (
  //   <>
  //     <Button onClick={() => setIsOpenModal((modal) => !modal)}>
  //       Add new cabin
  //     </Button>
  //     {isOpenModal && (
  //       <Modal onClose={() => setIsOpenModal(false)}>
  //         <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
  //       </Modal>
  //     )}
  //   </>
  // );
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Create cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      <Modal>
        <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window>
      </Modal>
    </>
  );
}
export default AddCabin;
