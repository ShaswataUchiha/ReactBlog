# React + Vite

# PostPeak 🧾

Welcome to PostPeak – a modern and fully-featured blog application crafted with React and powered by Appwrite. This platform offers a seamless blogging experience with a real-time editor, user authentication, and much more, all wrapped in a sleek interface

## Features

- 📝 Real-Time Editor: Craft your content on the fly with our dynamic editor that updates in real-time.
- 🔐 User Authentication: Secure login and signup functionality to keep your account safe.
- 🏠 Homepage: Explore all blogs in one place with a beautifully organized homepage.
- 🖊️ Rich Text Editor: Enjoy a feature-rich text editor with advanced formatting options to make your blogs stand out.
- ⚙️ Robust API Error Handling: Smooth user experience with enhanced error handling, ensuring stability and clarity.
- 🚀 Hosted on Vercel: Fast and reliable hosting for optimal performance.


## Installation

1. **Clone the repository:**

    ```sh
    https://github.com/ShaswataUchiha/ReactBlog
    cd your-folder-name
    ```

2. **Install dependencies:**

    This project relies on the following key dependencies:

    - **[@reduxjs/toolkit](https://redux-toolkit.js.org/):** `^1.9.5` - Efficient Redux development with less boilerplate.
- **[@tinymce/tinymce-react](https://www.tiny.cloud/docs/integrations/react/):** `^4.3.0` - A React wrapper for TinyMCE, a rich text editor.
- **[Appwrite](https://appwrite.io/):** `^14.0.1` - Self-hosted backend as a service for Web, Mobile, and Flutter developers.
- **[html-react-parser](https://github.com/remarkablemark/html-react-parser):** `^4.2.2` - Converts HTML strings into React components.
- **[React](https://reactjs.org/):** `^18.2.0` - A JavaScript library for building user interfaces.
- **[React DOM](https://reactjs.org/docs/react-dom.html):** `^18.2.0` - Serves as the entry point of the DOM-related rendering paths.
- **[react-hook-form](https://react-hook-form.com/):** `^7.46.1` - Performant, flexible, and extensible forms with easy-to-use validation.
- **[react-redux](https://react-redux.js.org/):** `^8.1.2` - Official React bindings for Redux.
- **[react-router-dom](https://reactrouter.com/):** `^6.16.0` - Declarative routing for React applications.```sh

3. **Create a `.env` file:**

    Create a `.env` file in the root directory and add your API key:

    ```env
    VITE_APPWRITE_PROJECT_ID=""
    ```
    ```env
    VITE_APPWRITE_DATABASE_ID=""
    ```
    ```env
    VITE_APPWRITE_COLLECTION_ID=""
    ```
    ```env
    VITE_APPWRITE_BUCKET_ID=""
    ```

4. **Start the development server:**

    ```sh
    npm start
    ```

    The application will be available at `http://localhost:3000`.

    ## Usage

1. **Login and SignUp:**

    SignUp and Login with your email.

2. **Upload Post**

    Choose your picture write about your thoughts ands thats it. Upload them

3. **Gallary":**

    See your post. See others posts as well


## API

This application uses the [Appwrite-API](https://appwrite.io/). You need to sign up for an API key and add it to the `.env` file.

## Technologies Used

- React
- Tailwind for styling
- React-Hook-Form for better form handeling
- Tiny-Mice for feature-reach text editor
- React-redux for state management



## 📚 Documentation

 - [Appwrite Documentation](https://appwrite.io/docs)
 - [React Documentation](https://react.dev/)
 - [React-Hook-Form Documentation](https://react-hook-form.com/get-started)
 - 




## 🛠️ Build and Deployment

To deploy your app on Vercel:

```bash
  npm run deploy
```


## Feedback

If you have any feedback, please reach out to us at shaswataroy1234@gmail.com

ejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
