module.exports = (mongoose) => {
    var schema = mongoose.Schema(
      {
        id: String,
        title: String,
        subTasks: [{
            description: String,
            isChecked: Boolean,
            image: String
        }],
        company: { type: mongoose.Schema.Types.ObjectId, ref: "company" }
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function () {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Tasks = mongoose.model("tasks", schema);
    return Tasks;
  };