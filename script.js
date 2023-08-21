//Dropdown
function createMenu(buttonContainer, menuText) {
    const menuId = menuText.replace(/\s+/g, "_"); // Replace spaces with underscores for the id
    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("dropdown-container");
    dropdownContainer.setAttribute("id", menuId);

    const dropBtn = document.createElement("button");
    dropBtn.classList.add("dropbtn");
    dropBtn.textContent = menuText;

    const dropdownItems = document.createElement("div");
    dropdownItems.classList.add("dropdown-items");

    dropdownContainer.append(dropBtn, dropdownItems);
    buttonContainer.append(dropdownContainer);
}

function addMenuItem(parentMenuID, itemText, itemLink) {
    const parentMenu = document.querySelector(`#${parentMenuID.replace(/\s+/g, "_")}`); // Replace spaces with underscores in the id
    if (!parentMenu) {
        console.error(`Parent menu with ID ${parentMenuID} not found.`);
        return;
    }

    const dropdownItems = parentMenu.querySelector(".dropdown-items");

    const newLink = document.createElement("a");
    newLink.textContent = itemText;
    newLink.setAttribute("href", itemLink);

    dropdownItems.appendChild(newLink);
}

//Hamburger menu
function createHamburger(buttonContainer, sidebarContainer, sidebarOptional) {
    // Create the label element
    const hamburgerLabel = document.createElement("label");
    hamburgerLabel.id = "hamburger-menu";
    hamburgerLabel.className = "burger";

    // Create the input element (checkbox)
    const burgerInput = document.createElement("input");
    burgerInput.type = "checkbox";
    burgerInput.id = "burger";

   // Create the open menu image
   const burgerOpenImg = document.createElement("div");
   burgerOpenImg.id = "burger-open";
   burgerOpenImg.textContent = "☰"
   // Create the close menu image
   const burgerCloseImg = document.createElement("div");
   burgerCloseImg.id = "burger-close";
   burgerCloseImg.textContent = "✕";

    // Append the input and images to the label
    hamburgerLabel.appendChild(burgerInput);
    hamburgerLabel.appendChild(burgerOpenImg);
    hamburgerLabel.appendChild(burgerCloseImg);

    // Append the label to the target container
    buttonContainer.appendChild(hamburgerLabel);

    // Get the hamburger menu, sidebar, overlay
    const hamburgerMenu = document.querySelector("#burger");

    if(sidebarOptional === false) return
    //////////////////

    const sidebar = document.createElement("div");
    const menuOverlay = document.createElement("div");

    sidebar.className = "sidebar";
    menuOverlay.setAttribute("id", "menu-overlay")
    
    // Add the overlay to the sidebar
    sidebarContainer.appendChild(menuOverlay);
    // Add the sidebar to the sidebarContainer
    sidebarContainer.appendChild(sidebar);

    hamburgerMenu.addEventListener("click", (e) => {
        if (e.target.checked) {
            sidebar.classList.add("active");
            menuOn();
        } else {
            menuOff();
        }
    });

    function menuOn(){
        menuOverlay.classList.add("active")
        hamburgerMenu.checked
        menuOverlay.addEventListener("click", closeMenu)
    }
    function menuOff(){
        menuOverlay.classList.remove("active")
        sidebar.classList.remove("active")
    }
    function closeMenu() {
        menuOverlay.removeEventListener("click", closeMenu); // Remove the event listener after the menu is closed
        hamburgerMenu.checked = false
        menuOff();
    }
}

export {
    createMenu,
    addMenuItem,
    createHamburger
};