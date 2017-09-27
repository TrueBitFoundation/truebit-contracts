var Truebit = artifacts.require("./Truebit.sol");
var ExampleTaskGiver = artifacts.require("./ExampleTaskGiver.sol");
var TaskGiver = artifacts.require("./TaskGiver.sol")
var Solver = artifacts.require("./Solver.sol")
var Verifier = artifacts.require("./Verifier.sol")

module.exports = function(deployer, network, thing) {
  deployer.deploy(Truebit).then(function() {
    return deployer.deploy(ExampleTaskGiver, Truebit.address);
  });

  deployer.deploy(TaskGiver);
  deployer.deploy(Solver);
  deployer.deploy(Verifier);
};