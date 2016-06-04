angular.module('Quotebook')
    .controller('mainCtrl', function($scope, dataService) {

            $scope.quotes = dataService.getQuotes();
            $scope.deleteMe = function(textToDelete) {
                dataService.removeData(textToDelete);
            };
            $scope.addQuote = function() {
                var newQuote = {
                    text: $scope.newQuoteText,
                    author: $scope.newQuoteAuthor
                };
                if (dataService.addQuotes(newQuote)){
                        $scope.newQuoteText = '';
                        $scope.newQuoteAuthor = '';
                    }
                };

            });
