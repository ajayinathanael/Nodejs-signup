//jshint esversion:6
//module.exports.getDate

exports.getDate = function (){

  const today = new Date();

  const option = {weekday:"long", day:"numeric", month:"long", year:"numeric"};

  return today.toLocaleDateString("en-Us", option);;
}

exports.getDay = function (){

  const today = new Date();

  const option = {weekday:"long"};

  return today.toLocaleDateString("en-Us", option);;
}
