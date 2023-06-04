import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import "./Dash.css";
import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const forme = useSelector((state) => state.form.allforms);

  return (
    <div className="mdd ">
      <SideBar />
      <div className="content-wrapper">
        <section className="content pt-4">
          <div className="container-fluid">
            <div className="row  ">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-file" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">Nombre Formulaires</span>
                    <span className="info-box-number">{forme?.length}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">Clients</h3>
                    <div className="card-tools"></div>
                  </div>
                  {/* modification here */}

                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table tdd" id="table-to-xls">
                        <thead className="">
                          <tr>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Telephone</th>
                            <th>Catégorie</th>
                            <th>Compte courant</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {forme?.map((el) => (
                            <tr>
                              <td>{el.nom}</td>
                              <td>
                                <Badge bg="success">{el.coureil}</Badge>
                              </td>
                              <td>
                                <div
                                  className="sparkbar"
                                  data-color="#00a65a"
                                  data-height={20}
                                >
                                  {el.telephone}
                                </div>
                              </td>
                              <td>
                                <div
                                  className="sparkbar"
                                  data-color="#00a65a"
                                  data-height={20}
                                >
                                  {el.authcateg}
                                </div>
                              </td>
                              <td>
                                <div
                                  className="sparkbar "
                                  data-color="#00a65a"
                                  data-height={20}
                                >
                                  {el.compte}
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* finish here */}
                  <div className="card-footer clearfix">
                    <ReactHTMLTableToExcel
                      id="test-table-xls-button"
                      className="download-table-xls-button btn btn-success mb-3"
                      table="table-to-xls"
                      filename="tablexls"
                      sheet="tablexls"
                      buttonText="Télécharger"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
