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

  const Directors = mongoose.model("directors", schema, "directors");
  return Directors;
};