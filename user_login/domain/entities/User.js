export class User {
  constructor({ id, nombre, email, password, fechaRegistro }) {
    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.password = password;
    this.fechaRegistro = fechaRegistro || new Date();
  }
}
