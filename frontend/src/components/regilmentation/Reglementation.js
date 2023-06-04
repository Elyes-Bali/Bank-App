import { useDispatch, useSelector } from "react-redux";
import "./Reglementation.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";

function Reglementation() {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    exig1: "",
    exig2: "",
    exig3: "",
    exig4: "",
    exig5: "",
    exig6: "",
    exig7: "",
    exig8: "",
    
  });
  console.log(formulaire2)
  const hundelUpdate =() => {
   
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/certification")
  }
 
  return (
    <>
      <div className="shadow p-3 mb-5 bg-body rounded mt-5 container" id="Reglementation">
        <h1 className="text-center p-3 bg-primary text-white head">
          <b> Reglementation Nationale </b>
        </h1>

        <h4>
          Est-ce que le projet/activité est conforme à la réglementation du pays
          en vigueur sur les aspects environnementaux et sociaux, y compris les
          conventions internationales ratifiées par le pays où la société opère?
        </h4>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>
                    <legend>
                      <li>Etude d'impact sur l'environnement</li>
                    </legend>
                  </label>
                  <br />
                  <div className="impact">
                  <input type="radio" name="impact" value="OUI"   onChange={(e) =>
            setFormulaire({ ...formulaire2, exig1: e.target.value })
          }/> OUI <br />
                  <input type="radio" name="impact" value="NON"   onChange={(e) =>
            setFormulaire({ ...formulaire2, exig1: e.target.value })
          }/> NON <br />
                  <input type="radio" name="impact" value="N/A"   onChange={(e) =>
            setFormulaire({ ...formulaire2, exig1: e.target.value })
          }/> N/A
                  </div>
                </td>
              </tr>
              <br/>
              <p className="sioui"> Si <b>OUI</b> ajouter la date et les autorités de contrôle : </p> <br/>
              <div className="deta">
                <label> Date :</label>&nbsp;&nbsp;
                <input className="input-holder form-control bordering autoro" type="date" onChange={(e) =>
            setFormulaire({ ...formulaire2, exig2: e.target.value })
          }></input> &nbsp;&nbsp;&nbsp;
                <label>Autorités de contrôle :</label>&nbsp;&nbsp;
                <input className="input-holder form-control bordering autoro" type="text" placeholder="taper les autorités de contrôle" size="40" onChange={(e) =>
            setFormulaire({ ...formulaire2, exig3: e.target.value })
          }></input>
              </div>
              <br />
              <div className="encour">
              <label>
                <input
                  type="radio"
                  name="encours"
                  value="En cours de réalisation"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, exig4: e.target.value })
                  }
                />{" "}
                En cours de réalisation{" "}
              </label>&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="encours"
                  value="En cours d’approbation"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, exig4: e.target.value })
                  }
                />{" "}
                En cours d'approbation{" "}
              </label>&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="encours"
                  value="Approuvée sans réserves"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, exig4: e.target.value })
                  }
                />{" "}
                Approuvée sans réserves{" "}
              </label>&nbsp;&nbsp;&nbsp;
              <label>
                <input
                  type="radio"
                  name="encours"
                  value="Approuvée avec réserves"
                  onChange={(e) =>
                    setFormulaire({ ...formulaire2, exig4: e.target.value })
                  }
                />{" "}
                Approuvée avec réserves{" "}
              </label>
              </div>
              <tr>
                <td>
                  <label>
                    <legend>
                      <li>Autorisation de bâtir</li>
                    </legend>
                  </label>
                  <br />
                  <div className="impact">
                  <input
                    type="radio"
                    name="autorisation"
                    value="OUI"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig5: e.target.value })
                    }
                  /> OUI <br />
                  <input
                    type="radio"
                    name="autorisation"
                    value="NON"
                    onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig5: e.target.value })
                    }
                  /> NON <br />
                  <input type="radio" name="autorisation" value="N/A"  onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig5: e.target.value })
                    }/> N/A
                  </div>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label>
                    <legend>
                      <li>Votre usine est-elle un établissement classé</li>
                    </legend>
                  </label>
                  <br />
                  <div className="impact">
                  <input type="radio" name="usine" value="OUI"  onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig6: e.target.value })
                    }/> OUI <br />
                  <input type="radio" name="usine" value="NON" onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig6: e.target.value })
                    }/> NON <br />
                  <input type="radio" name="usine" value="N/A" onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig6: e.target.value })
                    }/> N/A
                  </div>
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <label>
                    <legend>
                      <li>Autre permis/autorisation d'exploitation</li>
                    </legend>
                  </label>
                  <br />
                  <div className="impact">
                  <input type="radio" name="autre" value="OUI" onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig7: e.target.value })
                    }/> OUI <br />
                  <input type="radio" name="autre" value="NON" onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig7: e.target.value })
                    }/> NON <br />
                  <input type="radio" name="autre" value="N/A" onChange={(e) =>
                      setFormulaire({ ...formulaire2, exig7: e.target.value })
                    }/> N/A
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      
        <legend>
          <li>plus d'infos ? </li>
        </legend>
        <br />
        <label htmlFor="name" className="ml-3"></label>
        <input
          className="input-holder form-control bordering"
          type="text"
          id="name"
          name="name"
          minLength="4"
          maxLength="1000"
          size="40"
          required
          placeholder="plus d'infos ?"
          onChange={(e) =>
            setFormulaire({ ...formulaire2, exig8: e.target.value })
          }
        />


        <button
          type="submit"
          class="btn btn-success w-100 mt-4 rounded-pill"
          onClick={() => {
            hundelUpdate();
          }}
        >
          Suivant
        </button>
      </div>
    </>
  );
}

export default Reglementation;
