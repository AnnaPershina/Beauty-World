import TabsManager, { TabItem } from './tabs.js';
import UserApi from './api/user-api.js';

//Carousel
document.addEventListener('DOMContentLoaded', () => {
    $('#carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.carousel-wrapper__left'),
        nextArrow: $('.carousel-wrapper__right')
    });
});
new TabsManager(document.querySelector('.tabs'));

//Form
const form = document.getElementById('contact-form');
form.addEventListener('submit',function (event) {
    event.preventDefault();
    const { username, userphone} = form.elements;
    const formData = {
        username: username.value,
        userphone: userphone.value
    };
    form.reset();
    console.log(formData);
});

 /*function searching() {
        const searchField = document.getElementById('search-filed');
        const usersWrapEl = document.querySelector('.users');

        searchField.addEventListener('keyup', async function() {
            const searchValue = this.value;
            if (searchValue.length > 0) {
                try {
                    const result = await search(searchValue);
                    console.log(searchValue);
                    if (Array.isArray(result)) {
                        result.forEach(user => {
                            const userEl = createUserEl(user, 'users__item');
                            usersWrapEl.append(userEl);
                        });
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        });

        function createUserEl({ name }, className = '') {
            const userEl = document.createElement('div');
            userEl.textContent = name;
            userEl.classList.add(className);
            return userEl;
        }

        async function search(userName) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${userName}`, {

                method: 'POST',
                body: JSON.stringify({
                    id: 1,
                    name: 'sdasd'
                })
            } );
            return response.json();
        }
};

searching();*/

(async () => {

    let loading = true;

    try {
        const user = await UserApi.getUser();
        const userTasks = await UserApi.getUserPosts(user.id);

        console.log(user, userTasks);
    } catch (error) {
        console.error(error);
    } finally {
        loading = false;
    }

})();