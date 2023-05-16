Rick and Morty App

The application utilizes modern concepts and techniques to provide users with a rich experience when working with data.
UseState, useContext, and react-router have been implemented for state management and routing.
Additionally, the application includes functionality for error handling, prop drilling, state lifting, pagination, bookmarking system, and data searching.

It utilizes modern React concepts and hooks such as useState, useEffect, useContext, customHooks, and react-router.
The main goal of this application is to provide a rich user experience when working with data.

The application has a built-in error handling system to ensure that users receive relevant error messages in case of any issues during server interaction or data processing.
Try-catch blocks are used, and appropriate error messages are displayed to the user.

Additionally, the prop drilling approach and state lifting are used to enable communication between components that do not have a direct hierarchical relationship.
The state is lifted to a higher level to facilitate data sharing among multiple components without the need to pass props through each intermediate component.

The application has implemented a functional pagination system to enable efficient navigation through a large amount of data.
Users can browse through different result pages, and the data is dynamically loaded as the user transitions from one page to another.

Additionally, there is a bookmarking system functionality that allows users to mark specific data or pages they want to save for easy access later on.
This functionality utilizes local storage to enable storing the user's bookmarked items.

The application also features a functional search bar that enables users to search for data based on specific criteria.
The number of searched cards is limited to 10.

The application is designed with access to other pages and modal windows.
This functionality allows users to explore different parts of the application through navigation to different pages.
Additionally, modal windows are used to display temporary or additional information, such as dialogs or alerts, without the need to leave the current page.
This functionality enhances the user experience by enabling interaction with different parts of the application in an intuitive manner.
