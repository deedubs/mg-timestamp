module.exports = function (schema) {
  schema.add({
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    removed_at: { type: Date }
  });

  schema.pre('save', function (next) {
    this.updated_at = new Date();  

    next();
  });
};
