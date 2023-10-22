Vue.component('navigation-menu', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Food Blog</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-for="item in menuItems">
                        <a class="nav-link" href="#">{{ item }}</a>
                    </li>
                </ul>
            </div>
        </nav>
    `,
    data() {
        return {
            menuItems: ["Home", "Recipes", "Lifestyles", "Videos", "About"]
        }
    }
});

new Vue({
    el: '#app',
    data: {
        imageSrc: "images/chili.jpg",
        imageAlt: "White Chicken Chili"
    }
});
