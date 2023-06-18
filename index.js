let studentsmarks = 80

if (studentsmarks > 79){
    console.log(`A`)
}
else if (studentsmarks =>60 && studentsmarks < 79){
    console.log(`B`)
}
else if (studentsmarks =>49 && studentsmarks <59){
    console.log(`C`)
}
else if (studentsmarks =>40 && studentsmarks <49){
    console.log(`D`)
}
else if(studentsmarks < 40){
    console.log(`E`)
}
else if (studentsmarks >100 || = 0){
    return `input correct marks`
}