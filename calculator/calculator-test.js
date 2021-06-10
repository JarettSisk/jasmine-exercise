describe("calculator tests", function() {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 100000,
      years: 15,
      rate: 5
    };
    expect(calculateMonthlyPayment(values)).toEqual('790.79');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
  
  it("should return an error message if isNan", function() {
    const values = {
      amount: 10043,
      years: 8,
      rate: 0
    };
    expect(calculateMonthlyPayment(values)).toEqual('Error, try again');
  });
})


