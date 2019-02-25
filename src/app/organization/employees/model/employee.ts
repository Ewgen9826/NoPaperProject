export class Employee {
  constructor(
    id: number,
    position: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPasswrod: string
  ) {
    this.Id = id;
    this.Position = position;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.PhoneNumber = phoneNumber;
    this.Email = email;
    this.Password = password;
    this.ConfirmPassword = confirmPasswrod;
  }
  Id: number;
  Position: string;
  FirstName: string;
  LastName: string;
  PhoneNumber: string;
  Email: string;
  Password: string;
  ConfirmPassword: string;
}
