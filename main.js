document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hamburger_icon').addEventListener('click', function () {
        this.querySelector('.top_line').classList.toggle('active');
        this.querySelector('.middle_line').classList.toggle('active');
        this.querySelector('.bottom_line').classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () { 
    if (!document.querySelector('.drop_down_container')) {
        function create_container() {
            document.querySelector('.hamburger_icon').addEventListener('click', function () {

                function create_drop_down_container() {
                    const drop_down_container = document.createElement('div');
                    drop_down_container.classList = 'drop_down_container';
                    document.querySelector('body').appendChild(drop_down_container);
                }
                create_drop_down_container();

                function create_close_box() {
                    const drop_down_container = document.querySelector('.drop_down_container');
                    const x_box = document.createElement('div');
                        x_box.textContent = 'X';
                        x_box.classList = 'x_box'
                        drop_down_container.appendChild(x_box);
                };
                create_close_box();

                function close_box_close_event() {
                    const close_x_element = document.querySelector('.x_box');
                    close_x_element.addEventListener('click', function() {
                        const container = document.querySelector('.drop_down_container');
                        container.style.animation = `slideOut .5s forwards`;

                        setTimeout(function() {
                            document.querySelector('body').removeChild(container);
                        }, 500);
                    });
                };
                close_box_close_event();

                function append_logo_in_drop_down() {
                    const logo_nav_container = document.querySelector('.restaurant_logo');
                    const cloned_element = logo_nav_container.cloneNode(true);
                    document.querySelector('.drop_down_container').appendChild(cloned_element);
                    cloned_element.classList = "cloned_logo_image_container";
                };
                append_logo_in_drop_down();

                function create_link_container() {
                    const drop_down_container = document.querySelector('.drop_down_container');
                    const link_container = document.createElement('div');
                        link_container.classList = 'drop_down_link_container';
                        drop_down_container.appendChild(link_container);
                };
                create_link_container();

                function create_link_elements() {

                    const drop_down_container = document.querySelector('.drop_down_container');

                    function link_1() {
                        const link = document.createElement('a');
                            link.classList = 'drop_down_links link_1';
                            link.textContent = 'About';
                            drop_down_container.appendChild(link);

                    }
                    link_1();

                    function link_2() {
                        const link = document.createElement('a');
                        link.classList = 'drop_down_links link_2';
                        link.textContent = 'Restraunt Menu';
                        drop_down_container.appendChild(link);
                    }
                    link_2();

                    function link_3() {
                        const link = document.createElement('a');
                        link.classList = 'drop_down_links link_3';
                        link.textContent = 'Book Reservation';
                        drop_down_container.appendChild(link);
                    }
                    link_3();

                    function link_4() {
                        const link = document.createElement('a');
                        link.classList = 'drop_down_links link_4';
                        link.textContent = 'Contact Information';
                        drop_down_container.appendChild(link);
                    }
                    link_4();

                    function apply_hover_event_listener() {
                        const drop_down_links = document.querySelectorAll('.drop_down_links');
                        drop_down_links.forEach(function (element) {

                            element.addEventListener('mouseover', function () {
                                console.log("working")
                                element.style.backgroundColor = 'rgb(243, 15, 15, .4)';
                                element.style.color = `white`;
                            });

                            element.addEventListener('mouseout', function () {
                                console.log("working")
                                element.style.backgroundColor = `rgba(133, 15, 19, 0.97)`;
                                element.style.color = 'white';
                            });

                        });
                    };
                    apply_hover_event_listener();
                };
                create_link_elements();

                function create_event_listener() {

                };
                create_event_listener();
            });
        };
        create_container();
    };
});