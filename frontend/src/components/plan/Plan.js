import React from "react";
import "./Plan.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Plan = () => {
  const forme = useSelector((state) => state.form.form);
  const quest = useSelector((state) => state.quest.allquest);
  const navigate = useNavigate();
  const hundelUpdate = () => {
    if (quest?.length !== 0) {
      navigate("/adder");
    }else{
      navigate("/persone");
    }

  };
  return (
    <div>
      <div className="devide">
        <div className="container txte justify-content-center ">
          <h1 className="titre text-center fs-1 mb-5 text-black ">
            {" "}
            Modèle de plan d'action correctif
          </h1>
          <h1 className="serv">
            <strong> </strong>
          </h1>
        </div>
        <section>
          <div className="blocs container">
            <table class="table blocs table-bordered ">
              <thead>
                <tr>
                  
                  <th scope="col">Intitulé du risque non maitrisé</th>
                  <th scope="col">Impact potentiel E&S</th>
                  <th scope="col">Action corrective</th>
                </tr>
              </thead>
              <tbody>
                {forme?.exige1 === "NON" ||
                  (forme?.exige1 === "N/A" && (
                    <tr>
                      <th scope="row" className="text-size-[20px] ">
                        Est-ce que votre projet/activité a réalisé une étude
                        d'impact ?
                      </th>
                      <td className="tdd">
                        <p>
                          Le projet/activité n'est pas conforme à la
                          réglementation nationale du pays où la société opère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel
                          <br />
                          - Risque d'inondations
                          <br />
                          - Risque d'incendie
                          <br />
                          - Risque d'explosion <br />
                          - Risque de sanction <br />
                          -Risque de demande de compensation
                          <br /> ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Vérifier si le projet/activité est soumis à l'étude
                          d'impact. Si oui, régulariser la situation du
                          projet/activité.
                        </p>
                      </td>
                    </tr>
                  ))}
                {forme?.exige5 === "NON" ||
                  (forme?.exige5 === "N/A" && (
                    <tr>
                      <th scope="row">
                        Est-ce que votre projet/activité dispose d'une
                        autorisation de bâtir ?
                      </th>
                      <td className="tdd">
                        <p>
                          Le projet/activité n'est pas conforme à la
                          réglementation nationale du pays où la société opère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Risque de sanction (pécuniaire ou pénale) <br />
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Vérifier si le projet/activité est soumis à un permis
                          de bâtir. Si oui, régulariser la situation du
                          projet/activité.
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.exige7 === "NON" ||
                  (forme?.exige7 === "N/A" && (
                    <tr>
                      <th scope="row">
                        Est-ce que votre projet/activité dispose d'un
                        permis/autorisation d'exploitation ?
                      </th>
                      <td className="tdd">
                        <p>
                          Le projet/activité n'est pas conforme à la
                          réglementation nationale du pays où la société opère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Risque de sanction (pécuniaire ou pénale) <br />
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Vérifier si le projet/activité est soumis à un
                          permis/autorisation d'exploitation.
                          <br /> Si oui, régulariser la situation du
                          projet/activité.
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.per1 === "NON" ||
                  (forme?.per1 === "N/A" && (
                    <tr>
                      <th scope="row">
                        Est-ce votre société a mis en place un système
                        d'évaluation et de suivi des risques sociaux et
                        environnementaux ?
                      </th>
                      <td className="tdd">
                        <p>
                          La société n'a pas mis en place un système
                          d'évaluation et de suivi des risques sociaux et
                          environnementaux
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque d'inondations
                          <br />
                          - Risque d'incendie
                          <br />
                          - Risque d'explosion <br />
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de mettre en place un système
                          d'évaluation et de suivi des risques sociaux et
                          environnementaux
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.solide1 === "NSP" && (
                  <tr>
                    <th scope="row">
                      Est-ce que l'usine produit des déchets solides?
                    </th>
                    <td className="tdd">
                      <p>Production inconnue de déchets solides</p>
                    </td>
                    <td className="tdd">
                      <p>
                        - Risque de pollution du milieu naturel <br />
                        - Risque de sanction (pécuniaire ou pénale) <br />-
                        Risque de demande de compensation ou d'indemnisation
                      </p>
                    </td>
                    <td className="tdd">
                      <p>
                        Déterminer si le process est producteur de déchets
                        solides
                      </p>
                    </td>
                  </tr>
                )}

                {forme?.solide3 === "NSP" ||
                  (forme?.solide3 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que l'usine procède à la valorisation ou au
                        recyclage de ses déchets?
                      </th>
                      <td className="tdd">
                        <p>
                          L'usine ne procède pas à la valorisation ou au
                          recyclage de ses déchets
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Etudier l'opportunité de recycler ou valoriser les
                          déchets solides
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.solide4 === "NSP" ||
                  (forme?.solide4 === "NON" && (
                    <tr>
                      <th scope="row">
                        Existe-il un contrôle et un suivi de la collecte et de
                        l'élimination des déchets solides de l'usine ?
                      </th>
                      <td className="tdd">
                        <p>
                          Absence de contrôle et de suivi de la collecte et de
                          l'élimination des déchets solides de l'usine
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Mettre en place un contrôle et suivi des déchets
                          solides
                          <br /> (quantités, nocivité, mode de collecte, mode de
                          traitement/élimination, etc.)
                        </p>
                      </td>
                    </tr>
                  ))}

                {forme?.gaze1 === "NSP" ||
                  (forme?.gaze1 === "NON" && (
                    <tr>
                      <th scope="row">
                        Est-ce que le process industriel conduit à l'émission de
                        gaz, de poussières ou de particules dans l'atmosphère
                      </th>
                      <td className="tdd">
                        <p>
                          Si NSP Le process industriel conduit à l'émission de
                          gaz, de poussières ou de particules dans l'atmosphère
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          - Risque de pollution du milieu naturel <br />
                          - Risque de sanction (pécuniaire ou pénale) <br />-
                          Risque de demande de compensation ou d'indemnisation
                        </p>
                      </td>
                      <td className="tdd">
                        <p>
                          Déterminer si le process est producteur d'émissions
                          atmosphériques
                        </p>
                      </td>
                    </tr>
                  ))}
                <tr>
                  <td colspan="4" className="tdd text-center">
                  {forme?.exige1 != "NON" && forme?.exige1 != "N/A" &&(
                    <p>tous est bien</p>
                   ) }
                  </td>
                </tr>
                <tr>
                  <td colspan="4" className="tdd text-center">
                  {forme?.solide1 != "NON" && forme?.solide1 != "NSP" &&(
                    <p>Vous pouvez</p>
                   ) }
                  </td>
                </tr>
                <tr>
                  <td colspan="4" className="tdd text-center">
                  {forme?.solide1 != "NON" &&(
                    <p>Avancé</p>
                   ) }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
         
          <div className="btt">
            <button
              type="submit"
              className="mt-2 mb-5 btn btn-success"
              onClick={() => {
                hundelUpdate();
              }}
            >
              Suivant
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Plan;
