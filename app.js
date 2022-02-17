// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(`.nav-toggle`);

const linksList = document.querySelector(`.links`);

navToggle.addEventListener(`click`, function () {
    // console.log(linksList.classList.contains(`show-links`))
    // console.log(linksList.classList.contains(`links`))

    // longest way to achieve the movements of this array
    // let classStorage = linksList.classList;
    // if (classStorage.contains(`show-links`)) {
    //     classStorage.remove(`show-links`);
    // } else {
    //     classStorage.add(`show-links`);
    // }
    linksList.classList.toggle('show-links');
})