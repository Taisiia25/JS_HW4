
// Exercise 1
// Задача - создать класс Student который принимает аргументом в конструкторе объект enrollee (абитурент).
// Id генерируется автоматически при создании экземпляра Student. 
// isSelfPayment определяется по параметру "ratingPoint". Если ratingPoint больше или равен 800, 
// то студент может быть на бюджет, но бюджет он может получить только если его "ratingPoint" не меньше чем у других студентов в массиве. 
// Студентов которые на бюджете не должно быть больше чем 5 в массиве. То есть если "ratingPoint" больше чем хоть у одного из 5 бюджетников то мы присваиваем isSelfPayment = false. 
// И в этот момент студент из массива который имел isSelfPayment = false, но его ratingPoint меньше чем у остальных 5 бюджетников, с нашим включительно, 
// то ему делаем isSelfPayment = true, то есть переводим этого неудачника на контракт. 
// Что делать если у 6-рых студентов баллы 1000? Ну имеется ввиду, 
// если 2 человека с одинаковыми баллами ratingPoint борются за 5 бюджетное место? В таком случае смотрим на schoolRating, у кого он больше тот и на бюджете.
console.log('Exercise 1')

const studentArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 1000,
    schoolPoint: 1000,
    course: 2,
},
{
    name: 'Татьяна',
    surname: 'Коваленко',
    ratingPoint: 880,
    schoolPoint: 700,
    course: 1,
},
{
    name: 'Анна',
    surname: 'Кугир',
    ratingPoint: 1430,
    schoolPoint: 1200,
    course: 3,
},
{
    name: 'Станислав',
    surname: 'Щелоков',
    ratingPoint: 1130,
    schoolPoint: 1060,
    course: 2,
},
{
    name: 'Денис',
    surname: 'Хрущ',
    ratingPoint: 1000,
    schoolPoint: 990,
    course: 4,
},
{
    name: 'Татьяна',
    surname: 'Капустник',
    ratingPoint: 650,
    schoolPoint: 500,
    course: 3,
},
{
    name: 'Максим',
    surname: 'Меженский',
    ratingPoint: 990,
    schoolPoint: 1100,
    course: 1,
},
{
    name: 'Денис',
    surname: 'Марченко',
    ratingPoint: 570,
    schoolPoint: 1300,
    course: 4,
},
{
    name: 'Антон',
    surname: 'Завадский',
    ratingPoint: 1090,
    schoolPoint: 1010,
    course: 3
},
{
    name: 'Игорь',
    surname: 'Куштым',
    ratingPoint: 870,
    schoolPoint: 790,
    course: 1,
},
{
    name: 'Инна',
    surname: 'Скакунова',
    ratingPoint: 1560,
    schoolPoint: 200,
    course: 2,
},
];

class Student {
    constructor(enrolee){
        this.id = Student.ID++;
        this.isSelfPayment = true;
        Object.assign(this, enrolee);

        Student.listOfStudents.push(this)
        Student.filterBySelfPayment()
    }

    static ID = 1;

    static listOfStudents = [];

    static filterBySelfPayment(){

        const studentsList = Student.listOfStudents;

        if (studentsList.length <= 5)  {
            for (let student = 0; student < studentsList.length; student++) {
                studentsList[student].isSelfPayment = studentsList.ratingPoint < 800;
            }   

        } else {
            studentsList.sort((a,b) => {

                if (a.ratingPoint === b.schoolPoint) {
                    return b.schoolPoint - a.schoolPoint;
                }
                return b.ratingPoint - a.ratingPoint
            });

            for (let student = 0; student < studentsList.length; student++) {
                studentsList[student].isSelfPayment = student >= 5 || studentsList[student].ratingPoint < 800;
            }
            
        }
    }
}




for(const enrolee of studentArr) {
    new Student(enrolee)
}

console.log(Student.listOfStudents)

// Exercise 2
console.log('Exercise 2')

// Реализуйте класс CustomString, который будет иметь следующие методы:  
// метод reverse(), который параметром принимает строку, а возвращает ее в перевернутом виде, 
// метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
// метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.

class CustomString  {

    reverse(str){

        let a = '';
    
        for (let i = str.length - 1; i >= 0; i--) {
            a = a + str[i];
        }
        return a;
    };

    ucFirst(str){

        let a = '';
    
        for (let i = 0; i <= str.length - 1; i++) {
            if (i === 0) {
                a  = a + str[i].toUpperCase()
            } else {
                a = a + str[i];
            } 
        }
        return a;
        
    };

    ucWords (str){

        let array = str.split(' ');
    
        for (let i = 0; i <= array.length - 1; i++) {
            array[i] = this.ucFirst(array[i])
        }
        return array.join(' ');
    };

};

const myString = new CustomString();

console.log(myString.reverse('qwerty')); //выведет 'ytrewq'
console.log(myString.ucFirst('qwerty')); //выведет 'Qwerty'
console.log(myString.ucWords('qwerty qwerty qwerty')); //выведет 'Qwerty Qwerty Qwerty