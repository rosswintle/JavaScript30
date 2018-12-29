// ## Array Cardio Day 2
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
var CommentItem = /** @class */ (function () {
    function CommentItem(text, id) {
        this.text = text;
        this.id = id;
    }
    // I know you wouldn't normally do this kind of thing!
    CommentItem.prototype.hasId = function (id) {
        return this.id === id;
    };
    return CommentItem;
}());
var comments = [
    new CommentItem('Love this!', 523423),
    new CommentItem('Super good', 823423),
    new CommentItem('You are the best', 2039842),
    new CommentItem('Ramen is my fav food ever', 123523),
    new CommentItem('Nice Nice Nice!', 542328)
];
function nineteenPlus(person) {
    var now = new Date().getFullYear();
    return (now - person.year) > 19;
}
// function 
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
if (people.some(nineteenPlus)) {
    console.log('Yes, one person is at least 19');
}
else {
    console.log('No, there is not one person who is at least 19');
}
// Array.prototype.every() // is everyone 19 or older?
if (people.every(nineteenPlus)) {
    console.log('Yes, all people are at least 19');
}
else {
    console.log('No, not all people are at least 19');
}
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
var foundComment = comments.find(function (c) { return c.hasId(823423); });
var commentText = foundComment ? foundComment.text : 'No comment found';
console.log(commentText);
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
var commentId = comments.findIndex(function (c) { return c.hasId(823423); });
var removed = comments.splice(commentId, 1);
console.log(comments);
