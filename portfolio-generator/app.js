const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);
const generatePage = (Erika, ErikaRoguie) => 'Name: ${Erika Sanders}, Github: ${ErikaRoguie}';
console.log(generatePage('Erika', 'ErikaRoguie'));
// Notice the lack of parentheses around the `profileDataArr` parameter?
const printPProfileData = (profileDataArr) => {
    //This...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    //Is the same as this
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem)
    });
};

printProfileData(profileDataArgs);
