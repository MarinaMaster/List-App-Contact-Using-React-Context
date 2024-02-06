import React, { useState } from "react";
import { Modal } from "./Modal";
import { useNavigate } from "react-router-dom";

export const ContactCard = (props) => {
  const navigate = useNavigate();
  const goToDemo = () => {
    navigate("/demo");
  };
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const confirmDelete = () => {
    console.log("confirmDelete");
    fetch(
      `https://playground.4geeks.com/apis/fake/contact/${props.contact.id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.msg === "Contact deleted successfully") {
          let updatedList = props.contacts.filter(
            (contact) => contact.id !== props.contact.id
          );
          props.setContacts(updatedList);
        }
      })
      .catch((error) => console.error("ERROR:", error));
    closeModal();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src={
                "https://raw.githubusercontent.com/breatheco-de/exercise-contact-list-context/master/src/img/m101.jpg"
              }
              alt={props.contact.fullName}
              className="rounded-circle mx-auto d-block img-fluid"
            />
          </div>
          <div className="col-2">
            <span className="text-muted">
              <h2>{props.contact.full_name}</h2>
            </span>
            <br />
            <i className="fas fa-map-marker-alt text-muted mr-3" />
            <span className="text-muted">
              <span>{props.contact.address}</span>
            </span>
            <br />
            <i className="fa fa-phone fa-fw text-muted mr-3" />
            <span className="text-muted">{props.contact.phone}</span>
            <br />
            <i className="fa fa-envelope fa-fw text-muted mr-3" />
            <span className="text-muted">{props.contact.email}</span>
          </div>
          <div className="col-8">
            <div className=" float-right">
              <button className="btnEdit" onClick={goToDemo}>
                <i className="fas fa-pencil-alt mr-3" />
              </button>
              <button className="btnDelete" onClick={openModal}>
                <i className="fas fa-trash-alt" />
              </button>
              <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                onConfirm={confirmDelete}
              ></Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactCard;
