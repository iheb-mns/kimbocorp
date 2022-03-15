module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      id: String,
      companyName: String,
      companyActivity: String,
      about: String,
      companyLocation: String,
      billingPlan: String,
      companyPhone: String,
      uen: String,
      businessStatus: Boolean,
      incorporation: Boolean,
      isApproved: Boolean,
      files: [{
        type: mongoose.Schema.Types.ObjectId, ref: "files",
      }],
      directors: [{
        type: mongoose.Schema.Types.ObjectId, ref: "directors",
      }],
      shareholders: [{
        type: mongoose.Schema.Types.ObjectId, ref: "shareholders"
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