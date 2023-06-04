const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
//User Schema Or Document Structure
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required : true,
    // unique : true
  },
  email: {
    type: String,
    required : true,
    // unique : true,
  },
  password: {
    type: String,
    // required : true
  },
  role :{
    type: Boolean,
    default:false
  },
  gender: {
    type: String,
  },
  resetPasswordToken: String,
    resetPasswordExpire: Date,
  pic: {
    type: String,
  },
  authorize: {
    type: Boolean,
    default: true,
  },
  authfor: {
    type: Boolean,
    default: true,
  },
  phone: {
    type: Number,
  
  },
  formulaire1:{
    type: Object,
  },
  formulaire2:{
    type: Array,
  },
  formulaire3:{
    type: Array,
  },
  formulaire4:{
    type: Array,
  },
  formulaire5:{
    type: Array,
  },
  formulaire6:{
    type: Array,
  },

  images: [Object],
 
}  ,{ timestamps: true });

// Hashing Password to Secure
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

// Generate Tokens to Verify User
userSchema.methods.generateToken = async function () {
  try {
    const generatedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // this.tokens = this.tokens.concat({token : generatedToken});
    // await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error);
  }
};

userSchema.methods.getResetPasswordToken =  function () {
  const resetToken = crypto.randomBytes(20).toString('hex')

  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  this.resetPasswordExpire = Date.now() + 10 * (60 * 1000) // Ten Minutes

  return resetToken;
}


// Create Model
module.exports = Users = mongoose.model("USER", userSchema);
