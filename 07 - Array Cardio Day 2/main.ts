    // ## Array Cardio Day 2

    class Person {
      name: string;
      year: number;
    }

    const people: Person[] = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    class CommentItem {

      constructor( public text: string, public id: number ) {

      }

      // I know you wouldn't normally do this kind of thing!
      hasId( id: number ) : boolean {
        return this.id === id;
      }
    }

    const comments: CommentItem[] = [
      new CommentItem( 'Love this!', 523423 ),
      new CommentItem( 'Super good', 823423 ),
      new CommentItem( 'You are the best', 2039842 ),
      new CommentItem( 'Ramen is my fav food ever', 123523 ),
      new CommentItem( 'Nice Nice Nice!', 542328 )
    ];

    function nineteenPlus( person: Person ) : boolean {
      const now:number = new Date().getFullYear();
      return ( now - person.year ) > 19;
    }

    // function 

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    if (people.some( nineteenPlus )) {
      console.log('Yes, one person is at least 19');
    } else {
      console.log('No, there is not one person who is at least 19');
    }

    // Array.prototype.every() // is everyone 19 or older?
    if (people.every( nineteenPlus ) ) {
      console.log('Yes, all people are at least 19');
    } else {
      console.log('No, not all people are at least 19');
    }

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const foundComment: CommentItem | undefined = comments.find( c => c.hasId(823423) );
    const commentText: string = foundComment ? foundComment.text : 'No comment found';
    console.log( commentText ); 


    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const commentId: number = comments.findIndex( c => c.hasId(823423) );
    const removed: CommentItem[] = comments.splice( commentId, 1 );
    console.log( comments );

