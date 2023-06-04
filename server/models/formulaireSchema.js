const mongoose = require("mongoose");

const formulaireSchema = new mongoose.Schema({
  formId: {
    type: String,
  },
  authfor: {
    type: Boolean,
    default: true,
  },
  authcateg: {
    type: String,
  },

  annex1: {
    type: String,
  },
  annex2: {
    type: String,
  },
  annex3: {
    type: String,
  },
  annex4: {
    type: String,
  },
  annex5: {
    type: String,
  },
  annex6: {
    type: String,
  },
  annex7: {
    type: String,
  },
  annex8: {
    type: String,
  },
  annex9: {
    type: String,
  },
  annex10: {
    type: String,
  },
  annex11: {
    type: String,
  },

  categ1: {
    type: String,
  },
  categ2: {
    type: String,
  },
  categ3: {
    type: String,
  },
  categ4: {
    type: String,
  },
  categ5: {
    type: String,
  },
  categ6: {
    type: String,
  },
  categ7: {
    type: String,
  },
  categ8: {
    type: String,
  },
  categ9: {
    type: String,
  },
  categ10: {
    type: String,
  },
  categ11: {
    type: String,
  },
  categ12: {
    type: String,
  },
  categ13: {
    type: String,
  },
  categ14: {
    type: String,
  },
  categ15: {
    type: String,
  },
  categ16: {
    type: String,
  },
  categ17: {
    type: String,
  },
  categ18: {
    type: String,
  },
  categ19: {
    type: String,
  },
  categ20: {
    type: String,
  },
  categ21: {
    type: String,
  },
  categ22: {
    type: String,
  },
  categ23: {
    type: String,
  },
  categ24: {
    type: String,
  },
  categ25: {
    type: String,
  },

  grille1: {
    type: String,
  },
  grille2: {
    type: String,
  },
  grille3: {
    type: String,
  },
  grille4: {
    type: String,
  },
  grille5: {
    type: String,
  },
  grille6: {
    type: String,
  },
  grille7: {
    type: String,
  },
  grille8: {
    type: String,
  },
  grille9: {
    type: String,
  },
  grille10: {
    type: String,
  },
  grille11: {
    type: String,
  },
  grille12: {
    type: String,
  },
  grille13: {
    type: String,
  },

  exig1: {
    type: String,
  },
  exig2: {
    type: String,
  },
  exig3: {
    type: String,
  },
  exig4: {
    type: String,
  },
  exig5: {
    type: String,
  },
  exig6: {
    type: String,
  },
  exig7: {
    type: String,
  },
  exig8: {
    type: String,
  },
  exig9: {
    type: String,
  },
  exig10: {
    type: String,
  },
  exig11: {
    type: String,
  },
  exig12: {
    type: String,
  },
  exig13: {
    type: String,
  },
  exig14: {
    type: String,
  },
  exig15: {
    type: String,
  },
  exig16: {
    type: String,
  },
  exig17: {
    type: String,
  },
  exig18: {
    type: String,
  },

  per1: {
    type: String,
  },
  per2: {
    type: String,
  },
  per3: {
    type: String,
  },
  per4: {
    type: String,
  },
  per5: {
    type: String,
  },
  per6: {
    type: String,
  },
  per7: {
    type: String,
  },
  per8: {
    type: String,
  },
  per9: {
    type: String,
  },

  hum1: {
    type: String,
  },
  hum2: {
    type: String,
  },
  hum3: {
    type: String,
  },
  hum4: {
    type: String,
  },
  hum5: {
    type: String,
  },
  hum6: {
    type: String,
  },
  hum7: {
    type: String,
  },
  hum8: {
    type: String,
  },
  hum9: {
    type: String,
  },
  hum10: {
    type: String,
  },
  hum11: {
    type: String,
  },
  hum12: {
    type: String,
  },
  hum13: {
    type: String,
  },
  hum14: {
    type: String,
  },
  hum15: {
    type: String,
  },
  hum16: {
    type: String,
  },
  hum17: {
    type: String,
  },
  hum18: {
    type: String,
  },
  hum19: {
    type: String,
  },
  hum20: {
    type: String,
  },
  hum21: {
    type: String,
  },
  hum22: {
    type: String,
  },

  liquide1: {
    type: String,
  },
  liquide2: {
    type: String,
  },
  liquide3: {
    type: String,
  },
  liquide4: {
    type: String,
  },

  solide1: {
    type: String,
  },
  solide2: {
    type: String,
  },
  solide3: {
    type: String,
  },
  solide4: {
    type: String,
  },

  gaze1: {
    type: String,
  },
  gaze2: {
    type: String,
  },
  gaze3: {
    type: String,
  },
  gaze4: {
    type: String,
  },
  gaze5: {
    type: String,
  },
  gaze6: {
    type: String,
  },
  gaze7: {
    type: String,
  },

  danger1: {
    type: String,
  },
  danger2: {
    type: String,
  },
  danger3: {
    type: String,
  },
  danger4: {
    type: String,
  },
  danger5: {
    type: String,
  },
  danger6: {
    type: String,
  },
  danger7: {
    type: String,
  },
  danger8: {
    type: String,
  },

  urgance1: {
    type: String,
  },
  urgance2: {
    type: String,
  },
  urgance3: {
    type: String,
  },
  urgance4: {
    type: String,
  },
  nom:{
    type: String,
  },
  compte:{
    type: String,
  },
  telephone:{
    type: String,
  },
  coureil:{
    type: String,
  },
  poste:{
    type: String,
  },
  test:{
    type: Boolean,
  }

});

module.exports = Formulaire = new mongoose.model(
  "formulaires",
  formulaireSchema
);
