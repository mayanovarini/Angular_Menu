app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Miso Soup',
      description: 'Just soup with dried seaweed and tofu.',
      price: 2.95
    },
    {
      name: 'Springroll',
      description: 'That rollin stuff.',
      price: 0.95
    },
    {
      name: 'Pot Stickers',
      description: 'It is not a pot with stickers, alright.',
      price: 4.95,
    },
  ];
  $scope.mains = [
    {
      name: 'BonChon Fried Chicken',
      description: 'The most delicious fried chicken ever',
      price: 10,
    },
    {
      name: 'Starbread',
      description: 'What the hell is this thing - so good!',
      price: 10,
    },
    {
      name: 'Sushi',
      description: 'Just another dish i like a lot',
      price: 20,
    },
  ];
  $scope.extras = [
    {
      name: 'kimchi',
      description: 'korean pickles?',
      price: 2,
    },
    {
      name: 'rice',
      description: 'white stuff that is just all about calories',
      price: 1,
    },
    {
      name: 'sambal',
      description: 'spicy stuff',
      price: 5,
    },
  ];
}]);
