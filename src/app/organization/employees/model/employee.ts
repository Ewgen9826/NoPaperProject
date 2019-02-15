export class Employee {
  constructor(
    position: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPasswrod: string
  ) {
    this.Position = position;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.PhoneNumber = phoneNumber;
    this.Email = email;
    this.Password = password;
    this.ConfirmPassword = confirmPasswrod;
  }
  Position: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}
