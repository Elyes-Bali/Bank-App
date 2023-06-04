import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Personnel.css";
import { Avatar } from "@chakra-ui/react";

function Personnel() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    nom: "",
    compte: "",
    telephone: "",
    coureil: "",
    poste: "",
  });
  console.log(formulaire2);
  const hundelUpdate = () => {
    dispatch(editform({ formulaire2, id: forme._id }));
    navigate("/test");
  };
  return (
    <div className=" informations">
      <div className="personne container" id="Personnel">
        <h2 className="title">Informations du client</h2>
        <br />
        <div className=" ava">
        <Avatar
          
          size="lg"
          cursor="pointer"
          // name={authuser?.username}
          src="/images/avatar.jpg"
        />
        </div>
        <div className="bl">
          <div>
            <label>Nom de client :</label>
            <br />
            <input
              type="text"
              id="name"
              minLength="5"
              maxLength="100"
              size="30"
              className="nom form-control"
              placeholder=" Nom de client"
              required
              onChange={(e) =>
                setFormulaire({ ...formulaire2, nom: e.target.value })
              }
            />
          </div>{" "}
          <br />
          <div>
            <label>Compte courant :</label>
            <br />

            <input
              type="text"
              id="name"
              minLength="5"
              maxLength="100"
              size="30"
              className="nom form-control"
              placeholder=" Tapez compte"
              required
              onChange={(e) =>
                setFormulaire({ ...formulaire2, compte: e.target.value })
              }
            />
          </div>{" "}
          <br />
          <div>
            <label>Telephone :</label>
            <br />
            <input
              type="text"
              id="name"
              minLength="8"
              maxLength="8"
              size="30"
              className="nom form-control"
              placeholder=" Telephone"
              required
              onChange={(e) =>
                setFormulaire({ ...formulaire2, telephone: e.target.value })
              }
            />
          </div>{" "}
          <br />
          <div>
            <label>Courreil:</label>
            <br />
            <input
              type="email"
              id="name"
              minLength="5"
              maxLength="100"
              size="30"
              className="nom form-control"
              placeholder=" Courreil"
              required
              onChange={(e) =>
                setFormulaire({ ...formulaire2, coureil: e.target.value })
              }
            />
          </div>{" "}
          <br />
          <div>
            <label>Poste :</label>
            <br />
            <input
              type="text"
              id="name"
              minLength="5"
              maxLength="100"
              size="30"
              className="nom form-control"
              placeholder=" Poste"
              required
              onChange={(e) =>
                setFormulaire({ ...formulaire2, poste: e.target.value })
              }
            />
          </div>{" "}
          <br />
          <div className="btt">
            <button
              type="submit"
              className="mt-4 mb-5 btn btn-success"
              onClick={() => {
                hundelUpdate();
              }}
            >
              Suivant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personnel;
