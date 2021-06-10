const AllBtn = document.getElementById('all');
const BreakfastBtn = document.getElementById('breakfast');
const LunchBtn = document.getElementById('lunch');
const DinnerBtn = document.getElementById('dinner');
const ShakesBtn = document.getElementById('shakes');


//Get all menu

const Menus = document.querySelectorAll('.menu');
const Breakfasts = document.querySelectorAll('.breakfast');
const lunchs = document.querySelectorAll('.lunch');
const Dinners = document.querySelectorAll('.dinner');

AllBtn.addEventListener('click', () => {
    Menus.forEach((menu) => {
        menu.classList.remove('hide');
        menu.classList.add('animate');
    });
});

BreakfastBtn.addEventListener('click', () => {
    Menus.forEach((menu) => {
        menu.classList.add('hide');
        menu.classList.remove('animate');
    });
    Breakfasts.forEach((breakfast) => {
        breakfast.classList.remove('hide');
        breakfast.classList.add('animate');
    });
});

LunchBtn.addEventListener('click', () => {
    Menus.forEach((menu) => {
        menu.classList.remove('animate');
        menu.classList.add('hide');
    });
    lunchs.forEach((lunch) => {
        lunch.classList.remove('hide');
        lunch.classList.add('animate');
    });
});

DinnerBtn.addEventListener('click', () => {
    Menus.forEach((menu) => {
        menu.classList.remove('animate');
        menu.classList.add('hide');
    });
   Dinners.forEach((dinner) => {
        dinner.classList.remove('hide');
        dinner.classList.add('animate');
    });
});