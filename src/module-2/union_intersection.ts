

type noobDeveloper = {
    name:string;
}

// type JuniorDeveloper = {
//     name:string;
//     experience: number,
//     project:false
// }

type JuniorDeveloper = noobDeveloper & {
    name:string;
    experience: number,
    project:false
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience : number;
    level:"fresher" | "mid" | "senior"
}


const newDeveloper : JuniorDeveloper = {
    name:"anisha",
    experience: 3,
    project:false,
    // level:4   extra property add kora zabe na
}

const NextDeveloper = {
    name : "next man",
    level:"mid"
}