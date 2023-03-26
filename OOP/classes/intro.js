// Defiing a class woith constructor

// REMEMBER : Class names start with capital letters
class Book{
    constructor(title , series , author ){
        this.title = title;
        this.series = series;
        this.author = author;
    }

    // Defining Methods
    getAuthorInformtion(){
        return `${this.author}`
    }
}

// Instanace of the class : NEW KEYWORD
const bookObj = new Book('This is the title' , 'This is the series' , 'This is the author');

console.log(bookObj);

// Accessing Methods of the class
const authorInfo = bookObj.getAuthorInformtion();
console.log(authorInfo);


// Using the instanceof operator to check an object's type
console.log("is bookObj instance of Book ? --------" , bookObj instanceof Book)


class Task {
    static taskList = [];

    static printTaskList() {
      console.log(this.taskList);
    }

    static addTask(task) {
      this.taskList.push(task);
    }

    constructor(taskDetail) {
      this.taskDetail = taskDetail;
      Task.addTask(this);
    }
  }

  const laundry = new Task('laundry');
  console.log(Task.printTaskList());
  console.log(laundry.taskList);
