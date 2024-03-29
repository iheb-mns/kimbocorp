module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      id: String,
      firstName: String,
      lastName: String,
      phoneNumber: Number,
      dateOfAppointment: Date,
      nationality: String,
      position: String,
      isApproved: Boolean,
      company: { type: mongoose.Schema.Types.ObjectId, ref: "company" }
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Officers = mongoose.model("officers", schema);
  return Officers;
};