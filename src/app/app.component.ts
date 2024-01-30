import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

export interface Tile {
  color: string;
  text: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-projects';
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
    from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
    originally bred for hunting.`;
  projects = [
    {
      id: '1',
      title: 'Chrome screen recorder',
      description: `Elevate your browsing experience with my JavaScript extension crafted for Google Chrome. Seamlessly integrating screen recording functionality, this extension empowers users to capture and share their digital journeys effortlessly, adding a dynamic layer to the browsing experience.`,
      url: 'https://github.com/ThilakRamanie/Chrome-Screen-Recorder',
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Chrome-Screen-Recorder',
    },
    {
      id: '2',
      title: 'User management',
      description: `User-friendly web application using React for seamless user management. This intuitive platform enables efficient user addition and management, enhancing overall usability and administrative control.`,
      url: 'https://picsum.photos/id/1011/800/450',
      liveURL:
        'https://652749dc85d7ad4b23f45d46--joyful-chaja-56c3aa.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/User-list-crud-react',
    },
    {
      id: '9',
      title: 'Food app',
      description: `Food Web App Front-end, meticulously crafted with React.js. Immerse users in an engaging culinary experience through seamlessly integrated components, including elegant cards, a visually appealing gallery, a streamlined navbar, and a polished footer.`,
      liveURL: 'https://clever-colden-7e66b0.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/food-app',
    },
    {
      id: '10',
      title: 'Infinite photo gallery',
      description: `Infinite Scrolling Photo Gallery developed with React.js, leveraging the Splash API. This implementation seamlessly integrates dynamic content loading, showcasing a commitment to excellence in web development and React.js proficiency.`,
      liveURL: 'https://musing-mahavira-14d494.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Photo-gallery',
    },
    {
      id: '11',
      title: 'Github users',
      description: `React website designed to showcase GitHub users sourced from an API, seamlessly integrated with a user-friendly pagination feature. This project offers an elegant solution to explore GitHub profiles efficiently through a sophisticated and responsive interface.`,
      liveURL: 'https://loving-wilson-dfa617.netlify.app/',
      githubURL:
        'https://github.com/ThilakRamanie/Github-users-with-pagination',
    },
    {
      id: '12',
      title: 'Random cards',
      description: `Reusable Person Card, skillfully crafted with React.js and seamlessly integrated with the Random Users API. Experience dynamic user details with every click, demonstrating an adept combination of React.js proficiency and API integration.`,
      liveURL: 'https://heuristic-bell-f316aa.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/react-card',
    },
    {
      id: '13',
      title: 'React markdown',
      description: `React Markdown npm package, transforming markdown syntax into visually stunning snippets. This versatile tool showcases a fusion of React.js capabilities, providing a solution for rendering and displaying markdown content.`,
      liveURL: 'https://hungry-euclid-b061ee.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/react-markdown',
    },
    {
      id: '14',
      title: 'React sidenav',
      description: `Responsive Side Menu example, developed using React.js, adapting to various screen sizes, this component showcases a blend of React.js functionality and design finesse, providing users with an intuitive navigation experience.`,
      liveURL: 'https://focused-carson-5050df.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Side-Tabs',
    },
    {
      id: '15',
      title: 'React menus',
      description: `Menu Card Web Application, crafted with React.js. Elevate user experience by seamlessly adding categories (menus) dynamically. This project reflects a commitment to dynamic functionality and intuitive design.`,
      liveURL: 'https://heuristic-aryabhata-6accc2.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Menu-card',
    },
    {
      id: '16',
      title: 'React accordion',
      description: `Accordion Functionality developed with React.js, tailored for displaying FAQs. This feature provides an elegant and user-friendly interface for users to explore and navigate frequently asked questions. Elevate your web application with this React.js component.`,
      liveURL: 'https://cranky-bohr-868f96.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Accordion',
    },
    {
      id: '17',
      title: 'React testimonials',
      description: `Presenting a testimonial template crafted with precision using React.js. This project seamlessly integrates a dynamic and visually appealing structure for showcasing testimonials.`,
      liveURL: 'https://compassionate-tereshkova-3d97aa.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Review-Template',
    },
    {
      id: '18',
      title: 'React conditional rendering',
      description: `A Tour App built with React.js, incorporating hooks like useState and useEffect. Employing conditional rendering, this application provides a seamless and intuitive tour experience.`,
      liveURL: 'https://cranky-poincare-c88693.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Tours',
    },
    {
      id: '19',
      title: 'Birthday reminder',
      description: `Explore a Birthday Reminder Web App developed with React.js, designed to efficiently organize and notify users of upcoming birthdays. This application demonstrates the straightforward and professional approach of React.js development for a seamless user experience.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/birthday-reminder',
    },
    {
      id: '20',
      title: 'Us-Tube',
      description: `Video Streaming Platform developed with precision, allowing users to seamlessly search and play videos based on their desired keywords. This application showcases a user-friendly interface and efficient functionality, providing a streamlined experience for discovering and enjoying content.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Us-Tube',
    },
    {
      id: '21',
      title: 'Face Recognition',
      description: `Face Recognition Web App developed using JavaScript and powered by the TensorFlow API. This application not only recognizes faces but also displays emotions through facial patterns in real-time, showcasing the seamless integration of advanced technology for a comprehensive user experience.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/FaceRecognitionUsingJS',
    },
    {
      id: '22',
      title: 'Nasa API',
      description: `Explore the cosmos effortlessly with our React web app. Instantly fetch the NASA Picture of the Day and seamlessly search for captivating posts from the NASA API. Your window to the universe awaits.`,
      liveURL: 'https://react-nasa-api-spark-studios.web.app/',
      githubURL: 'https://github.com/ThilakRamanie/react-nasa-api',
    },
    {
      id: '3',
      title: 'Feedback app',
      description: ` A sophisticated feedback application using React, providing users with an intuitive platform to share valuable insights. This responsive and user-friendly app facilitates seamless communication, fostering a robust feedback loop for continuous improvement.`,
      url: 'https://picsum.photos/id/1011/800/450',
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/feedback-app',
    },
    {
      id: '4',
      title: 'Inventory management',
      description: `Developed a dynamic CRUD (Create, Read, Update, Delete) application using Angular for straightforward and efficient inventory management. This user-friendly app simplifies data handling, allowing seamless management of inventory items with ease.`,
      liveURL: '',
      githubURL:
        'https://github.com/ThilakRamanie/angular-crud-inventory-management',
    },
    {
      id: '5',
      title: 'Mail-Scraper-Extension',
      description: `Developed a Google Chrome extension for efficient email scraping within websites. This streamlined tool provides a seamless and secure solution for extracting email data, enhancing productivity in data collection tasks`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Mail-Scraper-Extension',
    },
    {
      id: '6',
      title: 'Pagination component',
      description: `Pagination Component developed with Vue.js, designed to streamline content navigation. With seamless integration, it offers a sleek responsive interface, ensuring a smooth and intuitive browsing experience for your Vue.js applications.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/vue-table-pagination',
    },
    {
      id: '7',
      title: 'React responsive design',
      description: `React web application developed which showcases the responsive design of various elements and a form animation, all of which is done using css without external libraries`,
      liveURL: 'https://frosty-lamport-f68ba8.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Responsive-design',
    },
    {
      id: '8',
      title: 'IPL Trophies',
      description: `Mobile App made with flutter that shows number of times a team has reached finals and won trophies. It also shows the hights of the team and some catchy images.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/IPL_Trophies',
    },
    {
      id: '23',
      title: 'Clima web',
      description: `Web application to get the climate based on the city searched`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Clima-Web',
    },
  ];

  uiProjects = [
    {
      id: '1',
      title: 'User management',
      description: `User-friendly web application using React for seamless user management. This intuitive platform enables efficient user addition and management, enhancing overall usability and administrative control.`,
      url: 'https://picsum.photos/id/1011/800/450',
      liveURL:
        'https://652749dc85d7ad4b23f45d46--joyful-chaja-56c3aa.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/User-list-crud-react',
    },
    {
      id: '2',
      title: 'Food app',
      description: `Food Web App Front-end, meticulously crafted with React.js. Immerse users in an engaging culinary experience through seamlessly integrated components, including elegant cards, a visually appealing gallery, a streamlined navbar, and a polished footer.`,
      liveURL: 'https://clever-colden-7e66b0.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/food-app',
    },
    {
      id: '3',
      title: 'Infinite photo gallery',
      description: `Infinite Scrolling Photo Gallery developed with React.js, leveraging the Splash API. This implementation seamlessly integrates dynamic content loading, showcasing a commitment to excellence in web development and React.js proficiency.`,
      liveURL: 'https://musing-mahavira-14d494.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Photo-gallery',
    },
    {
      id: '4',
      title: 'Github users',
      description: `React website designed to showcase GitHub users sourced from an API, seamlessly integrated with a user-friendly pagination feature. This project offers an elegant solution to explore GitHub profiles efficiently through a sophisticated and responsive interface.`,
      liveURL: 'https://loving-wilson-dfa617.netlify.app/',
      githubURL:
        'https://github.com/ThilakRamanie/Github-users-with-pagination',
    },
    {
      id: '5',
      title: 'Random cards',
      description: `Reusable Person Card, skillfully crafted with React.js and seamlessly integrated with the Random Users API. Experience dynamic user details with every click, demonstrating an adept combination of React.js proficiency and API integration.`,
      liveURL: 'https://heuristic-bell-f316aa.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/react-card',
    },
    {
      id: '6',
      title: 'React markdown',
      description: `React Markdown npm package, transforming markdown syntax into visually stunning snippets. This versatile tool showcases a fusion of React.js capabilities, providing a solution for rendering and displaying markdown content.`,
      liveURL: 'https://hungry-euclid-b061ee.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/react-markdown',
    },
    {
      id: '7',
      title: 'React sidenav',
      description: `Responsive Side Menu example, developed using React.js, adapting to various screen sizes, this component showcases a blend of React.js functionality and design finesse, providing users with an intuitive navigation experience.`,
      liveURL: 'https://focused-carson-5050df.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Side-Tabs',
    },
    {
      id: '8',
      title: 'React menus',
      description: `Menu Card Web Application, crafted with React.js. Elevate user experience by seamlessly adding categories (menus) dynamically. This project reflects a commitment to dynamic functionality and intuitive design.`,
      liveURL: 'https://heuristic-aryabhata-6accc2.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Menu-card',
    },
    {
      id: '9',
      title: 'React accordion',
      description: `Accordion Functionality developed with React.js, tailored for displaying FAQs. This feature provides an elegant and user-friendly interface for users to explore and navigate frequently asked questions. Elevate your web application with this React.js component.`,
      liveURL: 'https://cranky-bohr-868f96.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Accordion',
    },
    {
      id: '10',
      title: 'React testimonials',
      description: `Presenting a testimonial template crafted with precision using React.js. This project seamlessly integrates a dynamic and visually appealing structure for showcasing testimonials.`,
      liveURL: 'https://compassionate-tereshkova-3d97aa.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Review-Template',
    },
    {
      id: '11',
      title: 'React conditional rendering',
      description: `A Tour App built with React.js, incorporating hooks like useState and useEffect. Employing conditional rendering, this application provides a seamless and intuitive tour experience.`,
      liveURL: 'https://cranky-poincare-c88693.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Tours',
    },
    {
      id: '12',
      title: 'Birthday reminder',
      description: `Explore a Birthday Reminder Web App developed with React.js, designed to efficiently organize and notify users of upcoming birthdays. This application demonstrates the straightforward and professional approach of React.js development for a seamless user experience.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/birthday-reminder',
    },
    {
      id: '13',
      title: 'Us-Tube',
      description: `Video Streaming Platform developed with precision, allowing users to seamlessly search and play videos based on their desired keywords. This application showcases a user-friendly interface and efficient functionality, providing a streamlined experience for discovering and enjoying content.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Us-Tube',
    },
    {
      id: '14',
      title: 'Nasa API',
      description: `Explore the cosmos effortlessly with our React web app. Instantly fetch the NASA Picture of the Day and seamlessly search for captivating posts from the NASA API. Your window to the universe awaits.`,
      liveURL: 'https://react-nasa-api-spark-studios.web.app/',
      githubURL: 'https://github.com/ThilakRamanie/react-nasa-api',
    },
    {
      id: '15',
      title: 'Feedback app',
      description: ` A sophisticated feedback application using React, providing users with an intuitive platform to share valuable insights. This responsive and user-friendly app facilitates seamless communication, fostering a robust feedback loop for continuous improvement.`,
      url: 'https://picsum.photos/id/1011/800/450',
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/feedback-app',
    },
    {
      id: '16',
      title: 'Inventory management',
      description: `Developed a dynamic CRUD (Create, Read, Update, Delete) application using Angular for straightforward and efficient inventory management. This user-friendly app simplifies data handling, allowing seamless management of inventory items with ease.`,
      liveURL: '',
      githubURL:
        'https://github.com/ThilakRamanie/angular-crud-inventory-management',
    },
    {
      id: '17',
      title: 'Pagination component',
      description: `Pagination Component developed with Vue.js, designed to streamline content navigation. With seamless integration, it offers a sleek responsive interface, ensuring a smooth and intuitive browsing experience for your Vue.js applications.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/vue-table-pagination',
    },
    {
      id: '18',
      title: 'React responsive design',
      description: `React web application developed which showcases the responsive design of various elements and a form animation, all of which is done using css without external libraries`,
      liveURL: 'https://frosty-lamport-f68ba8.netlify.app/',
      githubURL: 'https://github.com/ThilakRamanie/Responsive-design',
    },
    {
      id: '19',
      title: 'Clima web',
      description: `Web application to get the climate based on the city searched`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Clima-Web',
    },
  ];

  nodeProjects = [
    {
      id: '1',
      title: 'Face Recognition',
      description: `Face Recognition Web App developed using JavaScript and powered by the TensorFlow API. This application not only recognizes faces but also displays emotions through facial patterns in real-time, showcasing the seamless integration of advanced technology for a comprehensive user experience.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/FaceRecognitionUsingJS',
    },
    {
      id: '2',
      title: 'Fullstack todo list',
      description: `This project leverages the power of server-side JavaScript to create a robust and scalable todo list application.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/fullstack-todo-list',
    },
    {
      id: '3',
      title: 'Store API',
      description: `API devloped using Node.js which has concepts like filters, sorting, pagination using mongoose and MongoDB`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Store-API',
    },
    {
      id: '4',
      title: 'Node JWT',
      description: `Node.js JWT implementation for authorization`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Node-JWT',
    },
    {
      id: '5',
      title: 'Jobs API',
      description: `A Node.js jobs API, for creating and publishing jobs. Users can create jobs, delete, update and receive jobs. Uses JWT, mongoDB, mongoose, swagger and bcrypt.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Jobs-API',
    },
  ];
  extensionProjects = [
    {
      id: '1',
      title: 'Chrome screen recorder',
      description: `Elevate your browsing experience with my JavaScript extension crafted for Google Chrome. Seamlessly integrating screen recording functionality, this extension empowers users to capture and share their digital journeys effortlessly, adding a dynamic layer to the browsing experience.`,
      url: 'https://github.com/ThilakRamanie/Chrome-Screen-Recorder',
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Chrome-Screen-Recorder',
    },
    {
      id: '2',
      title: 'Mail Scraper Extension',
      description: `Developed a Google Chrome extension for efficient email scraping within websites. This streamlined tool provides a seamless and secure solution for extracting email data, enhancing productivity in data collection tasks`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Mail-Scraper-Extension',
    },
    {
      id: '3',
      title: 'Welcome Chrome Extension',
      description: `Extension for displaying welcome screen on every new tab opened in chrome brwoser`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Welcome-Chrome-Extension',
    },
    {
      id: '4',
      title: 'Text-Search-Extension',
      description: `Select a particular text in the context menu of browser and click on extension option, to serach for the selected text using preferred search engine.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/Text-Search-Extension',
    },
  ];

  otherProjects = [
    {
      id: '8',
      title: 'IPL Trophies',
      description: `Mobile App made with flutter that shows number of times a team has reached finals and won trophies. It also shows the hights of the team and some catchy images.`,
      liveURL: '',
      githubURL: 'https://github.com/ThilakRamanie/IPL_Trophies',
    },
  ];
}
