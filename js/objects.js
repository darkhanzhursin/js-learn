const phone = {
  action: function () {
    return "Call to someone";
  },
  type: "Phone",
};

const iphone = Object.create(phone);
iphone.creator = "Steve Jobs";
iphone.country = "USA";
iphone.os = "iOS";
iphone.action = function () {
  return "Video call by facetime";
};

// console.log(iphone);
// console.log(iphone.action());

const samsung = Object.create(phone);
samsung.creator = "Jackie Chan";
samsung.country = "South Korea";
samsung.os = "Android";

const iphone14 = Object.create(iphone);
console.log(iphone14.type);

const Galaxy22S = Object.create(samsung);
console.log(Galaxy22S.type);
