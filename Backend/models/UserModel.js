// UserModel.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
    },
    password: {
      type: String,
      required: true,
    },
    business: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Business",
    },
    businessName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    phoneNumber: {
      type: String,
      required: true,
      maxlength: 15,
    },
    image: {
      type: String, // Cambiar a un tipo adecuado según cómo estás manejando las imágenes
      // Otros campos relacionados con la imagen si es necesario
    },
    description: {
      type: String,
      maxlength: 500,
    },
    adminName: {
      type: String,
      required: true,
      maxlength: 100,
    },
  },
  { timestamps: true }
);

// Antes de guardar el usuario, hasheamos la contraseña
UserSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password") || user.isNew) {
    try {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
      next();
    } catch (error) {
      return next(error);
    }
  } else {
    return next();
  }
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
};

export default mongoose.models.User || mongoose.model("User", UserSchema);
