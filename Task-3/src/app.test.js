const { myDataSource } = require("./data-connection");
const { User } = require("./User");
const app = require("./app");

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
    const response =  request(app).get("/app");
    const spy = jest.spyOn( myDataSource.getRepository(User)).mockReturnValue(list);
    expect(response.body).toEqual(list );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(response.body).toHaveLength(7);
  })
})