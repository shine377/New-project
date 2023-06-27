const { myDataSource } = require("./data-connection");
const { User } = require("./User");

describe("getting the value from the user",() =>{
  test("user returns user list",()=>{
    const list = [{
      id:1,
      firstName:"Shiny",
      lastName:"Mary",
      MobileNumber:12345678,
      Gender:"female",
      Email:"shiny@gmail.com",
      Country:"India"
    }]
    const spy = jest.spyOn( myDataSource.getRepository(),"User").mockReturnValue(list);
    const baseInstance = new baseInstance();
    const user = baseInstance.User;
    expect(user).toEqual(list);
    expect(spy).toHaveBeenCalledTimes(1);
  })
})