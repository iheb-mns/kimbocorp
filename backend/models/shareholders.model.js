module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      firstName: String,
      lastName: String,
      phoneNumber: Number,
      beneficialOwner: Boolean,
      nationality: String,
      email: String,
      company: { type: mongoose.Schema.Types.ObjectId, ref: "company" }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Shareholders = mongoose.model("shareholders", schema);
  return Shareholders;
};