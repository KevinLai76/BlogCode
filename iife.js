function hello(){
    console.log('Hello World!')
}

hello();

(function (){
    console.log('I\'m an iffe!')
})();

(function shhhh(){
    var secret = 'super secret message'
    var anotherSecret = 'another super secret message'

    scramble()

    function scramble() {
        secret = 'daklnfkalsfn'
        anotherSecret = 'aslkdfjlkelknnw'
    }
})()

