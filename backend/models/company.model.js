module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      id: String,
      businessStatus: Boolean,
      companyName: String,
      companyActivity: String,
      about: String,
      companyLocation: String,
      billingPlan: String,
      companyPhone: String,
      uen: String,
      incorporation: Boolean,
      beneficialOwner: Boolean,
      directors: [{
        //type: mongoose.Schema.Types.ObjectId, ref: "directors",
        firstName: String,
        lastName: String,
        phoneNumber: Number,
        beneficialOwner: Boolean,
        nationality: String,
        email: String
      }],
      shareholders: [{
        //type: mongoose.Schema.Types.ObjectId, ref: "shareholders"
        firstName: String,
        lastName: String,
        phoneNumber: Number,
        beneficialOwner: Boolean,
        nationality: String,
        email: String,
      }],
      officers: [{
        type: mongoose.Schema.Types.ObjectId, ref: "officers"
      }],
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Company = mongoose.model("company", schema, "company");
  return Company;
};