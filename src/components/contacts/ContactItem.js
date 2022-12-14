import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
const ContactItem = (props) => {
  const { name, email, phone, type } = props.contact;
  const contactContext = useContext(ContactContext);
  const deleteContact = () => {
    contactContext.deleteContact(props.contact._id);
    contactContext.clearCurrent();
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right" }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open" />
            {" " + email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone" />
            {" " + phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => contactContext.setCurrent(props.contact)}
        >
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={deleteContact}>
          Delete
        </button>
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
export default ContactItem;
