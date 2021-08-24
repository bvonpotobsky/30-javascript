      // ## Array Cardio Day 2
      const people = [
        { name: "Wes", year: 1988 },
        { name: "Kait", year: 1986 },
        { name: "Irv", year: 1970 },
        { name: "Lux", year: 2015 },
      ];

      const comments = [
        { text: "Love this!", id: 523423 },
        { text: "Super good", id: 823423 },
        { text: "You are the best", id: 2039842 },
        { text: "Ramen is my fav food ever", id: 123523 },
        { text: "Nice Nice Nice!", id: 542328 },
      ];

      // Some and Every Checks
      // Array.prototype.some() // is at least one person 19 or older?  
        const year = dayjs().year();
        const any19 = people.some(ppl => (year - ppl.year) >= 19);
        console.log(any19); // true

      // Array.prototype.every() // is everyone 19 or older?
      const all19 = people.every((ppl) => (year - ppl.year) >= 19);
      console.log(all19); // false

      // Array.prototype.find()
      // Find is like filter, but instead returns just the one you are looking for
      // find the comment with the ID of 823423
        const lookID = comments.find((comment) => comment.id === 823423);
        console.log(lookID);

      // Array.prototype.findIndex()
      // Find the comment with this ID
      const findComment = comments.findIndex((comment) => comment.id === 823423)
      console.log(findComment);
      // delete the comment with the ID of 823423

    const deleteComment = comments.filter((c) => c.id !== 823423);
    console.log(comments);
    console.log(deleteComment);