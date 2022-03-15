module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            createdAt: {
                type: Date,
                default: Date.now,
            },
            name: {
                type: String,
                required: [true, "Uploaded file must have a name"],
            },
            company: { type: mongoose.Schema.Types.ObjectId, ref: "company" }
        }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Files = mongoose.model("files", schema);
    return Files;
};