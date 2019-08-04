
interface ILength {
    length:number;
}

function getLength(variable :ILength) :void {
    console.log(variable.length);
}

getLength([1,2,3,4,5]);

const box = {
    name: 'FS',
    length: 20
}

getLength(box);


interface IUser {
    name:string;
    age?:number;
    logInfo?(info:string) :void;
}

const user :IUser = {
    name: 'Ignis',
    logInfo(info:string) :void {
        console.log(`info: ${info}`);
    }
}

const user1 :IUser = {
    name: 'Promto',
    age: 25
}

class User implements IUser {
    name:string = 'FS';
    job:string = 'Mad Scientist';

    logInfo(info:string) :void {
        console.log(`info: ${info}`);
    }
}

const man = new User();
console.log(man);