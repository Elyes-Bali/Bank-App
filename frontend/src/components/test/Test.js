import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { editform } from "../../redux/FormSlice/formslice";
import { useDispatch, useSelector } from "react-redux";
import "./Test.css";

const Test = () => {
  const forme = useSelector((state) => state.form.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formulaire2, setFormulaire] = useState({
    test:false,
  });
  console.log(formulaire2)
  const hundelUpdate =() => {
    formulaire2.test = true;
    dispatch(editform({formulaire2,id:forme._id}))
    navigate("/sythese")
  }
  return (
    <div className='tst mt-5'>
      <div className="mrc">
      <p>Merci beaucoup pour l'assisstance<br/> votre rapport est prêt</p><i class="fa fa-smile-o" aria-hidden="true"></i>
      </div>
      <div className="btt">
            <button type="submit" className="mt-2 mb-5 btn btn-success" onClick={() => {
            hundelUpdate();
          }}>
              Suivant
            </button>
          </div>
      </div>
  )
}

export default Test;