function createMenu(parentElement, menuText) {
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
    parentElement.append(dropdownContainer);
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

export {
    createMenu,
    addMenuItem
};