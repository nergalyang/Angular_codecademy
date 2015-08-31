app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'MOZZARELLA STICKS',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'SGrilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    },

  ];
  $scope.mains = [
 {name:'Bread',
  description:'Butter',
  price:2.95},
 {name:'BabyBread',
  description:'Small and tiny tasty bread',
  price:1.95}
  ];
  $scope.extras = [
    {name:'BREADSTICKS',
     description:'Served with marinara sauce.',
     price:4.95},
    {name:'SOUP OF THE DAY',
     description:'Take a chance.',
     price:4.95},
    {name:'BUFFALO WINGS',
     description:'Feel the power of wings.',
     price:6.95}
    ]

}]);