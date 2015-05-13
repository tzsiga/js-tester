module.exports = {
  'aritmentics load': function (browser){
    browser
      .url("http://localhost:3000")
      .waitForElementVisible('body', 1000)
  },
  
  'aritmentics add': function (browser){
    browser
      .setValue('#op1','10')
      .setValue('#op2','10')
      .setValue('#operand','add')
      .click('#run')
      .pause(1000)
      .assert.value('#res','20')
      .end();
  }
}