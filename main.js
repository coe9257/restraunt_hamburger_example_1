//hamburger icon animation
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.hamburger_icon').addEventListener('click', function () {
        this.querySelector('.top_line').classList.toggle('active');
        this.querySelector('.middle_line').classList.toggle('active');
        this.querySelector('.bottom_line').classList.toggle('active');
    });
});

//drop down event listener
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

                        let timeoutExecuted = false;
                        

                        setTimeout(function() {
                            if (!timeoutExecuted) {
                                document.querySelector('body').removeChild(container);
                                timeoutExecuted = true;
                            }
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

// rotate background picture
const body = document.querySelector('body');
let currentIndex = 0;

setInterval(function () {


    const images = [
        'url("./assets/tasty_hamburger.jpg")',
        'url("./assets/tasty_hamburger_2.jpg")',
        'url("./assets/tasty_hamburger_3.jpg")',
        'url("./assets/tasty_hamburger_4.jpg")',
        'url("./assets/tasty_hamburger_5.jpg")',
        'url("./assets/tasty_hamburger_6.jpg")'
    ];

    currentIndex = (currentIndex + 1) % images.length;
    body.style.backgroundImage = images[currentIndex];

    const body_ = document.querySelector('body');
    const style = window.getComputedStyle(body_);
    const background_image = style.backgroundImage;

    // Use regex to extract only the file name
    const fileNameRegex = /\/([^\/]+")/; // Matches the last part after the last slash
    const matches = background_image.match(fileNameRegex);

    let fileName = "";

    if (matches && matches[1]) {
        fileName = matches[1].replace(/"$/, ''); // Remove the trailing double quote
        // console.log("File Name:", fileName);
    }

    // console.log(document.querySelector('.w_slider_dot'))

switch (fileName) {
    case 'tasty_hamburger.jpg':
        console.log("picture_1");
        document.querySelector('.picture_6').style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        document.querySelector('.picture_1').style.backgroundColor = `rgba(255, 0, 0, 0.5)`;
        break;
    case 'tasty_hamburger_2.jpg':
        console.log("picture_2");
        document.querySelector('.picture_1').style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        document.querySelector('.picture_2').style.backgroundColor = `rgba(255, 0, 0, 0.5)`;
        break;
    case 'tasty_hamburger_3.jpg':
        console.log("picture_3");
        document.querySelector('.picture_2').style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        document.querySelector('.picture_3').style.backgroundColor = `rgba(255, 0, 0, 0.5)`;
        console.log("picture_3");
        break;
    case 'tasty_hamburger_4.jpg':
        console.log("picture_4");
        document.querySelector('.picture_3').style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        document.querySelector('.picture_4').style.backgroundColor = `rgba(255, 0, 0, 0.5)`;
        console.log("picture_4");
        break;
    case 'tasty_hamburger_5.jpg':
        console.log("picture_5");
        document.querySelector('.picture_4').style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        document.querySelector('.picture_5').style.backgroundColor = `rgba(255, 0, 0, 0.5)`;
        console.log("picture_5");
        break;
    case 'tasty_hamburger_6.jpg':
        console.log("picture_6");
        document.querySelector('.picture_5').style.backgroundColor = `rgba(255, 0, 0, 0.2)`;
        document.querySelector('.picture_6').style.backgroundColor = `rgba(255, 0, 0, 0.5)`;
        console.log("picture_6");
        break;
        default:     
}

}, 3500);


