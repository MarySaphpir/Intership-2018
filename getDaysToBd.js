const birthday = document.getElementById('currentDate');
const currentDate = document.getElementById('birthdayDate');
const addButton = document.getElementById('buttonBD');
const msPerDay = 24*60*60*1000;


addButton.addEventListener('click', () => {
    const birthdayMs = new Date(birthday.value.replace(/(\d+).(\d+).(\d+)/, '$2/$3/$1'));
    const currentMs = new Date(currentDate.value.replace(/(\d+).(\d+).(\d+)/, '$2/$3/$1'));
    birthdayMs.getFullYear();
    const result = Math.round((currentMs.getTime() - birthdayMs.getTime())/msPerDay);

    console.log(result);
});