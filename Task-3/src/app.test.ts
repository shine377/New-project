
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
    expect(response.body).toEqual(list );
    expect(response.body).toHaveLength(7);
  })
})