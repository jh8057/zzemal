{
    // Enum
    // Javascript
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY= 0 ;
    const TUESDAY = 1;
    const WEDNESDAY =2;
    const DAYS_ENUM = Object.freeze({"MONDAY":0,"TUESDAY":1,"WEDNESDAY":2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    // Typescript
    enum Days{
        Monday ,
        Tuesday,
        wednesday,
        thursday,
        friday
    }
    // 비추 => 왜? -> type이 보장 되지 않는다.
    // 예시
    console.log(Days.Monday);
    let day:Days = Days.Monday 
    day = 10;
    console.log(day);

    // 그래서 그냥 Union 타입으로 설정하는게 더 좋다
    type DaysOfWeek = "Monday" |  "Tuesday"|  "wednesday"|"thursday"|"friday";
    let selectedday:DaysOfWeek = "Monday"

    console.log(Days.friday);


    enum test{
        test1 = "t1",
        test2 = "t2"
    }
    console.log(test.test1)
}