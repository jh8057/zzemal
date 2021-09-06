{
    // intersection type : &

    type Student = {
        name : string;
        score : number;
    }

    type Worker = {
        empolyeeId:number;
        work: () => void;
    }

    function internWork(person:Student & Worker){
        console.log(person.name,person.score,person.empolyeeId,person.work());
    }

    internWork({
        name:"zzemal",
        score:100,
        empolyeeId:1,
        work : ()=>{ return "JUST CODE IT"},
    })
}